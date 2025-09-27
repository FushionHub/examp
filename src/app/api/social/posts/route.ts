import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { content } = await req.json();

  if (!content) {
    return NextResponse.json({ error: 'Content is required.' }, { status: 400 });
  }

  // In a real application, you would add logic here to save the new post to the database.
  console.log('New post content:', content);
  console.log('Author:', session.user);

  return NextResponse.json({ message: 'Post created successfully' }, { status: 201 });
}