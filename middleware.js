import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const path = req.nextUrl.pathname;

  const publicPaths = [
    '/dashboard/questions',
    '/dashboard/upgrade',
    '/dashboard/how-it-works',
  ];

  const isPublic = publicPaths.some((p) => path.startsWith(p));

  if (isProtectedRoute(req) && !isPublic) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
