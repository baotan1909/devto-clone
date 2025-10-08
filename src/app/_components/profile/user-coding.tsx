"use client";

interface UserCodingInfoProps {
    title: string;
    content: string | null;
}

export default function UserCodingInfo({ title, content }: UserCodingInfoProps) {
    return (
        <div className="max-w-sm bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-2">{title}</h3>
            <p className="text-gray-700 break-words">{content}</p>
        </div>
    );
}