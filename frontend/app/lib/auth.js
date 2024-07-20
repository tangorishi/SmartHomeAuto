import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
    providers: [,
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {

        async session({ session, token, user }) {
            console.log(session)
            if (session && session.user) {
                session.user.id = token.userId
            }
            return session
        },
    },
    pages: {
        signIn: "/signin"
    }
}