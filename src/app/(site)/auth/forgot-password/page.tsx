import React from "react";
import ForgotPassword from "@/components/Auth/ForgotPassword";
import { Metadata } from "next";

/**
 * Metadata for the Forgot Password page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Forgot Password - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Reset your password for ${process.env.SITE_NAME}.`, // Updated description for clarity
};

/**
 * The Forgot Password page component.
 * This page allows users to reset their password if they've forgotten it.
 * @returns {JSX.Element} The rendered Forgot Password page.
 */
const ForgotPasswordPage = () => {
	return (
		<main className='pt-[150px]'>
			{/* Forgot Password component */}
			<ForgotPassword />
		</main>
	);
};

export default ForgotPasswordPage;