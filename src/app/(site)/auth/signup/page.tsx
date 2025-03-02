import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

/**
 * Metadata for the Sign-up page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Sign up - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Create a new account on ${process.env.SITE_NAME}.`, // Updated description for clarity
};

/**
 * The Sign-up page component.
 * This page allows users to create a new account on the platform.
 * @returns {JSX.Element} The rendered Sign-up page.
 */
const SignupPage = () => {
	return (
		<main className='pt-[150px]'>
			{/* Sign-up component */}
			<Signup />
		</main>
	);
};

export default SignupPage;