import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import React from "react";
import { Metadata } from "next";
import Notification from "@/components/Common/Notification";

// Define static metadata for the notifications page
export const metadata: Metadata = {
  title: `Notifications - ${process.env.SITE_NAME ?? "Default Site"}`, // Fallback for undefined SITE_NAME
  description: `Notifications Description for ${process.env.SITE_NAME ?? "our site"}`, // Enhanced description with site context
};

/**
 * NotificationPage component renders a list of notifications with a breadcrumb.
 * @returns JSX element displaying the breadcrumb and notification list
 */
const NotificationPage = () => {
  // Sample data array for rendering multiple notifications (could be replaced with real data)
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <main className="min-h-screen p-6 md:px-20">
      {/* Breadcrumb Navigation */}
      <Breadcrumb pageTitle="Notifications" />

      {/* Notification List */}
      <div className="mt-6 space-y-4">
        {data?.map((item) => (
          <Notification key={item} />
        ))}
      </div>
    </main>
  );
};

export default NotificationPage;