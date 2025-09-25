import React from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface NavCardProps {
  icon: IconType;
  title: string;
  href: string;
  color: string;
}

const NavCard: React.FC<NavCardProps> = ({ icon: Icon, title, href, color }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center justify-center p-4 bg-brand-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
        <div className={`p-3 rounded-lg`} style={{ backgroundColor: color }}>
          <Icon size={24} className="text-white" />
        </div>
        <span className="mt-2 text-sm text-center">{title}</span>
      </div>
    </Link>
  );
};

export default NavCard;