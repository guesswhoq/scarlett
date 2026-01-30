
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-8 ${className}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#b8954b] mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-1 after:bg-[#b8954b] after:rounded-full">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
