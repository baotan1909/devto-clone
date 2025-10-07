import Image from "next/image";
import { Button, SocialButton } from "~/app/_components/ui/button";
import FormSection from "~/app/_components/ui/formSection";
import { Input, TextArea } from "~/app/_components/ui/input";
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
                <FormSection>
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
                </FormSection>

                {/* User Info */}
                <FormSection title="User">
                    <div className="space-y-4">
                        <Input id="name" type="text" label="Name" maxLength={30}/>
                        <Input id="email" type="email" label="Email" maxLength={50}/>
                        <Input id="username" type="text" label="Username" maxLength={30}/>
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
                </FormSection>

                {/* Basic Info */}
                <FormSection title="Basic">
                    <div className="space-y-4">
                        <Input id="website" type="url" label="Website URL" maxLength={100} showlength/>
                        <Input id="location" type="text" label="Location" maxLength={100} showlength/>
                        <TextArea id="bio" rows={3} label="Bio" maxLength={200} showlength/>
                    </div>
                </FormSection>

                {/* Coding Info */}
                <FormSection title="Coding">
                    <div className="space-y-6">
                        <TextArea id="learning" rows={3} label="Current Learning" maxLength={200} showlength
                            helperText={` What are you learning right now? What are the new tools and languages you're picking up?`}/>
                        <TextArea id="available" rows={3} label="Available for" maxLength={200} showlength
                            helperText={`What kinds of collaborations or discussions are you available for? What's a good reason to say Hey! to you these days?`}/>
                        <TextArea id="skills" rows={3} label="Skills / Languages" maxLength={200} showlength
                            placeholder="Any languages, frameworks, etc. to highlight?"
                            helperText=" What tools and languages are you most experienced with? Are you specialized or more of a generalist?"/>
                        <TextArea id="hacking" rows={3} label="Currently hacking on" maxLength={200} showlength
                            helperText="What projects are currently occupying most of your time?"/>
                    </div>
                </FormSection>

                {/* Personal Info */}
                <FormSection title="Personal">
                    <Input id="pronouns" label="Pronouns" maxLength={100} showlength/>
                </FormSection>


                {/* Work */}
                <FormSection title="Work">
                    <div className="space-y-4">
                        <Input id="work" label="Work" placeholder="What do you do? Example: CEO at ACME Inc." maxLength={100} showlength/>
                        <Input id="education" label="Educaiton" placeholder="Where did you go to school?" maxLength={100} showlength/>
                    </div>
                </FormSection>

                {/* Branding */}
                <FormSection title="Branding">
                    <label htmlFor="brandColor" className="block text-sm font-medium">Brand color</label>
                    <p className="text-sm text-gray-600">Used for backgrounds, borders, etc.</p>
                    <div className="mt-2 flex items-center gap-2">
                        <input id="brandColor" type="color" className="h-10 w-14 cursor-pointer rounded-md border"/>
                        <input type="text" placeholder="#000000" className="w-24 rounded-md border p-2 text-sm"/>
                    </div>
                </FormSection>

                {/* Save Button */}
                <FormSection>
                    <Button type="submit" variant="primary" fullWidth>
                        Save Profile Information
                    </Button>
                </FormSection>
            </form>
        </>
  );
}