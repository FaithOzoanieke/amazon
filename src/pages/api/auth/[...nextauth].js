import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

console.log(
  'process.env.NEXT_PUBLIC_GOOGLE_ID',
  process.env.NEXT_PUBLIC_GOOGLE_ID
);
console.log(
  'process.env.NEXT_PUBLIC_GOOGLE_SECRET',
  process.env.NEXT_PUBLIC_GOOGLE_SECRET
);
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
