import UserProfile from "~/app/_components/profile/user-profile";
import UserStats from "~/app/_components/profile/user-stats";
import UserCodingInfo from "~/app/_components/profile/user-coding";
import UserBanner from "~/app/_components/profile/user-banner";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    const { id } = await params;
    const isOwner = session?.user.id === id;
    const user = await api.user.getById({id});
    if (!user) {
        notFound();
    }
    const {brand_color, skills, learning, hacking, available_for} = user;

    return (    
        <div className="bg-gray-50">
            <UserBanner brandColor={brand_color}/>
            <div className="mx-auto max-w-5xl px-4">
                <UserProfile user={user} isOwner={isOwner} />
                <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1 flex flex-col gap-4">
                        {skills && (<UserCodingInfo title="Skills/Languages" content={skills}/>)}
                        {learning && (<UserCodingInfo title="Currently learning" content={learning}/>)}
                        {hacking && (<UserCodingInfo title="Currently hacking on" content={hacking}/>)}
                        {available_for && (<UserCodingInfo title="Available for" content={available_for}/>)}
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