import { auth } from '@/auth';

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith('/profile')) {
    const newUrl = new URL('/api/auth/signin', req.nextUrl.origin);
    newUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/profile'],
};