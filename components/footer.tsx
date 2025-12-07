import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-28 lg:flex-row bg-[#f6f6f8] px-8 ">
      <p className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
        Built with Sanity + Next.js.
      </p>
      <div className="flex flex-col gap-3 items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
        <Link
          className="rounded-full flex gap-2 items-center bg-black hover:bg-red-500 focus:bg-cyan-500 p-1 sm:py-3  sm:px-6 text-white transition-colors duration-200 "
          href={"https://github.com/sanity-io/sanity-template-nextjs-clean"}
        >
          View on GitHub
        </Link>
        <Link href={"https://nextjs.org/docs"} className="mx-3 hover:underline">
          Read Next.js Documentation
        </Link>
      </div>
    </footer>
  );
}
