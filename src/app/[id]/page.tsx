import UserProfile from "~/app/_components/user-profile";
import { auth } from "~/server/auth";

export default async function Page({ params }: { params: { id: string } }) {
    const session = await auth();
    const isOwner = session?.user.id === params.id

    return <UserProfile id={params.id} isOwner={isOwner} />;
}