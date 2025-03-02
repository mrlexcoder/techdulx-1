import React from "react";
import ResetPassword from "@/components/Auth/ResetPassword";
import { Metadata } from "next";

/**
 * Metadata for the Reset Password page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Reset Password - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Reset your password for ${process.env.SITE_NAME}.`, // Updated description for clarity
};

/**
 * The Reset Password page component.
 * This page allows users to reset their password using a valid token.
 * @param {Object} props - The component props.
 * @param {Promise<{ token: string }>} props.params - The URL parameters containing the reset token.
 * @returns {JSX.Element} The rendered Reset Password page or an error message if the token is invalid.
 */
const ResetPasswordPage = async (props: { params: Promise<{ token: string }> }) => {
	// Await the token from the URL parameters
	const params = await props.params;

	// Check if the token is valid
	if (!params.token) {
		return <div>Invalid token</div>; // Display an error message if the token is missing
	}

	// Extract the token from the parameters
	const token = params.token;

	return (
		<main>
			{/* Reset Password component with the token passed as a prop */}
			<ResetPassword token={token} />
		</main>
	);
};

export default ResetPasswordPage;