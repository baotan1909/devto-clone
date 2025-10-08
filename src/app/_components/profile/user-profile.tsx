"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FiMapPin, FiGift, FiMail, FiLink } from "react-icons/fi";

type User = {
    id: string;
    name: string | null;
    email?: string | null;
    image?: string | null;
    bio?: string | null;
    display_email_on_profile?: boolean | null;
    location?: string | null;
    website_url?: string | null;
    pronouns?: string | null;
    work?: string | null;
    education?: string | null;
};

export default function UserProfile({ user, isOwner }: { user: User; isOwner: boolean }) {
    const { name, email, image, bio, display_email_on_profile, location, website_url, pronouns, work, education } = user;

    const extraInfo = {
        work: work ?? null,
        pronouns: pronouns ?? null,
        education: education ?? null,
    };

    const availableInfo = Object.entries(extraInfo).filter(([_, value]) => value);

    return (
        <>
            <div className="relative mx-auto -mt-16 w-full max-w-5xl rounded-xl border border-gray-200 bg-white">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    {image && (
                    <Image src={image} alt={name ?? "User"} width={112} height={112}
                    className="rounded-full border-4 border-white shadow-md"/>)}
                </div>

                <div className="pt-14 pb-10 px-8">
                    <div className="flex justify-end">
                        {isOwner ? (
                        <Link href="/settings"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700 inline-block text-center cursor-pointer">
                            Edit profile
                        </Link>
                        ) : (
                        <Button variant="primary" size="lg" className="shadow">Follow</Button>
                        )}
                    </div>

                    <div className="mt-3 flex flex-col items-center text-center">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        {bio ? (<p className="text-gray-600 mt-2 max-w-[75%] break-words">{bio}</p>)
                        : (<p className="text-gray-600 mt-2">404 bio not found</p>)}

                        <div className="mt-3 flex items-center gap-2 text-gray-500 text-sm">
                            {location && (<span className="flex items-center gap-1"><FiMapPin /> {location}</span>)}
                            
                            <span className="flex items-center gap-1"><FiGift /> Joined on ...</span>
                            
                            {display_email_on_profile && (<span className="flex items-center gap-1"><FiMail /> {email}</span>)}
                            
                            {website_url && (
                            <Link href={website_url} className="flex items-center gap-1 text-blue-600 hover:underline">
                                <FiLink /> {website_url}
                            </Link>
                            )}
                        </div>

                        {availableInfo.length > 0 && (
                            <div className="mt-6 w-full max-w-md border-t border-gray-200 pt-4">
                                <div className={`flex justify-${
                                availableInfo.length === 1 ? "center"
                                : availableInfo.length === 2? "between"
                                : "around"} text-gray-700 text-sm`}>
                                {extraInfo.work && <span className="truncate">{extraInfo.work}</span>}
                                {extraInfo.pronouns && <span className="truncate">{extraInfo.pronouns}</span>}
                                {extraInfo.education && <span className="truncate">{extraInfo.education}</span>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}