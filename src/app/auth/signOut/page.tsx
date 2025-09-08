import SignOutButton from "~/app/_components/signout-button";

export default function SignOutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 gap-4">
      <h1 className="text-2xl font-bold text-gray-900 text-center">
        Are you sure you want to sign out?
      </h1>
      <SignOutButton />
    </div>
  );
}