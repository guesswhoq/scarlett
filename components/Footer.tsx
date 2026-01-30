
import React from 'react';
import { SiInstagram } from 'react-icons/si';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';


const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#E5E4E2] py-12 px-4 text-center">
        <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-[#b8954b] mb-4">Contact</h3>
            <p className="text-[#8c7851] mb-6">함께 성장할 기회를 기다립니다. 언제든지 편하게 연락주세요.</p>
            <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mb-8">
                <a href="mailto:Kims.hyemins0722@gmail.com" className="flex items-center gap-2 text-[#8c7851] hover:text-[#b8954b] transition-colors">
                    <EnvelopeIcon className="h-6 w-6" />
                    <span>Kims.hyemins0722@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-[#8c7851]">
                     <PhoneIcon className="h-6 w-6" />
                     <span>010-6309-0722</span>
                </div>
                <a href="https://www.instagram.com/dessert_o5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#8c7851] hover:text-[#b8954b] transition-colors">
                    <SiInstagram size={24} />
                    <span>dessert_o5</span>
                </a>
            </div>
            <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Hyemin (Scarlett) Kim. All Rights Reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
