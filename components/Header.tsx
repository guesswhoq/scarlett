
import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 z-40 p-4">
      <button 
        onClick={onMenuClick} 
        className="p-2 space-y-1.5 group"
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-[#b8954b] transition-transform duration-300 ease-in-out group-hover:bg-[#8c7851]"></span>
        <span className="block w-6 h-0.5 bg-[#b8954b] transition-transform duration-300 ease-in-out group-hover:bg-[#8c7851]"></span>
        <span className="block w-6 h-0.5 bg-[#b8954b] transition-transform duration-300 ease-in-out group-hover:bg-[#8c7851]"></span>
      </button>
    </header>
  );
};

export default Header;
