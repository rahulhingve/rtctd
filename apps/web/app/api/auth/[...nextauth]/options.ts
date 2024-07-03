import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "@repo/db/client";
import z from "zod";


// const credentialsSchema = z.object({
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(8, "Password must be at least 8 characters long"),
// });

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,

        }),

        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         // name: { label: "name", type: "text", placeholder: "john doe" },
        //         email: { label: "email", type: "text", placeholder: "exmail@gmail.com" },
        //         password: { label: "Password", type: "password" },

        //     },

        //     async authorize(credentials: any) {

        //         const parsedCredentials = credentialsSchema.safeParse(credentials);

        //         if (!parsedCredentials.success) {
        //             throw new Error(parsedCredentials.error.errors.map(e => e.message).join(", "));
        //         }
        //         const { email, password } = parsedCredentials.data;

        //         const hashedPassword = await bcrypt.hash(password, 10);

        //         try {
        //             const existingUser = await db.user.findUnique({
        //                 where: {
        //                     email
        //                 },
        //             });

        //             if (existingUser) {
        //                 const passwordValidation = await bcrypt.compare(password, existingUser.password);
        //                 if (passwordValidation) {
        //                     return {
        //                         id: existingUser.id.toString(),
        //                         email: existingUser.email,
        //                     };
        //                 } else {
        //                     throw new Error("Invalid password");
        //                 }
        //             }

        //             const user = await db.user.create({
        //                 data: {
        //                     email,
        //                     password: hashedPassword,
        //                 },
        //             });

        //             return {
        //                 id: user.id.toString(),
        //                 email: user.email,
        //             };
        //         } catch (e) {
        //             console.error("Error during user creation or lookup:", e);
        //             throw new Error("Internal server error");
        //         }
        //     },
        // }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === "github") {
                const email = user.email || profile?.email;

                if (!email) {
                    throw new Error("GitHub user must have an email");
                }

                const existingUser = await db.user.findUnique({
                    where: {
                        email: email,
                    },
                });

                if (!existingUser) {
                    await db.user.create({
                        data: {
                            email: email,
                            name:user.name,
                            password: "", // No password for GitHub users
                        },
                    });
                }
            }
            return true;
        },
      
    
       
    },
    
    
};