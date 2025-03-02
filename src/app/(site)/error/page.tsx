import NotFound from "@/components/404";
import React from "react";
import { Metadata } from "next";

// Define static metadata for the error page
export const metadata: Metadata = {
  title: `Error - ${process.env.SITE_NAME ?? "Default Site"}`, // Fallback for undefined SITE_NAME
  description: `This is the Error page for ${process.env.SITE_NAME ?? "our site"}`,
};

/**
 * ErrorPage component renders a 404 Not Found page.
 * @returns JSX element displaying the NotFound component
 */
const ErrorPage = () => {
  return (
    <main className="min-h-screen">
      {/* Render the NotFound component */}
      <NotFound />
    </main>
  );
};

export default ErrorPage;