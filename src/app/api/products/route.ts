import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'products GET endpoint ready' });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'products POST endpoint ready' });
}
