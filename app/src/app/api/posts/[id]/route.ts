import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/types/users';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  const user = session?.user as User;

  if (!session || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (user.role !== 'lecturer' && user.role !== 'blogger' && user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // In a real application, you would add logic here to delete the post from the database.
  // For now, we'll just return a success message.
  console.log(`Deleting post with ID: ${params.id}`);
  return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
}