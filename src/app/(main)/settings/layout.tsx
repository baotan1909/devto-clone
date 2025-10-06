import MenuItem from "~/app/_components/menuItem";
import { auth } from "~/server/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SettingsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await auth();
    if (!session?.user) {
        redirect("/signIn");
    }
    return (
        <div className="bg-gray-50 w-full min-h-screen flex flex-col">
            <div className="flex justify-center p-4 flex-1">
                <div className="grid grid-cols-[200px_1fr] w-[70%] bg-gray-50 min-h-full">
                    {/* Navbar */}
                    <nav className="p-4">
                        <ul>
                            <MenuItem href="/">Profile</MenuItem>
                            <MenuItem href="/">Customization</MenuItem>
                            <MenuItem href="/">Notifications</MenuItem>
                            <MenuItem href="/">Account</MenuItem>
                            <MenuItem href="/">Organization</MenuItem>
                            <MenuItem href="/">Extensions</MenuItem>
                        </ul>
                    </nav>
                    {/* Content */}
                    <main className="p-6">
                        <h1 className="text-2xl text-blue-700"><Link href={`/${session?.user.id}`}>@{session?.user.id}</Link></h1>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}