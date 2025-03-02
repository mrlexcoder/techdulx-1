import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import CreateToken from "@/components/User/Api/CreateToken";
import TokenList from "@/components/User/Api/TokenList";
import { Metadata } from "next";
import { getApiKeys } from "@/actions/api-key";

// Define static metadata for the API page
export const metadata: Metadata = {
  title: `API - ${process.env.SITE_NAME ?? "Default Site"}`, // Fallback for undefined SITE_NAME
  description: `API Key page for ${process.env.SITE_NAME ?? "our site"}`,
  // Additional metadata properties can be added here as needed
};

/**
 * UserApiPage component renders the API key management interface.
 * @returns JSX element displaying the breadcrumb, token creation, and token list
 */
export default async function UserApiPage() {
  // Fetch API keys from the server
  const tokens = await getApiKeys();

  return (
    <main className="min-h-screen p-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb pageTitle="API" />

      {/* API Key Management Section */}
      <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0">
        {/* Token Creation Component */}
        <CreateToken />

        {/* Token List Component */}
        <TokenList tokens={tokens} />
      </div>
    </main>
  );
}