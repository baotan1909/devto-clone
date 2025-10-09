import { Button, SocialButton } from "~/app/_components/ui/button";
import FormSection from "~/app/_components/ui/formSection";
import { Input, TextArea, Checkbox, ImageInput } from "~/app/_components/ui/input";
import ColorPicker from "~/app/_components/ui/colorPicker";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import { api } from "~/trpc/server";
import { redirect } from "next/navigation";

export default async function Profile() {
    const user = await api.user.getCurrentUser();
    if (!user) redirect("/");
    const {
        name, image,
        website_url, location, bio,
        display_email_on_profile, email,
        learning, available_for, skills, hacking,
        pronouns, work, education,
        brand_color,
    } = user;
  
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
                        <Input id="name" type="text" label="Name" value={name ?? ""} maxLength={30}/>
                        <Input id="email" type="email" label="Email" value={email ?? ""} maxLength={50}/>
                        <Checkbox id="display_email_on_profile" name="display_email_on_profile"
                        checked={!!display_email_on_profile} label="Display email on profile"/>
                        <Input id="username" type="text" label="Username" maxLength={30}/>
                        <ImageInput id="profile_image" label="Profile Picture" defaultImage={image}/>
                    </div>
                </FormSection>

                {/* Basic Info */}
                <FormSection title="Basic">
                    <div className="space-y-4">
                        <Input id="website" type="url" label="Website URL" value={website_url ?? ""} maxLength={100} showlength/>
                        <Input id="location" type="text" label="Location" value={location ?? ""} maxLength={100} showlength/>
                        <TextArea id="bio" rows={3} label="Bio" value={bio ?? ""} maxLength={200} showlength/>
                    </div>
                </FormSection>

                {/* Coding Info */}
                <FormSection title="Coding">
                    <div className="space-y-6">
                        <TextArea id="learning" rows={3} label="Current Learning" value={learning ?? ""} maxLength={200} showlength
                            helperText={` What are you learning right now? What are the new tools and languages you're picking up?`}/>
                        <TextArea id="available" rows={3} label="Available for" value={available_for ?? ""} maxLength={200} showlength
                            helperText={`What kinds of collaborations or discussions are you available for? What's a good reason to say Hey! to you these days?`}/>
                        <TextArea id="skills" rows={3} label="Skills / Languages" value={skills ?? ""} maxLength={200} showlength
                            placeholder="Any languages, frameworks, etc. to highlight?"
                            helperText=" What tools and languages are you most experienced with? Are you specialized or more of a generalist?"/>
                        <TextArea id="hacking" rows={3} label="Currently hacking on" value={hacking ?? ""} maxLength={200} showlength
                            helperText="What projects are currently occupying most of your time?"/>
                    </div>
                </FormSection>

                {/* Personal Info */}
                <FormSection title="Personal">
                    <Input id="pronouns" label="Pronouns" value={pronouns ?? ""} maxLength={100} showlength/>
                </FormSection>

                {/* Work */}
                <FormSection title="Work">
                    <div className="space-y-4">
                        <Input id="work" label="Work" value={work ?? ""} maxLength={100} showlength
                        placeholder="What do you do? Example: CEO at ACME Inc."/>
                        <Input id="education" label="Education" value={education ?? ""} maxLength={100} showlength
                        placeholder="Where did you go to school?"/>
                    </div>
                </FormSection>

                {/* Branding */}
                <FormSection title="Branding">
                    <ColorPicker id="brandColor" label="Brand color" defaultColor={brand_color ?? "#000000"} helperText="Used for backgrounds, borders etc."/>
                </FormSection>

                {/* Save Button */}
                <FormSection>
                    <Button type="button" variant="primary" fullWidth>
                        Save Profile Information
                    </Button>
                </FormSection>
            </form>
        </>
    );
}