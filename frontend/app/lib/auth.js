import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Use environment variable for secret key
  callbacks: {
    async session({ session, token }) {
      if (session && session.user) {
        session.user.id = token.userId; // Ensure type consistency
      }
      return session;
    },
    async signIn({ profile }) {
      // No database interaction
      console.log("User profile:", profile);
      return true; // Allow sign-in regardless of profile
    },
  },
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
