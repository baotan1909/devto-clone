import UserProfile from "~/app/_components/user-profile";
import UserStats from "../_components/user-stats";
import UserBanner from "../_components/user-banner";
import { auth } from "~/server/auth";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    const { id } = await params;
    const isOwner = session?.user.id === id

    return (
        <div className="bg-gray-50">
            <UserBanner/>
            <div className="mx-auto max-w-5xl px-4">
                <UserProfile id={id} isOwner={isOwner} />
                <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                        <UserStats/>
                    </div>
                    <div className="md:col-span-3">
                        <div className="bg-white rounded-x1 shadow p-6">
                            <h1>Future content</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}