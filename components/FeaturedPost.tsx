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
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:border-slate-800 dark:bg-gray-900 bg-white/50"
            >
              <img
                src={post.coverImage.url}
                alt={`featured post image: ${post.title}`}
                className="bg-gray-200 object-cover w-full h-64 sm:h-96 lg:col-span-7 lg:rounded-r-3xl"
              />
              <div className="p-4 space-y-2 lg:col-span-5 ">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 dark:text-slate-400 tracking-widest">
                    #{post.category}
                  </p>
                  <div className="align-middle text-gray-700 dark:text-gray-300 text-sm underline underline-offset-2">
                    {moment(post.createdAt).format("MMM DD, YYYY")}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold sm:text-4xl dark:text-gray-200 border-2 border-black pl-2 text-gray-700 bg-white dark:bg-gray-900 dark:border-none relative">
                  {post.title}
                  <span className="bg-slate-600 w-full h-full absolute left-2 -bottom-2 -z-10" />
                </h2>
                <p className="text-black bg-white dark:bg-slate-900 dark:text-gray-300 bg-white/50 pt-3">
                  {post.excerpt}
                </p>
              </div>
            </a>
          </Link>
        ))
        .slice(0)
        .reverse()}
    </div>
  );
}
