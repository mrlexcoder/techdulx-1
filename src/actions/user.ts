"use server";
import { prisma } from "@/libs/prismaDb";
import { isAuthorized } from "@/libs/isAuthorized";

/**
 * Fetches users based on a role filter, excluding the current user and demo users.
 * @param {any} filter - The role filter to apply (e.g., "admin", "user").
 * @returns {Promise<Array>} A list of filtered users.
 */
export async function getUsers(filter: any) {
	// Ensure the current user is authorized
	const currentUser = await isAuthorized();

	// Fetch users from the database based on the provided role filter
	const users = await prisma.user.findMany({
		where: {
			role: filter,
		},
	});

	// Filter out the current user and any demo users
	const filteredUsers = users.filter(
		(user) =>
			user.email !== currentUser?.email && !user.email?.includes("demo-")
	);

	return filteredUsers;
}

/**
 * Updates a user's information in the database.
 * @param {any} data - The data to update, including the user's email.
 * @returns {Promise<Object>} The updated user object.
 */
export async function updateUser(data: any) {
	const { email } = data;

	// Update the user in the database, ensuring the email is lowercase
	return await prisma.user.update({
		where: {
			email: email.toLowerCase(),
		},
		data: {
			email: email.toLowerCase(), // Ensure email is stored in lowercase
			...data, // Spread the rest of the data to update
		},
	});
}

/**
 * Deletes a user from the database, with checks for demo users.
 * @param {any} user - The user object to delete.
 * @returns {Promise<Object>} The deleted user object or an error.
 */
export async function deleteUser(user: any) {
	// Prevent deletion of demo users
	if (user?.email?.includes("demo-")) {
		return new Error("Cannot delete demo user.");
	}

	// Check if the user exists
	if (!user) {
		return new Error("User not found.");
	}

	// Delete the user from the database
	return await prisma.user.delete({
		where: {
			email: user?.email.toLowerCase() as string, // Ensure email is lowercase
		},
	});
}

/**
 * Searches for a user by their email address.
 * @param {string} email - The email address to search for.
 * @returns {Promise<Object>} The user object if found, otherwise null.
 */
export async function searchUser(email: string) {
	// Find a unique user by email, ensuring the email is lowercase
	return await prisma.user.findUnique({
		where: {
			email: email.toLowerCase(),
		},
	});
}