"use client";
import { useState } from "react";
import Sidebar from "@/components/Common/Dashboard/Sidebar";
import Header from "@/components/Common/Dashboard/Header";
import {
	adminSidebarData,
	adminSidebarOtherData,
} from "@/staticData/sidebarData";

/**
 * AdminLayout Component
 * This layout component provides a consistent structure for admin pages, including a sidebar, header, and main content area.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered AdminLayout component.
 */
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	// State to manage the visibility of the sidebar on mobile devices
	const [openSidebar, setOpenSidebar] = useState(false);

	return (
		<>
			<main className='min-h-screen bg-gray-2 dark:bg-[#151F34]'>
				{/* Sidebar */}
				<aside
					className={`fixed left-0 top-0 z-[999] h-screen w-[290px] overflow-y-auto bg-white duration-300 dark:bg-gray-dark ${
						openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
					}`}
				>
					<Sidebar
						sidebarData={adminSidebarData}
						sidebarOthersData={adminSidebarOtherData}
					/>
				</aside>

				{/* Overlay for mobile sidebar */}
				<div
					onClick={() => setOpenSidebar(false)} // Close sidebar when overlay is clicked
					className={`fixed inset-0 z-[99] h-screen w-full bg-dark/80 lg:hidden ${
						openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
					}`}
				></div>

				{/* Main content area */}
				<section className='lg:ml-[290px]'>
					{/* Header with toggle button for mobile sidebar */}
					<Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

					{/* Page content */}
					<div className='p-5 pt-12 md:p-10'>{children}</div>
				</section>
			</main>
		</>
	);
};

export default AdminLayout;