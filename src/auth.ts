import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { User } from '@/types/users';

const mockUsers: User[] = [
  { id: '1', name: 'Student User', email: 'student@example.com', role: 'student' },
  { id: '2', name: 'Lecturer User', email: 'lecturer@example.com', role: 'lecturer' },
  { id: '3', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        const user = mockUsers.find(
          (u) => u.email === credentials.email && credentials.password === 'password'
        );
        return user || null;
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