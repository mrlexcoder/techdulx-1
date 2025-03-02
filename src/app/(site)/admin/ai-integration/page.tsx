import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import { Metadata } from "next";
import AiIntegration from "@/components/Admin/AiIntegration";

/**
 * Metadata for the AI Integration page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `AI Integration - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Manage and integrate AI services into your application.`, // Updated description for clarity
};

/**
 * The AI Integration page component.
 * This page allows administrators to manage AI integrations.
 * @returns {JSX.Element} The rendered AI Integration page.
 */
export default function AiIntegrationPage() {
	// Retrieve the OpenAI API key from environment variables
	const apiKey = process.env.OPENAI_API_KEY as string;

	return (
		<>
			{/* Breadcrumb navigation */}
			<Breadcrumb pageTitle='AI Integration' />

			{/* AI Integration component with the API key passed as a prop */}
			<AiIntegration APIKey={apiKey} />
		</>
	);
}