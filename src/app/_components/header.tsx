"use client";

import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import type { Session } from "next-auth";

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt="Dev Community Logo"
          width={48}
          height={38}
        />
      </Link>

      <div className="flex-1 px-6">
        <div className="flex items-center border border-gray-300 rounded-md w-full max-w-lg">
          <button
            type="button"
            className="p-2 rounded-md text-gray-400 hover:bg-blue-200 hover:text-blue-600 cursor-pointer
            transition-colors duration-200 flex items-center justify-center">
          <FaSearch className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-sm focus:outline-none ml-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {session?.user?.id ? (
          <>
            <Link
              href={`/${session.user.id}`}
              className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
            >
              Profile
            </Link>
            <Link
              href="/api/auth/signout"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Sign out
            </Link>
          </>
          ) : (
          <>
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 hover:underline"
            >
              Log in
            </Link>
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md
              transition hover:bg-blue-600 hover:text-white hover:underline">
              Create account
            </Link>
          </>
        )}
      </div>
    </header>
  );
}