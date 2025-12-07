import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between w-[95%] mx-auto py-6 sm:px-6 fixed z-50 h-24 inset-0 bg-white/70  backdrop-blur-lg">
        <div className="flex space-x-3 justify-center items-center">
          <div className="w-9 h-9 rounded-full bg-[#ef4434] font-extrabold text-white text-center text-3xl ">
            S
          </div>
          <span className="text-3xl text-gray-400">+</span>
          <div className="w-9 h-9 rounded-full bg-black font-medium text-white text-center text-3xl ">
            N
          </div>
          <p className="hidden lg:block text-lg font-semibold">
            Sanity + Next.js
          </p>
        </div>
        <div className="flex space-x-5 justify-center items-flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal">
          <Link href={"/about"}>About</Link>
          <div className=" border-gray-300 border-l-2 pl-5 ">
            <Link
              className="rounded-full flex gap-2 items-center bg-black hover:bg-red-500 focus:bg-cyan-500 p-1 sm:py-3  sm:px-6 text-white transition-colors duration-200 "
              href={"https://github.com/sanity-io/sanity-template-nextjs-clean"}
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
