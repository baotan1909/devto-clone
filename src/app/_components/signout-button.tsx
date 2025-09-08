"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
    const [loading, setLoading] = useState(false);

    const handleSignOut = async () => {
        setLoading(true);
        await signOut({callbackUrl: "/"});
        setLoading(false);
    };

    return (
        <button
        onClick={handleSignOut}
        disabled={loading}
        className="w-36 px-6 py-3 rounded-md bg-blue-800 text-white font-medium hover:bg-blue-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {loading ? "Signing out..." : "Yes, sign out"}
        </button>
    );
}