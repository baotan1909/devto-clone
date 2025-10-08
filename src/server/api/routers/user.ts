import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    getById: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            return await ctx.db.user.findUnique({
                where: { id: input.id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                    display_email_on_profile: true,
                    website_url: true,
                    location: true,
                    bio: true,
                    learning: true,
                    available_for: true,
                    skills: true,
                    hacking: true,
                    pronouns: true,
                    work: true,
                    education: true,
                    brand_color: true,
                },
            });
    }),

    getCurrentUser: protectedProcedure.query(async ({ ctx }) => {
        return await ctx.db.user.findUnique({
            where: { id: ctx.session.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                display_email_on_profile: true,
                website_url: true,
                location: true,
                bio: true,
                learning: true,
                available_for: true,
                skills: true,
                hacking: true,
                pronouns: true,
                work: true,
                education: true,
                brand_color: true,
            },
        });
    })
});