import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/types/users';

export async function POST(req: NextRequest) {
  const session = await auth();
  const user = session?.user as User;

  if (!session || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (user.role !== 'lecturer') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // In a real application, you would add logic here to create a new tutorial in the database.
  // For now, we'll just return a success message.
  return NextResponse.json({ message: 'Tutorial created successfully' }, { status: 201 });
}