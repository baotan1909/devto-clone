"use client";

import Link from "next/link";
import Image from "next/image";
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
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-lg rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        {session?.user?.id && (
          <Link
            href={`/${session.user.id}`}
            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
          >
            Profile
          </Link>
        )}
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </header>
  );
}
