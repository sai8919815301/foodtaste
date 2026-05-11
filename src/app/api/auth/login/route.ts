import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'auth/login GET endpoint ready' });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'auth/login POST endpoint ready' });
}
