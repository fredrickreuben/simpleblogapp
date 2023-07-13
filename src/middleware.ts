import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(

    async function middleware(req, res) {

        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

        if (token != null && (req.nextUrl.pathname.startsWith('/register'))) {
            return NextResponse.redirect(new URL('/', req.url))
        }
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ req, token }) => {
                if (token == null) {
                    return req.nextUrl.pathname.startsWith('/create/post') ? false : true
                } else {
                    return true
                }
            },
        },
    }
)