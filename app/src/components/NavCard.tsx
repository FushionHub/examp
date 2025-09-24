import React from 'react';
import { IconType } from 'react-icons';

interface NavCardProps {
  icon: IconType;
  title: string;
  href: string;
  color: string;
}

const NavCard: React.FC<NavCardProps> = ({ icon: Icon, title, href, color }) => {
  return (
    <a href={href} className="flex flex-col items-center justify-center p-4 bg-brand-white rounded-lg shadow-md">
      <div className={`p-3 rounded-lg`} style={{ backgroundColor: color }}>
        <Icon size={24} className="text-white" />
      </div>
      <span className="mt-2 text-sm text-center">{title}</span>
    </a>
  );
};

export default NavCard;