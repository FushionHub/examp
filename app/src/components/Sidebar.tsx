import React from 'react';
import { AiOutlineHome, AiOutlineKey, AiOutlineFileText, AiOutlineBarChart, AiOutlineMail, AiOutlineStar, AiOutlineInfoCircle, AiOutlineFileProtect } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="w-64 bg-brand-white h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Exam Pilot</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-4"><a href="/" className="flex items-center"><AiOutlineHome className="mr-2" /> Home</a></li>
          <li className="mb-4"><a href="/account" className="flex items-center"><AiOutlineKey className="mr-2" /> Account</a></li>
          <li className="mb-4"><a href="/results" className="flex items-center"><AiOutlineFileText className="mr-2" /> Saved Results</a></li>
          <li className="mb-4"><a href="/performance" className="flex items-center"><AiOutlineBarChart className="mr-2" /> Performance</a></li>
          <li className="mb-4"><a href="/forum" className="flex items-center"><AiOutlineMail className="mr-2" /> Join Forum</a></li>
          <li className="mb-4"><a href="/rate-us" className="flex items-center"><AiOutlineStar className="mr-2" /> Rate Us</a></li>
          <li className="mb-4"><a href="/bookmarks" className="flex items-center"><AiOutlineStar className="mr-2" /> Bookmarks</a></li>
          <li className="mb-4"><a href="/about" className="flex items-center"><AiOutlineInfoCircle className="mr-2" /> About Us</a></li>
          <li className="mb-4"><a href="/terms" className="flex items-center"><AiOutlineFileProtect className="mr-2" /> Terms & Conditions</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;