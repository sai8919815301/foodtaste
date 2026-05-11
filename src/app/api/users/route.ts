import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'users GET endpoint ready' });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'users POST endpoint ready' });
}
