import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Welcome! - Dev Community",
  description: "Sign in to join the Dev Community and connect with developers worldwide", 
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function SignInLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="w-full max-w-md px-6">{children}</div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}