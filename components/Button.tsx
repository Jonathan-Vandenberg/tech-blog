import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function App({
  content,
  handleAddMorePosts,
  disable,
}: {
  content: string;
  handleAddMorePosts: () => void;
  disable: boolean;
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(content);
  }, []);

  const controls = useAnimationControls();

  function clickAnimation() {
    controls.start({ x: 115 });
  }

  if (disable) {
    setTimeout(() => {
      setText("No more posts...");
    }, 1900);
  }

  return (
    <div className="flex justify-center pb-12">
      <button
        type="button"
        className={`px-6 py-3 relative text-sm border-2 font-semibold ${
          disable
            ? "text-gray-300 border-gray-300 dark:text-gray-700 dark:border-gray-700"
            : "text-gray-700 dark:text-gray-300 border-gray-600 dark:border-gray-400"
        }`}
        onClick={() => {
          clickAnimation();
          handleAddMorePosts();
        }}
        disabled={disable}
      >
        <motion.span
          animate={controls}
          initial={{ x: 0 }}
          transition={{
            repeat: 1,
            repeatType: "reverse",
            duration: 1,
          }}
          className="dark:bg-slate-900 absolute -top-1 left-4 z-10 bg-white w-2 h-2"
        />
        <motion.span
          animate={controls}
          initial={{ x: 0 }}
          transition={{
            repeat: 1,
            repeatType: "reverse",
            duration: 1,
          }}
          className="absolute -top-1 left-8 z-10 bg-white dark:bg-slate-900 w-2 h-2"
        />
        {text}
      </button>
    </div>
  );
}
