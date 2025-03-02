"use server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { isAuthorized } from "@/libs/isAuthorized";

// Initialize the S3 client with Cloudflare R2 credentials
const s3Client = new S3Client({
	region: "auto", // Cloudflare R2 uses "auto" for the region
	endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`, // R2 endpoint
	credentials: {
		accessKeyId: process.env.R2_ACCESS_KEY_ID!, // Access key from environment variables
		secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!, // Secret key from environment variables
	},
});

// Define accepted file types and maximum file size (2MB)
const acceptedTypes = ["image/png", "image/jpeg", "image/jpg"];
const maxSize = 2_000_000; // 2MB in bytes

/**
 * Generates a pre-signed URL for uploading a profile image to S3 (Cloudflare R2).
 * @param {string} type - The MIME type of the file.
 * @param {number} size - The size of the file in bytes.
 * @returns {Promise<{ success: { url: string, key: string } } | { failure: string }>}
 * Returns a signed URL and file key on success, or an error message on failure.
 */
export async function getSignedURL(type: string, size: number) {
	// Check if the user is authenticated
	const user = await isAuthorized();

	if (!user) {
		return { failure: "Not authenticated" }; // User is not authorized
	}

	// Validate file type
	if (!acceptedTypes.includes(type)) {
		return { failure: "Invalid file type" }; // File type is not allowed
	}

	// Validate file size
	if (size > maxSize) {
		return { failure: "File too large" }; // File exceeds the maximum allowed size
	}

	// Generate a unique key for the file (e.g., "profile-image--USER_ID")
	const key = `profile-image--${user.id}`;

	// Create a PutObjectCommand to define the S3 upload parameters
	const putObjectCommand = new PutObjectCommand({
		Bucket: process.env.R2_BUCKET_NAME!, // Bucket name from environment variables
		Key: key, // Unique key for the file
		ContentType: type, // MIME type of the file
		ContentLength: size, // Size of the file in bytes
		Metadata: {
			userId: user.id, // Add user ID as metadata for reference
		},
	});

	// Generate a pre-signed URL for the upload
	const url = await getSignedUrl(
		s3Client,
		putObjectCommand,
		{ expiresIn: 60 } // URL expires in 60 seconds
	);

	// Return the signed URL and file key on success
	return { success: { url, key } };
}