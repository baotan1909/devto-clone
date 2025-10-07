"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignOutButton() {
    const [loading, setLoading] = useState(false);

    const handleSignOut = async () => {
        setLoading(true);
        await signOut({callbackUrl: "/"});
        setLoading(false);
    };

    return (
        <Button onClick={handleSignOut} isLoading={loading} variant="primary" className="w-36 px-6 py-3 bg-blue-800 hover:bg-blue-900">
            Yes, sign out
        </Button>
    );
}