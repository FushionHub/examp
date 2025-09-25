import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { User } from '@/types/users';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        // Add your user authentication logic here
        // For now, we'll just return a mock user
        if (credentials?.email === 'test@example.com' && credentials?.password === 'password') {
          return { id: '1', name: 'Test User', email: 'test@example.com', role: 'student' };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as User).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as User).role = token.role as User['role'];
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});