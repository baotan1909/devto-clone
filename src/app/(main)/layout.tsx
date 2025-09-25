import { auth } from "~/server/auth";
import Header from "../_components/header";

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <>    
      <Header session = {session}/>
      {children}
    </>
  );
}