import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import CreateToken from "@/components/User/Api/CreateToken";
import TokenList from "@/components/User/Api/TokenList";
import { Metadata } from "next";
import { getApiKeys } from "@/actions/api-key";

/**
 * Metadata for the API page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `API - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Manage your API tokens and integrations.`, // Updated description for clarity
};

/**
 * The API page component.
 * This page allows users to create and manage their API tokens.
 * @returns {JSX.Element} The rendered API page.
 */
export default async function AdminApiPage() {
	// Fetch the list of API tokens for the current user
	const tokens = await getApiKeys();

	return (
		<>
			{/* Breadcrumb navigation */}
			<Breadcrumb pageTitle='API' />

			{/* Main content area with CreateToken and TokenList components */}
			<div className='flex flex-col gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-4'>
				{/* Component to create a new API token */}
				<CreateToken />

				{/* Component to display the list of API tokens */}
				<TokenList tokens={tokens} />
			</div>
		</>
	);
}