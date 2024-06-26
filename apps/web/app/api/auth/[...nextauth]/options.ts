import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "@repo/db/client";




export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,

        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                // name: { label: "name", type: "text", placeholder: "john doe" },
                email: { label: "email", type: "text", placeholder: "exmail@gmail.com" },
                password: { label: "Password", type: "password" },

            },

            async authorize(credentials: any) {
                if (!credentials) {
                    throw new Error("missing credentials")
                }
                const hashedPassword = await bcrypt.hash(credentials.password, 10);

                try {
                    const existingUser = await db.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                    });

                    if (existingUser) {
                        const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                        if (passwordValidation) {
                            return {
                                id: existingUser.id.toString(),
                                email: existingUser.email,
                            };
                        } else {
                            throw new Error("Invalid password");
                        }
                    }

                    const user = await db.user.create({
                        data: {
                            email: credentials.email,
                            password: hashedPassword,
                        },
                    });

                    return {
                        id: user.id.toString(),
                        email: user.email,
                    };
                } catch (e) {
                    console.error("Error during user creation or lookup:", e);
                    throw new Error("Internal server error");
                }
            },
        }),
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
                            password: "", // No password for GitHub users
                        },
                    });
                }
            }
            return true;
        },
    
       
    },
    
    
};