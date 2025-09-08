import Image from "next/image";
import SigninForm from "~/app/_components/signin-form";

export default async function SignInPage() {

  return (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-3 text-center">
            <Image
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt="Dev Community Logo"
            width={80}
            height={80}
            />
            <h1 className="text-2xl font-bold text-gray-900">
                Join the Dev community
            </h1>
            <p className="text-sm text-gray-600 max-w-sm">
                DEV Community is a community of 1 amazing developer
            </p>
        </div>

        <SigninForm />

        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500"></span>
            </div>
        </div>

        <p className="text-xs text-gray-500 text-center leading-relaxed">
            By signing up, you are agreeing to our{" "}
            <span className="underline cursor-pointer hover:text-gray-700">privacy policy</span>,{" "}
            <span className="underline cursor-pointer hover:text-gray-700">terms of use</span>
            <br />
            and{" "}
            <span className="underline cursor-pointer hover:text-gray-700">code of conduct</span>.
        </p>

        <p className="text-center text-sm text-gray-700">
            Already have an account?{" "}
            <span className="font-medium text-blue-600 hover:underline cursor-pointer">
            Log in
            </span>
        </p>
    </div>
  );
}
