import { NextResponse } from "next/server";

export function middleware(request) {
    if(!request.cookies.has("futuroverde_token"))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [ 
        '/receitas:path*',

    ]
}