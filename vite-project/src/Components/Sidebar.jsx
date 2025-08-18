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

const categories = [
  { ytId: "", name: "Home", icon: home },
  { ytId: "20", name: "Gaming", icon: game_icon },
  { ytId: "2", name: "Automobiles", icon: automobiles },
  { ytId: "17", name: "Sports", icon: sports },
  { ytId: "24", name: "Entertainment", icon: entertainment },
  { ytId: "28", name: "Tech", icon: tech },
  { ytId: "10", name: "Music", icon: music },
  { ytId: "22", name: "Blogs", icon: blogs },
  { ytId: "25", name: "News", icon: news },
];

const subscribed = [
  { icon: jack, label: "PewDiePie" },
  { icon: simon, label: "MrBeast" },
  { icon: tom, label: "Justin Bieber" },
  { icon: megan, label: "5-Minute Crafts" },
  { icon: cameron, label: "Nas Daily" },
];

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div  
      className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 
      ${sidebar ? "w-[15%] pl-[2%]" : "w-[5%] pl-[1%]"} pt-[60px]`}
    >
      {/* Menu items */}
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="flex items-center mb-[20px] w-fit cursor-pointer p-1 rounded-md"
          onClick={() => setCategory(cat.ytId)} // फक्त ID पास करा
        >
          <div className="flex flex-col items-center">
            <img className="w-5" src={cat.icon} alt={cat.name} />
            {/* underline फक्त active असताना */}
            {category === cat.ytId && (
              <div className="w-5 border-b-[3px] border-red-600 mt-1"></div>
            )}
          </div>

          <p
            className={`transition-all duration-300 overflow-hidden ml-2
              ${sidebar ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
          >
            {cat.name}
          </p>
        </div>
      ))}

      <hr
        className={`border-0 h-px bg-gray-700 my-4 transition-all duration-300
        ${sidebar ? "w-[160px] opacity-100 ml-2" : "w-[30px] opacity-50 ml-0"}`}
      />

      {/* Subscribed */}
      <div className="text-[13px] my-[20px] text-[#5a5a5a]">
        <h3 className={`transition-all duration-300 mb-4
          ${sidebar ? "opacity-100 max-w-[200px] ml-2" : "opacity-0 max-w-0 ml-0"}`}>
          Subscribed
        </h3>

        {subscribed.map((sub, idx) => (
          <div key={idx} className="flex items-center mb-[20px] cursor-pointer overflow-hidden">
            <img className="w-5 mr-2 rounded-full flex-shrink-0" src={sub.icon} alt={sub.label} />
            <span className={`transition-all duration-300 whitespace-nowrap 
              ${sidebar ? "opacity-100 max-w-[200px] ml-2" : "opacity-0 max-w-0 ml-0"}`}>
              {sub.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
