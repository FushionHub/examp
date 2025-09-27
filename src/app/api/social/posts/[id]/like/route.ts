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

  // In a real application, you would add logic here to like/unlike the post in the database.
  console.log(`Liking post with ID: ${params.id}`);
  console.log('User:', session.user);

  return NextResponse.json({ message: 'Post liked successfully' }, { status: 200 });
}