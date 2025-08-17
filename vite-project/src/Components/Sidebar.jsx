import React from 'react'
import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'
import './sidebar.css';

const Sidebar = ({ sidebar }) => {
  return (
    <div  
     className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 
    ${sidebar ? "w-[15%] pl-[2%]" : "w-[5%] pl-[1%]"} pt-[60px]`}
    >
      <div className=''>
        {/* Menu items */}
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img className={`w-5 mr-5 rounded-full ${sidebar ? "" : sidebar}`} src={home} alt="" />
          <p className={`transition-all duration-300 overflow-hidden
            ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"}`}>
            Home
          </p>
        </div>

        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5 rounded-full" src={game_icon} alt="" />
          <p className={`transition-all duration-300 overflow-hidden
            ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"}`}>
            Gaming
          </p>
        </div>

        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5 rounded-full" src={automobiles} alt="" />
          <p className={`transition-all duration-300 overflow-hidden
            ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"}`}>
            Automobiles
          </p>
        </div>

        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5 rounded-full" src={sports} alt="" />
          <p className={`transition-all duration-300 overflow-hidden
            ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"}`}>
            Sports
          </p>
        </div>

        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5 rounded-full" src={entertainment} alt="" />
          <p className={`transition-all duration-300 overflow-hidden
            ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"}`}>
            Entertainment
          </p>
        </div>

     <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
  
  <img className="w-5 mr-5 rounded-full" src={tech} alt="Tech" />

  {/* Menu Text */}
  <p
    className={`transition-all duration-300 overflow-hidden
      ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"} 
      ${!sidebar && "hidden sm:inline-block"} // sm वर open नसेल तर hide
    `}
  >
    Tech
  </p>
</div>

        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5 rounded-full" src={music} alt="" />
          <p className={`transition-all duration-300 overflow-hidden
            ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"}`}>
            Music
          </p>
        </div>

        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5 rounded-full" src={blogs} alt="" />
          <p className={`transition-all duration-300 overflow-hidden
            ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"}`}>
            Blogs
          </p>
        </div>

        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5 rounded-full" src={news} alt="" />
          <p className={`transition-all duration-300 overflow-hidden
            ${sidebar ? "opacity-100 ml-2 w-auto" : "opacity-0 ml-0 w-0"}`}>
            News
          </p>
        </div>

         <hr
         className={`border-0 h-px bg-gray-700 my-4 transition-all duration-300
         ${sidebar ? "w-[160px] opacity-100 ml-2" : "w-[30px] opacity-50 ml-0"}`}/>
       </div>

      {/* Subscribed */}
      <div className="text-[13px] my-[20px] text-[#5a5a5a]">
        <h3 className={`transition-all duration-300 mb-4
        ${sidebar ? "opacity-100 max-w-[200px] ml-2" : "opacity-0 max-w-0 ml-0"}`}>Subscribed</h3>

      <div className="flex items-center mb-[20px] cursor-pointer overflow-hidden">
  <img className="w-5 mr-2 rounded-full" src={jack} alt="" />
  <div className="overflow-hidden">
    <p
      className={`transition-all duration-300 whitespace-nowrap
        ${sidebar ? "opacity-100 max-w-[200px] ml-2" : "opacity-0 max-w-0 ml-0"}`}
    >
      PewDiePie
    </p>
  </div>
</div>


        <div className="flex items-center mb-[20px] cursor-pointer overflow-hidden">
  <img className="w-5 mr-2 rounded-full flex-shrink-0" src={simon} alt="" />
  <span
    className={`transition-all duration-300 whitespace-nowrap 
      ${sidebar ? "opacity-100 max-w-[200px]  ml-2" : "opacity-0 max-w-0 ml-0"}`}
  >
    MrBeast
  </span>
</div>

<div className="flex items-center mb-[20px] cursor-pointer overflow-hidden">
  <img className="w-5 mr-2 rounded-full flex-shrink-0" src={tom} alt="" />
  <span
    className={`transition-all duration-300 whitespace-nowrap 
      ${sidebar ? "opacity-100 max-w-[200px]  ml-2" : "opacity-0 max-w-0 ml-0"}`}
  >
    Justin Bieber
  </span>
</div>

<div className="flex items-center mb-[20px] cursor-pointer overflow-hidden">
  <img className="w-5 mr-2 rounded-full flex-shrink-0" src={megan} alt="" />
  <span
    className={`transition-all duration-300 whitespace-nowrap 
      ${sidebar ? "opacity-100 max-w-[200px]  ml-2" : "opacity-0 max-w-0 ml-0"}`}
  >
    5-Minute Crafts
  </span>
</div>

<div className="flex items-center mb-[20px] cursor-pointer overflow-hidden">
  <img className="w-5 mr-2 rounded-full flex-shrink-0" src={cameron} alt="" />
  <span
    className={`transition-all duration-300 whitespace-nowrap 
      ${sidebar ? "opacity-100 max-w-[200px]  ml-2" : "opacity-0 max-w-0 ml-0"}`}
  >
    Nas Daily
  </span>
</div>

      </div>
    </div>
  )
}

export default Sidebar
