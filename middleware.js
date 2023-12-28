import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request) {
        console.log(request.nextUrl.pathname)
        console.log(request.nextauth.token.role);

        if (
            request.nextUrl.pathname.startsWith("/CreateUser") &&
            request.nextauth.token.role != "admin"
        ) {
            return NextResponse.rewrite(new URL("/Denied", request.url))
        }
    },
    {
        callbacks: {
            authorized: ({token}) => !!token,
    },
    }
);

export const config = {matcher: ["/CreateUser"] };
