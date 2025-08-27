import React from 'react';  
import hero from '../assets/images/hero.png';
import homeBg from '../assets/images/homeBg.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const Navigate = useNavigate();
  return (
    <section id="home" style={{ backgroundImage: `url(${homeBg})` }}
 className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full lg:h-screen overflow-hidden p-6 pt-20">
      <div className="max-w-6xl mt-10 lg:mx-auto text-center lg:text-left">
        <h1 className="text-3xl md:text-6xl font-bold md:text-font-black text-[#a164a4] leading-tight mb-4">WELCOME TO <br /> THE BIG <br />
        <span className="text-white">BANGGG STORE</span>
        </h1>
        <p className="text-white mb-6">Every Headphone you can think of!. <br />Relax you deserve it!</p>
        <button onClick={() => Navigate('./popular')} className="cursor-pointer bg-[#a164a4] text-white font-medium py-2 px-5 rounded-2xl hover:bg-[#a579cc] transition-colors duration-300">
          Shop Now!
        </button>
     </div>
     <div className="relative flex justify-center items-center w-full h-full">
       <img
        src={hero}
        alt="Home-img"
        className="w-3/4 h-auto transition-transform duration-300 ease-in-out hover:-translate-y-2 "
      />
    </div>
    </section>
  );
}

export default Home;