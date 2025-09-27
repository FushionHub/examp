'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { mockSocialPosts } from '@/lib/mock-social-data';
import { SocialPost, Comment } from '@/types/social';
import CreateSocialPost from '@/components/CreateSocialPost';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const SocialFeedPage = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState(mockSocialPosts);
  const [commentText, setCommentText] = useState('');

  const handleLike = async (postId: string) => {
    const response = await fetch(`/api/social/posts/${postId}/like`, {
      method: 'POST',
    });

    if (response.ok) {
      setPosts(
        posts.map((p) => {
          if (p.id === postId) {
            const liked = p.likes.some((l) => l.userId === session?.user?.id);
            if (liked) {
              return { ...p, likes: p.likes.filter((l) => l.userId !== session?.user?.id) };
            } else {
              return { ...p, likes: [...p.likes, { userId: session?.user?.id || '', timestamp: new Date() }] };
            }
          }
          return p;
        })
      );
    }
  };

  const handleComment = async (postId: string) => {
    const response = await fetch(`/api/social/posts/${postId}/comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: commentText }),
    });

    if (response.ok) {
      const newComment: Comment = {
        id: `comment${Date.now()}`,
        author: session?.user as any,
        content: commentText,
        timestamp: new Date(),
      };
      setPosts(
        posts.map((p) => {
          if (p.id === postId) {
            return { ...p, comments: [...p.comments, newComment] };
          }
          return p;
        })
      );
      setCommentText('');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Social Feed</h1>
        {session && <CreateSocialPost />}
        <div className="space-y-8">
          {posts.map((post: SocialPost) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <Link href={`/users/${post.author.id}`}>
                    <div className="font-semibold cursor-pointer hover:text-brand-primary">{post.author.name}</div>
                  </Link>
                  <div className="text-sm text-gray-500">{new Date(post.timestamp).toLocaleString()}</div>
                </div>
              </div>
              <p className="text-gray-800 mb-4">{post.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <button onClick={() => handleLike(post.id)} className="flex items-center">
                    {post.likes.some((l) => l.userId === session?.user?.id) ? (
                      <AiFillHeart className="text-red-500 mr-2" size={20} />
                    ) : (
                      <AiOutlineHeart className="mr-2" size={20} />
                    )}
                    {post.likes.length} Likes
                  </button>
                </div>
                <span>{post.comments.length} Comments</span>
              </div>
              <div>
                {post.comments.map((comment) => (
                  <div key={comment.id} className="flex items-start mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                    <div>
                      <span className="font-semibold">{comment.author.name}</span>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  </div>
                ))}
                {session && (
                  <div className="mt-4">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Write a comment..."
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={1}
                    ></textarea>
                    <button
                      onClick={() => handleComment(post.id)}
                      className="w-full mt-2 p-2 text-white bg-brand-primary rounded-md"
                    >
                      Comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialFeedPage;