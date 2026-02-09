
import React from 'react';
import Section from './Section';
import { AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

const educationData = [
  {
    icon: <GlobeAltIcon className="h-8 w-8 text-[#b8954b]" />,
    institution: 'Groupe EDH - France',
    degree: 'Exchange Student(Major in Fashion Communication)',
    period: '2025',
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-[#b8954b]" />,
    institution: 'Handong Global University - Korea',
    degree: 'Dual Major in Media & Communication / Economics',
    period: '2020 - 2026',
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-[#b8954b]" />,
    institution: 'Shalom Christian Academy (SCA) - PA, USA',
    degree: 'High School Graduation',
    period: '2016 - 2019',
  },
];

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6 text-left p-6 bg-[#E5E4E2] rounded-lg shadow-md">
            <div className="flex-shrink-0">{edu.icon}</div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-[#b8954b]">{edu.institution}</h3>
              <p className="text-lg text-[#8c7851] mt-1">{edu.degree}</p>
              <p className="text-md text-gray-500 mt-2">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
