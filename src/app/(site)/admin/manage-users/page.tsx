import UsersListContainer from "@/components/Admin/Users";
import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import { Metadata } from "next";

/**
 * Metadata for the Users page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Users - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Manage and view user accounts on the platform.`, // Updated description for clarity
};

/**
 * The Users page component.
 * This page allows administrators to manage and filter user accounts.
 * @param {Object} props - The component props.
 * @param {Promise<{ filter: string; search: string }>} props.searchParams - The search parameters for filtering and searching users.
 * @returns {JSX.Element} The rendered Users page.
 */
export default async function UsersPage(props: {
	searchParams: Promise<{ filter: string; search: string }>;
}) {
	// Await the search parameters from the URL
	const searchParams = await props.searchParams;
	const { filter, search } = searchParams;

	// Validate the filter to ensure it's either "USER" or "ADMIN"
	const validFilter =
		filter === "USER" || filter === "ADMIN" ? filter : undefined;

	return (
		<>
			{/* Breadcrumb navigation */}
			<Breadcrumb pageTitle='Manage Users' />

			{/* Users list container with filtering and search capabilities */}
			<UsersListContainer filter={validFilter} search={search} />
		</>
	);
}