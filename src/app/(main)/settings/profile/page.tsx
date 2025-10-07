import Image from "next/image";
import { Button, SocialButton } from "~/app/_components/ui/button";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
export default function Profile() {
  // Placeholder: Fetch user profile data here (SSR/Server Actions)
  // const user = await getUserProfile();

  return (
        <>
            <form className="space-y-10" action="#">
                {/* Social Connections */}
                <section className="bg-white p-4">
                    <div className="flex flex-col gap-2">
                        <SocialButton bgClass="bg-[#4267b2]" icon={<FaFacebookSquare />}>
                            Connect Facebook Account
                        </SocialButton>
                        <SocialButton variant="social" bgClass="bg-[#0a3e4a]" icon={<SiDevdotto/>}>
                            Connect Forem Account
                        </SocialButton>
                        <SocialButton variant="social" bgClass="bg-[#24292e]" icon={<BsGithub/>}>
                            Connect GitHub Account
                        </SocialButton>
                        <SocialButton variant="social" bgClass="bg-black" icon={<BsTwitterX/>}>
                            Connect Twitter (X) Account
                        </SocialButton>
                    </div>
                </section>

                {/* User Info */}
                <section className="bg-white p-4">
                    <h2 className="mb-4 text-xl font-semibold">User</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Name</label>
                            <input id="name" type="text" className="mt-1 w-full rounded-md border p-2"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input id="email" type="email" className="mt-1 w-full rounded-md border p-2"/>
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium">Username</label>
                            <input id="username" type="text" className="mt-1 w-full rounded-md border p-2"/>
                        </div>
                        <div>
                            <label htmlFor="profile" className="block text-sm font-medium">Profile Picture</label>
                            {/* Placeholder: User profile image */}
                            <div className="flex gap-3">
                                <Image src="https://i.imgur.com/AdvTDlI.jpeg" alt="Profile preview" width={48} height={48}
                                    className="mt-2 rounded-full border"/>
                                <div className="mt-2 flex items-center gap-3">
                                    <button type="button" className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50">
                                        Choose File
                                    </button>
                                    <p className="text-sm text-gray-500">
                                        {/* {imageLink ? imageLink : "No file chosen"} */}
                                        No file chosen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Basic Info */}
                <section className="bg-white p-4">
                    <h2 className="mb-4 text-xl font-semibold">Basic</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="website" className="block text-sm font-medium">Website URL</label>
                            <input id="website" type="url" className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 100 */}</p>
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium">Location</label>
                            <input id="location" type="text" className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 100 */}</p>
                        </div>
                        <div>
                            <label htmlFor="bio" className="block text-sm font-medium">Bio</label>
                            <textarea id="bio" rows={3} className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 200 */}</p>
                        </div>
                    </div>
                </section>

                {/* Coding Info */}
                <section className="bg-white p-4">
                    <h2 className="mb-4 text-xl font-semibold">Coding</h2>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="learning" className="block text-sm font-medium">Currently learning</label>
                            <p className="text-sm text-gray-600">
                                {` What are you learning right now? What are the new tools and languages you're picking up?`}
                            </p>
                            <textarea id="learning" rows={3} className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 200 */}</p>
                        </div>
                        <div>
                            <label htmlFor="available" className="block text-sm font-medium">Available for</label>
                            <p className="text-sm text-gray-600">
                                What kinds of collaborations or discussions are you available for?
                            </p>
                            <textarea id="available" rows={3} className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 200 */}</p>
                        </div>
                        <div>
                            <label htmlFor="skills" className="block text-sm font-medium">Skills / Languages</label>
                            <p className="text-sm text-gray-600">What tools and languages are you most experienced with?</p>
                            <textarea id="skills" rows={3} placeholder="Any languages, frameworks, etc. to highlight?"
                                className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 200 */}</p>
                        </div>
                        <div>
                            <label htmlFor="hacking" className="block text-sm font-medium">Currently hacking on</label>
                            <p className="text-sm text-gray-600">What projects are currently occupying most of your time?</p>
                            <textarea id="hacking" rows={3} className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 200 */}</p>
                        </div>
                    </div>
                </section>

                {/* Personal Info */}
                <section className="bg-white p-4">
                    <h2 className="mb-4 text-xl font-semibold">Personal</h2>
                    <div>
                        <label htmlFor="pronouns" className="block text-sm font-medium">Pronouns</label>
                        <input id="pronouns" type="text" className="mt-1 w-full rounded-md border p-2"/>
                        <p className="text-xs text-gray-500">{/* Input length / 100 */}</p>
                    </div>
                </section>

                {/* Work */}
                <section className="bg-white p-4">
                    <h2 className="mb-4 text-xl font-semibold">Work</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="work" className="block text-sm font-medium">Work</label>
                            <input id="work" type="text" placeholder="What do you do? Example: CEO at ACME Inc."
                                className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 100 */}</p>
                        </div>
                        <div>
                            <label htmlFor="education" className="block text-sm font-medium">Education</label>
                            <input id="education" type="text" placeholder="Where did you go to school?"
                                className="mt-1 w-full rounded-md border p-2"/>
                            <p className="text-xs text-gray-500">{/* Input length / 100 */}</p>
                        </div>
                    </div>
                </section>

                {/* Branding */}
                <section className="bg-white p-4">
                    <h2 className="mb-4 text-xl font-semibold">Branding</h2>
                    <label htmlFor="brandColor" className="block text-sm font-medium">Brand color</label>
                    <p className="text-sm text-gray-600">Used for backgrounds, borders, etc.</p>
                    <div className="mt-2 flex items-center gap-2">
                        <input id="brandColor" type="color" className="h-10 w-14 cursor-pointer rounded-md border"/>
                        <input type="text" placeholder="#000000" className="w-24 rounded-md border p-2 text-sm"/>
                    </div>
                </section>

                {/* Save Button */}
                <div className="bg-white p-4">
                    <Button type="submit" variant="primary" fullWidth>
                        Save Profile Information
                    </Button>
                </div>
            </form>
        </>
  );
}