import { UserProfile, SocialPost } from '@/types/social';

const mockUser1: UserProfile = {
  id: '1',
  name: 'Student User',
  email: 'student@example.com',
  role: 'student',
  bio: 'Just a student trying to pass my exams!',
  followersCount: 150,
  followingCount: 75,
  posts: [],
};

const mockUser2: UserProfile = {
  id: '2',
  name: 'Lecturer User',
  email: 'lecturer@example.com',
  role: 'lecturer',
  bio: 'Sharing knowledge and helping students succeed.',
  followersCount: 500,
  followingCount: 100,
  posts: [],
};

export const mockSocialPosts: SocialPost[] = [
  {
    id: 'post1',
    author: mockUser1,
    content: 'Just finished the mock accounting exam. It was tough, but I think I did well!',
    timestamp: new Date('2024-09-26T10:00:00Z'),
    likes: [{ userId: '2', timestamp: new Date() }],
    comments: [
      {
        id: 'comment1',
        author: mockUser2,
        content: 'Great job! Keep up the hard work.',
        timestamp: new Date('2024-09-26T10:05:00Z'),
      },
    ],
  },
  {
    id: 'post2',
    author: mockUser2,
    content: 'I just uploaded a new tutorial on Newton\'s Laws of Motion. Check it out on the tutorials page!',
    timestamp: new Date('2024-09-25T15:30:00Z'),
    likes: [],
    comments: [],
  },
];

mockUser1.posts = [mockSocialPosts[0]];
mockUser2.posts = [mockSocialPosts[1]];

export const mockUserProfiles: UserProfile[] = [mockUser1, mockUser2];