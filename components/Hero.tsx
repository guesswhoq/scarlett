
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen w-full flex flex-col justify-center items-center text-center p-4 bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
       <div className="bg-[#f4f1eb] bg-opacity-70 p-10 rounded-lg shadow-xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#b8954b] tracking-wider">
            Hyemin Kim | Scarlett 
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[#8c7851] tracking-wide">
            Turning Taste into Choice
        </p>
       </div>
    </section>
  );
};

export default Hero;
