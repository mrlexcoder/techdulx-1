import React from "react";
import PurchaseHistory from "@/components/User/PurchaseHistory";
import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import { Metadata } from "next";

// Define static metadata for the purchase history (invoice) page
export const metadata: Metadata = {
  title: `Invoice - ${process.env.SITE_NAME ?? "Default Site"}`, // Fallback for undefined SITE_NAME
  description: `This is the Invoice page for ${process.env.SITE_NAME ?? "our site"}`,
  // Additional metadata properties can be added here as needed
};

/**
 * PurchaseHistoryPage component renders the purchase history section of the user dashboard.
 * @returns JSX element displaying the breadcrumb and purchase history content
 */
const PurchaseHistoryPage = () => {
  return (
    <main className="min-h-screen p-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb pageTitle="Invoice" />

      {/* Purchase History Component */}
      <PurchaseHistory />
    </main>
  );
};

export default PurchaseHistoryPage;