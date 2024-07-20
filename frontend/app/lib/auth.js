import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const NEXT_AUTH = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token, user }) {
            console.log(session);
            if (session && session.user) {
                session.user.id = token.userId;
            }

            return session;
        },
        async signIn({ profile }) {
            console.log(profile);

            const userExist = await prisma.user.findUnique({
                where: {
                    email: profile.email
                }
            });

            if (!userExist) {
                try {
                    await prisma.user.create({
                        data: {
                            email: profile.email,
                            name: profile.name,
                        }
                    });
                    console.log("User created");
                } catch (err) {
                    console.log("Error creating user", err);
                }
            }

            return true;
        }
    },
    pages: {
        signIn: "/signin"
    }
};
