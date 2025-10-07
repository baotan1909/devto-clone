"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { SocialButton } from "~/app/_components/ui/button";

export default function SigninForm() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSignIn = async (provider: "google" | "discord" | "github") => {
    setLoading(provider);
    await signIn(provider, { callbackUrl: "/" });
    setLoading(null);
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <SocialButton onClick={() => handleSignIn("google")} isLoading={loading === "google"} icon={<FcGoogle size={20}/>}>
        Continue with Google
      </SocialButton>
      <SocialButton onClick={() => handleSignIn("discord")} isLoading={loading === "discord"} icon={<BsDiscord size={20} className="text-indigo-600"/>}>
        Continue with Discord
      </SocialButton>
      <SocialButton onClick={() => handleSignIn("github")} isLoading={loading === "github"} icon={<BsGithub size={20}/>}>
        Continue with GitHub
      </SocialButton>
    </div>
  );
}
