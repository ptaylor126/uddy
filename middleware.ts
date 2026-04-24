import { NextRequest, NextResponse } from 'next/server';

// Routes that stay accessible even in pre-launch mode.
const ALLOWED_PATHS = ['/prelaunch', '/confirmed', '/api/signup', '/api/confirm'];

export function middleware(request: NextRequest) {
  const prelaunchMode = process.env.NEXT_PUBLIC_PRELAUNCH_MODE === 'true';

  if (!prelaunchMode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Let allowed routes through
  if (ALLOWED_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next();
  }

  // Root shows the landing page (URL stays as "/")
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/prelaunch';
    return NextResponse.rewrite(url);
  }

  // Everything else: send them to root
  const url = request.nextUrl.clone();
  url.pathname = '/';
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except static files and Next internals
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|otf)).*)'],
};
