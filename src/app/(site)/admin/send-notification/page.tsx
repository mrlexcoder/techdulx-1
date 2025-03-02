import SendNotificationCard from "@/components/Admin/SendNotification/SendNotificationCard";
import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import { Metadata } from "next";

/**
 * Metadata for the Send Notification page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Send Notification - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Send notifications to users or groups on the platform.`, // Updated description for clarity
};

/**
 * The Send Notification page component.
 * This page allows administrators to create and send notifications to users.
 * @returns {JSX.Element} The rendered Send Notification page.
 */
export default function SendNotificationPage() {
	return (
		<>
			{/* Breadcrumb navigation */}
			<Breadcrumb pageTitle='Send Notification' />

			{/* Notification creation and sending component */}
			<SendNotificationCard />
		</>
	);
}