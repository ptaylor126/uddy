import { NextRequest, NextResponse } from 'next/server';

// Routes that stay accessible even in pre-launch mode.
const ALLOWED_PATHS = ['/prelaunch', '/prelaunch-v1', '/prelaunch-v2', '/prelaunch-v3', '/confirmed', '/api/signup', '/api/confirm', '/v1', '/v2', '/v3'];

// Pass the (post-rewrite) pathname through to the server-rendered layout
// so it can decide whether to render the site chrome.
function withPathHeader(request: NextRequest, finalPath: string) {
  const headers = new Headers(request.headers);
  headers.set('x-pathname', finalPath);
  return headers;
}

export function middleware(request: NextRequest) {
  const prelaunchMode = process.env.NEXT_PUBLIC_PRELAUNCH_MODE === 'true';
  const { pathname } = request.nextUrl;

  if (!prelaunchMode) {
    return NextResponse.next({
      request: { headers: withPathHeader(request, pathname) },
    });
  }

  // Let allowed routes through
  if (ALLOWED_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next({
      request: { headers: withPathHeader(request, pathname) },
    });
  }

  // Root shows the landing page (URL stays as "/")
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/prelaunch';
    return NextResponse.rewrite(url, {
      request: { headers: withPathHeader(request, '/prelaunch') },
    });
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
