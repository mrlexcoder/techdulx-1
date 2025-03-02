"use client"; // Indicates this is a Client Component in Next.js

import { useState } from "react";
import Sidebar from "@/components/Common/Dashboard/Sidebar";
import Header from "@/components/Common/Dashboard/Header";
import { userSidebarData } from "@/staticData/sidebarData";

/**
 * AdminLayout component provides a responsive dashboard layout with a sidebar and header.
 * @param {React.ReactNode} children - The content to be rendered within the layout
 * @returns JSX element representing the dashboard layout
 */
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  // State to control the visibility of the sidebar on mobile
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <main className="min-h-screen bg-gray-2 dark:bg-[#151F34] flex">
      {/* Sidebar Section */}
      <aside
        className={`fixed left-0 top-0 z-[999] h-screen w-[290px] overflow-y-auto bg-white shadow-lg duration-300 ease-in-out dark:bg-gray-dark ${
          openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Render the Sidebar with static user data */}
        <Sidebar sidebarData={userSidebarData} />
      </aside>

      {/* Overlay for Mobile Sidebar */}
      <div
        onClick={() => setOpenSidebar(false)}
        className={`fixed inset-0 z-[99] h-screen w-full bg-dark/80 transition-opacity duration-300 lg:hidden ${
          openSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Main Content Section */}
      <section className="flex-1 lg:ml-[290px]">
        {/* Header with Sidebar Toggle */}
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        {/* Content Area */}
        <div className="p-5 pt-12 md:p-10">{children}</div>
      </section>
    </main>
  );
};

export default AdminLayout;