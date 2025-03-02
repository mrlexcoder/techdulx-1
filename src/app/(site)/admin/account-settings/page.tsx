import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import EditProfile from "@/components/User/AccountSettings/EditProfile";
import PasswordChange from "@/components/User/AccountSettings/PasswordChange";
import { Metadata } from "next";

/**
 * Metadata for the Account Settings page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Account Settings - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Manage your account settings, including profile information and password changes.`, // Updated description for clarity
};

/**
 * The Account Settings page component.
 * This page allows users to edit their profile and change their password.
 * @returns {JSX.Element} The rendered Account Settings page.
 */
export default function AccountSettingsPage() {
	return (
		<>
			{/* Breadcrumb navigation */}
			<Breadcrumb pageTitle='Account Settings' />

			{/* Main content area */}
			<div className='flex flex-wrap gap-11 lg:flex-nowrap'>
				{/* Edit Profile section */}
				<EditProfile />

				{/* Password Change section */}
				<PasswordChange />
			</div>
		</>
	);
}