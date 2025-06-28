'user server'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Allow unauthenticated access to the signin page and static files
  const isAuthPage = pathname === '/signin' || pathname.startsWith('/_next') || pathname.startsWith('/api/auth');

  if (!token && !isAuthPage) {
    const signInUrl = new URL('/signin', req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}
