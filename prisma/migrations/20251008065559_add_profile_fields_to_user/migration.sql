-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "available_for" VARCHAR(200),
ADD COLUMN     "bio" VARCHAR(200),
ADD COLUMN     "brand_color" VARCHAR(7),
ADD COLUMN     "display_email_on_profile" BOOLEAN,
ADD COLUMN     "education" VARCHAR(100),
ADD COLUMN     "hacking" VARCHAR(200),
ADD COLUMN     "learning" VARCHAR(200),
ADD COLUMN     "location" VARCHAR(100),
ADD COLUMN     "pronouns" VARCHAR(100),
ADD COLUMN     "skills" VARCHAR(200),
ADD COLUMN     "website_url" VARCHAR(100),
ADD COLUMN     "work" VARCHAR(100);
