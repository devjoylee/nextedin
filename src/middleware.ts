import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const { pathname, origin } = req.nextUrl;

  if (req.nextUrl.pathname === '/') {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === 'production',
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) return NextResponse.redirect(`${origin}/home`);
    else return NextResponse.redirect(`${origin}/feed`);
    // If user is authenticated, continue.
  }
};
