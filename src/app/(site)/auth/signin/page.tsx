import React from "react";
import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

/**
 * Metadata for the Sign-in page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Sign in - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Sign in to your account on ${process.env.SITE_NAME}.`, // Updated description for clarity
};

/**
 * The Sign-in page component.
 * This page allows users to log in to their accounts.
 * @returns {JSX.Element} The rendered Sign-in page.
 */
const SigninPage = () => {
	return (
		<main className='pt-[150px]'>
			{/* Sign-in component */}
			<Signin />
		</main>
	);
};

export default SigninPage;