import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/forum(.*)',
]);

// If running on Netlify, disable middleware
const isNetlify = process.env.NETLIFY === 'true';

export default isNetlify
  ? () => {}
  : clerkMiddleware((auth, req) => {
      if (isProtectedRoute(req)) auth().protect();
    });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
