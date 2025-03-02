"use server";
import { prisma } from "@/libs/prismaDb";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { isAuthorized } from "@/libs/isAuthorized";

/**
 * Fetches all API keys associated with the currently authorized user.
 * @returns {Promise<Array>} A list of API keys.
 */
export async function getApiKeys() {
    // Ensure the user is authorized
    const user = await isAuthorized();

    // Fetch API keys from the database that belong to the authorized user
    const apiKeys = await prisma.apiKey.findMany({
        where: {
            userId: user?.id as string,
        },
    });

    return apiKeys;
}

/**
 * Creates a new API key for the authorized user.
 * @param {string} keyName - The name of the API key to be created.
 * @returns {Promise<void>}
 */
export async function createApiKey(keyName: string) {
    // Ensure the user is authorized
    const user = await isAuthorized();

    if (!user) {
        return null;
    }

    // Use the user's role as the base for the API key
    const key = user.role as string;

    // Hash the API key for security
    const hashedKey = await bcrypt.hash(key, 10);

    // Create a new API key in the database
    await prisma.apiKey.create({
        data: {
            name: keyName,
            key: hashedKey,
            userId: user.id,
        },
    });

    // Revalidate the cache for the API keys page to reflect the changes
    revalidatePath("/admin/api");
}

/**
 * Deletes an API key by its ID.
 * @param {string} id - The ID of the API key to delete.
 * @returns {Promise<Object>} The deleted API key.
 */
export async function deleteApiKey(id: string) {
    // Delete the API key from the database
    const deletedKey = await prisma.apiKey.delete({
        where: {
            id,
        },
    });

    // Revalidate the cache for the API keys page to reflect the changes
    revalidatePath("/admin/api");

    return deletedKey;
}