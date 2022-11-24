import { NextResponse } from "next/server";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

export default async function middleware(req) {
    const token = await req.cookies.get('access_token');
    const url = req.url

    if (token && url.includes('/login')) {
        return NextResponse.redirect('http://localhost:3000/')
    }

    if (!token && url.includes('/tulis')) {
        return NextResponse.redirect('http://localhost:3000/')
    }

    if (!token && url.includes('/admin')) {
        return NextResponse.redirect('http://localhost:3000/')
    }

    if (!token && url.includes('/users')) {
        return NextResponse.redirect('http://localhost:3000/')
    }
}