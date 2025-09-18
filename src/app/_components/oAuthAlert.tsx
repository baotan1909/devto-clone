'use client';

import { use } from "react";

const ERROR_MESSAGES: Record<string, string> = {
    OAuthAccountNotLinked:
    "This email is already associated with a different sign-in method.\nPlease use the original provider linked to your account.",
    OAuthCallbackError:
    "There was an error during the authentication process.\nPlease try again or use a different provider.",
    OAuthSignInError:
    "Sign-in with the selected provider failed.\nPlease try again or choose another provider.",
};

export default function OAuthAlert({searchParams} : {searchParams: Promise<{error?: string}>}) {
    const params = use(searchParams);
    const error = params.error;

    if (!error) return null;

    const errorMessage = ERROR_MESSAGES[error] ?? "An unknown error occurred.";

    return (
        <div className="rounded bg-red-100 p-4 text-sm text-red-700 text-center whitespace-pre-line">
            <p> { errorMessage } </p>
        </div>
    )
}