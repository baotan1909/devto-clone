import MenuItem from "~/app/_components/menuItem";

export default async function SettingsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
                    <main className="p-6">{children}</main>
                </div>
            </div>
        </div>
    );
}