'user'
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@/db/mongodb";
import { User } from '@/models/users';

const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60, // 1 day in seconds
      },
      jwt: {
        maxAge: 24 * 60 * 60,
      },
    callbacks: {
      async jwt({ token, account }) {
        
        if (account) {
          token.accessToken = account.access_token;
        }
        await connectToDB();
        const existingUser = await User.findOne({ email: token.email });

        if (existingUser) {
    
            existingUser.accessToken = token.accessToken; // or token.accessToken
            await existingUser.save();
            console.log('Access token updated for existing user:', existingUser);
        } 

        return token;
      },
      async session({ session, token }) {

        await connectToDB();
        const userInDB = await User.findOne({ email: session.user.email });
        if (userInDB) {
            session.user.id = userInDB._id;
            session.accessToken = token.accessToken;
        }
        return session;
      },
      async redirect({ url, baseUrl }) {
        return baseUrl; // Redirect to home page
      },
      async signIn({ user }) {
        try {
           
          await connectToDB();
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const res = await User.create({
              name: user.name,
              email: user.email,
            });
            console.log(res)
          }
          return true;
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      },
    },
  });
  

export { handler as GET, handler as POST };
