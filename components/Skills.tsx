
import React from 'react';
import Section from './Section';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiCanva } from 'react-icons/si';
import { FaBullhorn, FaPenFancy, FaLanguage, FaBookOpen, FaGlobe, FaUsers, FaFileExcel, FaTable, FaFilePowerpoint } from 'react-icons/fa';

const skillCategories = [
    {
        name: 'Branding',
        skills: [
            { icon: <FaPenFancy size={48} />, name: '콘텐츠 기획/제작' },
            { icon: <FaBullhorn size={48} />, name: 'PR' },
            { icon: <FaBookOpen size={48} />, name: '스토리텔링' },
            { icon: <FaGlobe size={48} />, name: '글로벌 커뮤니케이션' },
        ]
    },
    {
        name: 'Communication',
        skills: [
            { icon: <FaLanguage size={48} />, name: '비즈니스 영어' },
            { icon: <FaFilePowerpoint size={48} />, name: '프레젠테이션' },
            { icon: <FaUsers size={48} />, name: '고객 중심 사고' },
        ]
    },
    {
        name: 'Creativity',
        skills: [
            { icon: <SiAdobephotoshop size={48} />, name: 'Photoshop' },
            { icon: <SiAdobeillustrator size={48} />, name: 'Illustrator' },
            { icon: <SiAdobepremierepro size={48} />, name: 'Premiere Pro' },
            { icon: <SiCanva size={48} />, name: 'Canva' },
        ]
    },
    {
        name: 'Data Analysis',
        skills: [
            { icon: <FaFileExcel size={48} />, name: 'MS Excel' },
            { icon: <FaTable size={48} />, name: 'Google Spreadsheets' },
        ]
    }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skill">
      <div className="space-y-12">
        {skillCategories.map(category => (
            <div key={category.name}>
                <h3 className="text-3xl font-semibold text-[#b8954b] mb-8 relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-0.5 after:bg-[#b8954b] after:rounded-full">{category.name}</h3>
                 <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 space-y-3 transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-32"
                      >
                        <div className="text-[#b8954b]">{skill.icon}</div>
                        <p className="text-sm md:text-base text-center text-[#8c7851] font-semibold">{skill.name}</p>
                      </div>
                    ))}
                 </div>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
