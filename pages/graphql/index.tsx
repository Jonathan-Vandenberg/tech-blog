import Head from "next/head";
import Button from "../../components/Button";
import Card from "../../components/AllPostsCard";
import FeaturedPostsByCategory from "../../components/FeaturedPostsByCategory";
import HeaderCategories from "../../components/HeaderCategories";
import { getGraphqlPosts } from "../../services";
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
        <title>Graphql</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Information for alternative options to a wide variety of topics including self development, health, GRAPHQL, travel, news and trends."
        ></meta>
        <meta property="og:title" content="GRAPHQL" />
        <meta
          property="og:description"
          content="Information for alternative options to a wide variety of topics including self development, health, GRAPHQL, travel, news and trends."
        />
        <meta
          property="og:image"
          content="https://blog-beta-orcin.vercel.app/alt.png"
        />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="900" />
      </Head>
      <HeaderCategories
        categoryName={"GRAPHQL"}
        categoryDescription={"Finding alternatives for different technologies"}
      />
      <section>
        <div className="container max-w-6xl font-semi-bold text-gray-600 mx-auto text-2xl pt-12 pb-2 px-6">
          Featured Posts
        </div>
        <div className="container max-w-6xl px-6 mx-auto space-y-6 sm:space-y-12">
          <FeaturedPostsByCategory category="GRAPHQL" />
          <div className="">
            <div className="font-semi-bold text-gray-600 text-2xl mb-2">
              All Posts
            </div>
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
      </section>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getGraphqlPosts()) || [];
  return {
    props: { posts },
  };
}
