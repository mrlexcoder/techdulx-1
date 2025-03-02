import { getPostsByAuthor, getAuthorBySlug } from "@/sanity/sanity-utils";
import BlogItem from "@/components/Blog/BlogItem";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { Author } from "@/types/blog";
import Image from "next/image";
import { imageBuilder } from "@/sanity/sanity-utils";

// Define props type for the component and metadata generation
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * Generates metadata for the author page dynamically based on the slug.
 * @param props - Component props containing the slug
 * @returns Metadata object for SEO and social sharing
 */
export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const author = (await getAuthorBySlug(slug)) as Author;
  const siteURL = process.env.SITE_URL ?? ""; // Fallback to empty string if undefined
  const authorName = process.env.AUTHOR_NAME ?? "Default Author"; // Fallback for safety

  if (author) {
    return {
      title: `${author.name || "Author Page"} | ${authorName} - Next.js SaaS Starter Kit`,
      description: author.bio || "No bio available", // Fallback for bio
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
      openGraph: {
        title: `${author.name} | ${authorName}`,
        description: author.bio || "Learn more about this author",
        url: `${siteURL}/blog/author/${slug}`,
        siteName: authorName,
        images: [
          {
            url: imageBuilder(author.image).url(),
            width: 343,
            height: 343,
            alt: author.name || "Author Image",
          },
        ],
        locale: "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${author.name} | ${authorName}`,
        description: `${(author.bio || "").slice(0, 136)}...`,
        creator: `@${authorName}`,
        site: `@${authorName}`,
        images: [imageBuilder(author.image).url()],
        url: `${siteURL}/blog/author/${slug}`,
      },
    };
  }

  // Fallback metadata for when no author is found
  return {
    title: "Author Not Found",
    description: "No author has been found for this page.",
  };
}

/**
 * BlogGrid component displays a grid of blog posts by a specific author.
 * @param props - Component props containing the slug
 * @returns JSX element rendering the blog grid
 */
const BlogGrid = async (props: Props) => {
  const params = await props.params;
  const { slug } = params;

  // Fetch posts and author data concurrently for better performance
  const [posts, author] = await Promise.all([
    getPostsByAuthor(slug),
    getAuthorBySlug(slug),
  ]);

  // Type assertion for author to ensure TypeScript compatibility
  const typedAuthor = author as Author;

  return (
    <main className="min-h-screen">
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
        <Breadcrumbs
          title={typedAuthor?.name ?? "Unknown Author"} // Fallback for undefined name
          pages={["Home", typedAuthor?.name ?? "Author"]}
        />

        {/* Blog Grid Container */}
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-x-7.5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts?.length > 0 ? (
              posts.map((item, index) => (
                <BlogItem key={index} blog={item} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No posts available at this time.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogGrid;