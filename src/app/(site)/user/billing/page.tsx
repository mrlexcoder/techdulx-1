import React from "react";
import Billing from "@/components/User/Billing";
import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import { Metadata } from "next";

// Define static metadata for the billing page
export const metadata: Metadata = {
  title: `Billing - ${process.env.SITE_NAME ?? "Default Site"}`, // Fallback for undefined SITE_NAME
  description: `This is the Billing page for ${process.env.SITE_NAME ?? "our site"}`,
  // Additional metadata properties can be added here as needed
};

/**
 * BillingPage component renders the billing section of the user dashboard.
 * @returns JSX element displaying the breadcrumb and billing content
 */
const BillingPage = () => {
  return (
    <main className="min-h-screen p-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb pageTitle="Billing" />

      {/* Billing Component */}
      <Billing />
    </main>
  );
};

export default BillingPage;