import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFeaturedPosts } from "../services";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div className="space-y-6">
      {data
        .map((post: any, index) => (
          <Link legacyBehavior key={index} href={`/post/${post.slug}`}>
            <a
              area-label={post.title}
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 border-4 border-gray-200 rounded-r-3xl"
            >
              <img
                src={post.coverImage.url}
                alt={`featured post image: ${post.title}`}
                className="bg-gray-200 object-cover w-full h-64 sm:h-96 lg:col-span-7 rounded-r-3xl"
              />
              <div className="p-6 space-y-2 lg:col-span-5 rounded-r-3xl">
                <p className="text-gray-500 ">#{post.category}</p>
                <h2 className="text-2xl font-semibold sm:text-4xl text-gray-700 group-hover:underline group-focus:underline">
                  {post.title}
                </h2>
                <span className="align-middle text-gray-700">
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </span>
                <p className="text-black bg-white">{post.excerpt}</p>
              </div>
            </a>
          </Link>
        ))
        .slice(0)
        .reverse()}
    </div>
  );
}
