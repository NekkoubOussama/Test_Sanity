"use client";

import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-sm  text-gray-800">
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-2 text-sm "
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4 ">Login</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
