import React from 'react';
import Link from 'next/link';
import { AiFillHome, AiOutlineSave, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-white shadow-lg">
      <div className="flex justify-around max-w-screen-md mx-auto">
        <Link href="/">
          <div className="flex flex-col items-center justify-center p-2 text-brand-primary cursor-pointer">
            <AiFillHome size={24} />
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <Link href="/saved">
          <div className="flex flex-col items-center justify-center p-2 text-gray-500 cursor-pointer">
            <AiOutlineSave size={24} />
            <span className="text-xs">Saved</span>
          </div>
        </Link>
        <Link href="/tutors">
          <div className="flex flex-col items-center justify-center p-2 text-gray-500 cursor-pointer">
            <AiOutlineMessage size={24} />
            <span className="text-xs">Tutors</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col items-center justify-center p-2 text-gray-500 cursor-pointer">
            <AiOutlineUser size={24} />
            <span className="text-xs">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;