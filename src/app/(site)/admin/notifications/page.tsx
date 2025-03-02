import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import React from "react";
import { Metadata } from "next";
import Notification from "@/components/Common/Notification";

/**
 * Metadata for the Notifications page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Notifications - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `View and manage your notifications.`, // Updated description for clarity
};

/**
 * The Notifications page component.
 * This page displays a list of notifications for the user.
 * @returns {JSX.Element} The rendered Notifications page.
 */
const NotificationPage = () => {
	// Mock data representing notifications (e.g., IDs or notification objects)
	const notifications = [1, 2, 3, 4, 5, 6, 7];

	return (
		<>
			{/* Breadcrumb navigation */}
			<Breadcrumb pageTitle='Notifications' />

			{/* List of notifications */}
			{notifications?.map((notification) => (
				<Notification key={notification} /> // Render a Notification component for each item
			))}
		</>
	);
};

export default NotificationPage;