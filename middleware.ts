
import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  "/dashboard",
]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    // Ensure auth is called correctly and protect the route
    auth().protect();
  }

  // Add custom logic to run before redirecting
  // ...

  return NextResponse.next(); // Ensure NextResponse.next is called as a function
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
