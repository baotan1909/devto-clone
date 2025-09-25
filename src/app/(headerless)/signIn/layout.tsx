import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome! - Dev Community",
  description: "Sign in to join the Dev Community and connect with developers worldwide", 
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function SignInLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="w-full max-w-md px-6">{children}</div>
      </div>
  );
}