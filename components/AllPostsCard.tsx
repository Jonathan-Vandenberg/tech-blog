import moment from "moment";
import Link from "next/link";

export default function App({ post }: any) {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-slate-700 shadow-md group hover:no-underline focus:no-underline rounded-md">
      {post?.coverImage?.url && (
        <Link href={`/post/${post.slug}`} legacyBehavior>
          <a area-label="post cover image">
            <img
              role="presentation"
              className="object-cover w-full rounded-md h-44 bg-gray-200"
              src={post.coverImage.url}
              alt={`Cover-image: ${post.title}`}
            />
          </a>
        </Link>
      )}
      <div className="p-6 space-y-2">
        <p className="dark:text-slate-400 tracking-widest">#{post.category}</p>
        <Link href={`/post/${post.slug}`} legacyBehavior>
          <a>
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black dark:text-gray-200 ">
              {post.title}
            </h3>
          </a>
        </Link>
        <span className="align-middle text-gray-500 dark:text-gray-300 border-b-2 border-gray-300">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </span>
        <p className="text-black dark:text-gray-300">{post.excerpt}</p>
      </div>
    </div>
  );
}
