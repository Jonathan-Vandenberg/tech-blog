import { RichText } from "@graphcms/rich-text-react-renderer";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Post from "../../components/Post";
import BreadCrumbs from "../../components/BreadCrumbs.tsx";
import RelatedPosts from "../../components/RelatedPosts.tsx";
import Link from "next/link";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }) => {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    Prism.highlightAll();
  }, [copied]);

  if (router.isFallback) {
    return <div>loading...</div>;
  }

  return (
    <div className="pt-24">
      {/* <Head>
        {post?.seo?.title && <title>{post.seo.title}</title>}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {post?.seo?.description && (
          <meta name="description" content={post.seo.description}></meta>
        )}

        {post?.seo?.title && (
          <meta property="og:title" content={post.seo.title} />
        )}
        {post?.seo?.description && (
          <meta property="og:description" content={post.seo.description} />
        )}
        {post?.seo?.image?.seoImage?.image?.url && (
          <meta
            property="og:image"
            content={post.seo.image.seoImage.image.url}
          />
        )}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head> */}
      <div className="mx-auto lg:max-w-[730px] px-2 md:px-6 bg-white dark:bg-slate-800 border-4 border-gray-200 dark:border-gray-700">
        <div className="py-3">
          <BreadCrumbs postCategory={post.category} title={post.title} />
        </div>
        <Post
          post={post}
          content={
            <div className="text-black dark:text-gray-200">
              <RichText
                className="text-black"
                content={post.content.raw.children}
                renderers={{
                  h1: ({ children }) => (
                    <h1 className="text-gray-700 text-3xl font-semibold py-4 dark:text-gray-200">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="pt-4 text-gray-700 font-semibold text-2xl dark:text-gray-200">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="py-4 text-gray-700 font-semibold text-xl dark:text-gray-200">
                      {children}
                    </h3>
                  ),
                  bold: ({ children }) => (
                    <strong className="text-xl dark:text-gray-200">
                      {children}
                    </strong>
                  ),
                  ol: ({ children }) => (
                    <ol className="py-4 space-y-3 ml-12 text-gray-800 list-decimal text-xl dark:text-gray-200">
                      {children}
                    </ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="py-1 md:py-2 lg:py-4 text-gray-700 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] space-y-3 md:space-y-4 lg:space-y-5 ml-12 list-disc dark:text-gray-200">
                      {children}
                    </ul>
                  ),
                  p: ({ children, className }) => (
                    <p className="py-3  md:py-4 lg:py-5 text-gray-700 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] dark:text-gray-300">
                      {children}
                    </p>
                  ),
                  a: ({ children, href, title }) => (
                    <Link legacyBehavior href={href}>
                      <a
                        aria-label={title}
                        className="py-4 text-blue-600 text-xl cursor-pointer dark:text-blue-300"
                      >
                        {children}
                      </a>
                    </Link>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="my-6 py-2 text-gray-800 text-xl border-l-[6px] pl-3 border-gray-300 dark:text-gray-300">
                      <p>{children}</p>
                    </blockquote>
                  ),
                  img: ({ src, title, height, width }) => {
                    <div className="block h-auto mx-auto my-3">
                      <Image
                        src={src}
                        alt={title}
                        height={height}
                        width={width}
                        objectFit="responsive"
                      />
                    </div>;
                  },
                  code: ({ children }) => (
                    <code className="text-red-500 dark:text-red-400 md:text-[1.1rem] text-[1rem]">
                      {children}
                    </code>
                  ),
                  code_block: ({ children }) => (
                    <pre className="line-numbers language-javascript code">
                      <code>{children}</code>
                    </pre>
                  ),
                }}
              />
            </div>
          }
        />
      </div>
      <RelatedPosts slug={post.slug} category={post.category} />
    </div>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return { props: { post: data } };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
