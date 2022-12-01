import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function App({ content, post }: any) {
  return (
    <article className="max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
      <div className="w-full mx-auto text-center border-y-4 border-gray-200 dark:border-slate-700 py-4">
        {post?.category && (
          <p className="text-xs font-semibold tracking-wider uppercase dark:text-gray-300">
            #{post.category}
          </p>
        )}
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight md:text-5xl">
          {post.title}
        </h1>
        <div className="text-sm text-gray-600 mt-2 flex items-center justify-center dark:text-gray-300">
          <a
            rel="noopener noreferrer"
            href="mailto:jonvdberg8@gmail.com"
            target="_blank"
            className="underline text-black px-2"
          ></a>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <div className="text-gray-500">{content}</div>
      {/* <div className="py-8 border-y dark:border-gray-700">
        <Link legacyBehavior href="mailto:jonvdberg8@gmail.com">
          <div className="text-gray-500 border-2 hover:border-gray-800 hover:text-gray-800 border-gray-400 px-4 py-2 flex items-center justify-center space-x-2 w-32 mx-auto">
            <p>Contact</p>
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
            >
              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
            </svg>
          </div>
        </Link>
      </div> */}
    </article>
  );
}
