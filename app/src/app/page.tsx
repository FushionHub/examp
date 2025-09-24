import React from 'react';
import BottomNav from '@/components/BottomNav';
import NavCard from '@/components/NavCard';
import { AiOutlineMenu, AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { FiGrid, FiBookOpen, FiClipboard, FiAward } from 'react-icons/fi';

const TopBar = () => (
  <div className="flex justify-between items-center p-4">
    <AiOutlineMenu size={24} />
    <div className="flex items-center">
      <button className="bg-brand-secondary text-white px-4 py-2 rounded-full text-sm">Activate</button>
      <AiOutlineBell size={24} className="ml-4" />
    </div>
  </div>
);

const MainIllustration = () => (
  <div className="my-8">
    <img src="https://i.imgur.com/5uG4b5f.png" alt="Students studying" className="w-full max-w-sm mx-auto" />
  </div>
);

const SearchBar = () => (
  <div className="relative mb-8">
    <input
      type="text"
      placeholder="Search for subject & topic"
      className="w-full p-4 rounded-full border border-gray-300"
    />
    <AiOutlineSearch size={24} className="absolute right-4 top-4 text-gray-400" />
  </div>
);

const HomePage = () => {
  return (
    <div className="pb-20">
      <TopBar />
      <div className="p-4">
        <MainIllustration />
        <SearchBar />
        <h2 className="text-xl font-bold mb-4">Recent Practice</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <NavCard icon={FiGrid} title="UTME/JAMB Practice" href="/cbt" color="#4CAF50" />
          <NavCard icon={FiBookOpen} title="Literature Questions" href="/cbt" color="#F44336" />
          <NavCard icon={FiClipboard} title="UTME Syllabus" href="/syllabus" color="#FFC107" />
        </div>
        <h2 className="text-xl font-bold mb-4">Study Materials</h2>
        <div className="grid grid-cols-3 gap-4">
          <NavCard icon={FiBookOpen} title="UTME Materials" href="/materials" color="#FF9800" />
          <NavCard icon={FiAward} title="The Life Changer" href="/materials" color="#03A9F4" />
          <NavCard icon={FiBookOpen} title="Literature Materials" href="/materials" color="#E91E63" />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;