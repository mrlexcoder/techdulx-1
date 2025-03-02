import DataStatsCard from "@/components/Admin/Dashboard/DataStatsCard";
import GraphCard from "@/components/Admin/Dashboard/GraphCard";
import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import { dataStats, overviewData } from "@/staticData/statsData";
import { Metadata } from "next";

/**
 * Metadata for the Admin Dashboard page.
 * This is used to set the page title and description for SEO purposes.
 */
export const metadata: Metadata = {
	title: `Dashboard - ${process.env.SITE_NAME}`, // Dynamic title with site name
	description: `Monitor and analyze your organization's performance and activity.`, // Updated description for clarity
};

/**
 * The Admin Dashboard page component.
 * This page displays key statistics and overview graphs for the organization.
 * @returns {JSX.Element} The rendered Admin Dashboard page.
 */
export default function AdminDashboard() {
	return (
		<>
			{/* Breadcrumb navigation */}
			<Breadcrumb pageTitle='Dashboard' />

			{/* Data statistics cards grid */}
			<div className='mb-11 grid grid-cols-1 gap-7.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4'>
				{dataStats.map((data) => (
					<DataStatsCard key={data?.id} data={data} /> // Render a DataStatsCard for each statistic
				))}
			</div>

			{/* Overview section */}
			<div>
				{/* Overview header and description */}
				<div className='mb-7.5'>
					<h3 className='mb-2 font-satoshi text-heading-5 font-bold tracking-[-.5px] text-dark dark:text-white'>
						Overview
					</h3>
					<p className='font-satoshi font-medium tracking-[-.2px] text-body dark:text-gray-4'>
						An overview of your organization’s activity and performance across
						all your projects.
					</p>
				</div>

				{/* Overview graphs grid */}
				<div className='grid gap-7.5 md:grid-cols-2 xl:grid-cols-3'>
					{overviewData.map((data) => (
						<GraphCard key={data?.id} data={data} /> // Render a GraphCard for each overview graph
					))}
				</div>
			</div>
		</>
	);
}