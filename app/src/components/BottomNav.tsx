import React from 'react';
import { AiFillHome, AiOutlineSave, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-white shadow-lg">
      <div className="flex justify-around max-w-screen-md mx-auto">
        <a href="/" className="flex flex-col items-center justify-center p-2 text-brand-primary">
          <AiFillHome size={24} />
          <span className="text-xs">Home</span>
        </a>
        <a href="/saved" className="flex flex-col items-center justify-center p-2 text-gray-500">
          <AiOutlineSave size={24} />
          <span className="text-xs">Saved</span>
        </a>
        <a href="/tutors" className="flex flex-col items-center justify-center p-2 text-gray-500">
          <AiOutlineMessage size={24} />
          <span className="text-xs">Tutors</span>
        </a>
        <a href="/profile" className="flex flex-col items-center justify-center p-2 text-gray-500">
          <AiOutlineUser size={24} />
          <span className="text-xs">Profile</span>
        </a>
      </div>
    </div>
  );
};

export default BottomNav;