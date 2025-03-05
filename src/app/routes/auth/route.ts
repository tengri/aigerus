import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { password } = await request.json();
    return NextResponse.json({ message: 'Hello, world!' })
}