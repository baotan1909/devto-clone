"use client";

import Image from "next/image";
import { api } from "~/trpc/react";

export default function UserProfile({ id, isOwner }: { id: string; isOwner: boolean }) {
  const [user] = api.user.getById.useSuspenseQuery({ id });
  
  if (!user) {
    return <p className="text-gray-500 p-6">User not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="relative mx-auto mt-12 w-full max-w-5xl rounded-xl border border-gray-200 bg-white">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                {user.image && (
                <Image
                src={user.image}
                alt={user.name ?? "User"}
                width={112}
                height={112}
                className="rounded-full border-4 border-white shadow-md"
                />
                )}
            </div>

            <div className="pt-14 pb-10 px-8">
                <div className="flex justify-end">
                    <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700">
                        {isOwner ? "Edit profile" : "Follow"}
                    </button>
                </div>

                <div className="mt-3 flex flex-col items-center text-center">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-gray-600 mt-2">404 bio not found</p>
                    <div className="mt-3 flex items-center gap-2 text-gray-500 text-sm">
                        <span>Joined on ...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}