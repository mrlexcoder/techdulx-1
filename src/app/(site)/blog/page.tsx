import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/components/Blog/BlogItem";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Image from "next/image";
import { Metadata } from "next";
import { integrations, messages } from "../../../../integrations.config";

// Define static metadata for the blog grid page
export const metadata: Metadata = {
  title: `Blog - ${process.env.SITE_NAME ?? "Default Site"}`, // Fallback for undefined SITE_NAME
  description: `This is the Blog page for ${process.env.SITE_NAME ?? "our site"}`,
};

/**
 * BlogGrid component displays a grid of blog posts fetched from Sanity.
 * @returns JSX element rendering the blog grid
 */
const BlogGrid = async () => {
  // Fetch posts from Sanity if integration is enabled, otherwise return an empty array
  const posts = integrations?.isSanityEnabled ? await getPosts() : [];

  return (
    <main className="min-h-screen">
      {/* Blog Grid Section */}
      <section className="relative z-1 overflow-hidden pb-17.5 pt-35 lg:pb-22.5 xl:pb-27.5">
        {/* Background Shapes */}
        <div className="pointer-events-none">
          <div className="absolute left-0 top-0 -z-1">
            <Image
              src="/images/blog/blog-shape-01.svg"
              alt="Decorative shape"
              width={340}
              height={680}
              priority // Preload for better LCP
            />
          </div>
          <div className="absolute right-0 top-0 -z-1">
            <Image
              src="/images/blog/blog-shape-02.svg"
              alt="Decorative shape"
              width={425}
              height={682}
              priority
            />
          </div>
        </div>

        {/* Breadcrumbs Component */}
        <Breadcrumbs title="Blog" pages={["Home", "Blog Grids"]} />

        {/* Blog Grid Container */}
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div
            className={`${
              integrations?.isSanityEnabled
                ? "grid grid-cols-1 gap-x-7.5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
                : "flex justify-center"
            }`}
          >
            {/* Render Blog Items or Fallback Message */}
            {posts?.length > 0 ? (
              posts.map((item, index) => <BlogItem key={index} blog={item} />)
            ) : integrations?.isSanityEnabled ? (
              <p className="col-span-full text-center text-gray-500">
                No posts found at this time.
              </p>
            ) : (
              <div className="text-center text-gray-500">
                {messages.sanity || "Sanity integration is disabled."}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogGrid;