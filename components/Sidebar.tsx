
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'My Skill' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#E5E4E2] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#b8954b] mb-12">Index</h2>
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={item.href} className="mb-6">
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="text-lg text-[#8c7851] hover:text-[#b8954b] transition-colors duration-300"
                    style={{ animation: `fadeInUp 0.5s ease ${index * 0.1 + 0.3}s both` }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          aria-hidden="true"
        ></div>
      )}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
