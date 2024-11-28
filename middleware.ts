import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public and ignored routes
const publicRoutes = [
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/events/:id',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
];

const ignoredRoutes = [
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
];

const isPublicRoute = createRouteMatcher(publicRoutes);
const isIgnoredRoute = createRouteMatcher(ignoredRoutes);

export default clerkMiddleware(async (auth, request) => {
  // Skip Clerk middleware for ignored routes
  if (isIgnoredRoute(request)) {
    return;
  }

  // Protect all non-public routes + retain flexibility to define accessible pages like /sign-in, /sign-up, /events/:id
  if (!isPublicRoute(request)) {
    await auth.protect(); // Ensure authenticated access for all routes that are not public.
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};