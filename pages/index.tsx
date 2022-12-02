import Head from "next/head";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import { getPosts } from "../services";
import Button from "../components/Button";
import Card from "../components/AllPostsCard";
import FeaturedPosts from "../components/FeaturedPost";
import { useState } from "react";

export default function Index({ posts }: any) {
  const [addPosts, setAddPosts] = useState(6);
  const [disableButton, setDisableButton] = useState(false);
  const addMorePosts = () => {
    if (posts.length > addPosts) {
      setAddPosts(addPosts + 6);
    } else setDisableButton(true);
  };

  return (
    <>
      <Head>
        <title>Information on the leading web2 and web3 frameworks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Information including self development, health, technology, travel, news and trends."
        ></meta>
        <meta
          property="og:title"
          content="Information on the leading web2 and web3 frameworks"
        />
        <meta
          property="og:description"
          content="Information for alternative options to a wide variety of topics including self development, health, technology, travel, news and trends."
        />
        <meta
          property="og:image"
          content="https://blog-beta-orcin.vercel.app/alt.png"
        />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="900" />
      </Head>

      <div className="container mx-auto pb-20 pt-36">
        <Hero />
      </div>
      <div className="hidden md:block container mx-auto">
        <Categories />
      </div>
      <div>
        <p className="container max-w-6xl font-semibold mx-auto text-2xl pt-12 pb-2 px-6 text-gray-400 dark:text-slate-400">
          Featured Post
        </p>
        <div className="container max-w-6xl px-6 mx-auto space-y-6 sm:space-y-12">
          <FeaturedPosts />
          <div className="">
            <p className="text-2xl text-gray-400 font-semibold mb-2">
              All Posts
            </p>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts
                .map((post: { node: any }, index: any) => (
                  <Card key={index} post={post.node} blogCard={true} />
                ))
                .slice(0, addPosts)}
            </div>
          </div>
          <Button
            content="Load more posts..."
            handleAddMorePosts={addMorePosts}
            disable={disableButton}
          />
        </div>
      </div>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
