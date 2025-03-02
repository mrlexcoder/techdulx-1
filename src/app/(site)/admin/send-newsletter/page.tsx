import SendNewsletterCard from "@/components/Admin/SendNewsletter/SendNewsletterCard";
import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import { Metadata } from "next";

/**
 * Metadata for the Send Newsletter page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Send Newsletter - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Create and send newsletters to your subscribers.`, // Updated description for clarity
};

/**
 * The Send Newsletter page component.
 * This page allows administrators to create and send newsletters.
 * @returns {JSX.Element} The rendered Send Newsletter page.
 */
export default function SendNewsletterPage() {
	return (
		<>
			{/* Breadcrumb navigation */}
			<Breadcrumb pageTitle='Send Newsletter' />

			{/* Newsletter creation and sending component */}
			<SendNewsletterCard />
		</>
	);
}