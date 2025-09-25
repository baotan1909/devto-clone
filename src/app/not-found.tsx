import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
            <Image src="https://i.imgur.com/AdvTDlI.jpeg" alt="404 illustration" width={300} height={300}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg ring-25 ring-purple-500"/>
            <div className="mt-12 space-y-4">
                <p className="text-2xl text-gray-800">This page does not exist</p>
                <Link href="/" className="text-2xl text-blue-800 underline hover:text-blue-600">Return to Homepage</Link>
            </div>
        </div>
    )
}