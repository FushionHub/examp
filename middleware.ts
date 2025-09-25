import { auth } from '@/auth';

export default auth((req) => {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/dashboard') && !req.auth) {
    const newUrl = new URL('/api/auth/signin', req.nextUrl.origin);
    newUrl.searchParams.set('callbackUrl', pathname);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/dashboard/:path*', '/profile'],
};