import { User } from './users';

export interface Like {
  userId: string;
  timestamp: Date;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: Date;
}

export interface SocialPost {
  id: string;
  author: User;
  content: string;
  timestamp: Date;
  likes: Like[];
  comments: Comment[];
}

export interface UserProfile extends User {
  bio?: string;
  followersCount: number;
  followingCount: number;
  posts: SocialPost[];
}