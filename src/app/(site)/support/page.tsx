import React from "react";
import Support from "@/components/Support";
import { Metadata } from "next";

// Define static metadata for the support page
export const metadata: Metadata = {
  title: `Support - ${process.env.SITE_NAME ?? "Default Site"}`, // Fallback for undefined SITE_NAME
  description: `This is the Support page for ${process.env.SITE_NAME ?? "our site"}`,
  // Additional metadata properties can be added here as needed
};

/**
 * SupportPage component renders the support section of the site.
 * @returns JSX element displaying the Support component
 */
const SupportPage = () => {
  return (
    <main className="min-h-screen">
      {/* Render the Support component */}
      <Support />
    </main>
  );
};

export default SupportPage;