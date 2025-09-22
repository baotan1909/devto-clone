"use client";

import Link from "next/link";
import Image from "next/image";
import { api } from "~/trpc/react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import type { Session } from "next-auth";
import { useState } from "react";
import MenuItem from "./menuItem";

export default function Header({ session }: { session: Session | null }) {
  const [user] = session ? api.user.getById.useSuspenseQuery({ id: session.user.id }) : [null];
  const [open, setOpen] = useState(false);
  const menuItem = "block px-5 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline";

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
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md
              transition hover:bg-blue-600 hover:text-white hover:underline">
              Create Post
            </Link>

            <Link
              href="/"
              className="p-2 text-black hover:bg-blue-50 hover:text-blue-800 transition-colors relative"
            >
              <FaRegBell className="w-5 h-5" />
            </Link>
            <div className="relative">              
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center focus:outline-none">
                  {user?.image ? (
                    <Image
                    src={user.image}
                    alt={user.name ?? "User"}
                    width={36}
                    height={36}
                    className="rounded-full border border-gray-300 shadow-sm hover:ring-2 hover:ring-blue-500 transition"
                    />
                    
                    ) : (
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                      {user?.name?.[0] ?? "?"}
                    </div>
                  )}
              </button>

              {open && (
                <ul className="absolute right-0 mt-2 w-72 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
                    <MenuItem href={`/${session.user.id}`} onClick={() => setOpen(false)} borderBottom>
                      <p>{user?.name}</p>
                      <p>{user?.id}</p>
                    </MenuItem>
                    <MenuItem href="/" onClick={() => setOpen(false)}>Dashboard</MenuItem>
                    <MenuItem href="/" onClick={() => setOpen(false)}>Create Post</MenuItem>
                    <MenuItem href="/" onClick={() => setOpen(false)}>Settings</MenuItem>
                    <MenuItem href="/api/auth/signout" onClick={() => setOpen(false)} borderTop>Sign out</MenuItem>
                </ul>
              )}
            </div>
          </div>
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