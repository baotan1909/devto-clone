"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsDiscord, BsGithub } from "react-icons/bs";

export default function SigninForm() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSignIn = async (provider: "google" | "discord" | "github") => {
    setLoading(provider);
    await signIn(provider, { callbackUrl: "/" });
    setLoading(null);
  };

  const baseClasses = "flex items-center justify-between gap-2 px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50 cursor-pointer";

  return (
    <div className="flex flex-col gap-3 w-full">
        <button
        onClick={() => handleSignIn("google")}
        disabled={loading === "google"}
        className={baseClasses}
        >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
            <span className="w-5" />
        </button>

        <button
        onClick={() => handleSignIn("discord")}
        disabled={loading === "discord"}
        className={baseClasses}
        >
            <BsDiscord size={20} className="text-indigo-600" />
            <span>Continue with Discord</span>
            <span className="w-5" />
        </button>

        <button
        onClick={() => handleSignIn("github")}
        disabled={loading === "github"}
        className={baseClasses}
        >
            <BsGithub size={20} />
            <span>Continue with GitHub</span>
            <span className="w-5" />
        </button>
    </div>
  );
}
