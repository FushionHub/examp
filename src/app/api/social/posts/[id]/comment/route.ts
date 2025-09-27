import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { content } = await req.json();

  if (!content) {
    return NextResponse.json({ error: 'Content is required.' }, { status: 400 });
  }

  // In a real application, you would add logic here to save the new comment to the database.
  console.log(`Adding comment to post with ID: ${params.id}`);
  console.log('Comment content:', content);
  console.log('User:', session.user);

  return NextResponse.json({ message: 'Comment added successfully' }, { status: 201 });
}