import UserProfile from "~/app/_components/user-profile";
import UserBanner from "../_components/user-banner";
import { auth } from "~/server/auth";

export default async function Page({ params }: { params: { id: string } }) {
    const session = await auth();
    const isOwner = session?.user.id === params.id

    return (
        <>        
            <UserBanner/>
            <UserProfile id={params.id} isOwner={isOwner} />
        </>
    );
}