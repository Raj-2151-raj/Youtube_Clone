import React from 'react';
import menu_icon from '../assets/menu.png';
import logo from '../assets/logo.png';
import search_icon from '../assets/search.png';
import upload_icon from '../assets/upload.png';
import more from '../assets/more.png';
import notification from '../assets/notification.png';
import profile from '../assets/jack.png';

const Navbar = ({ setSidebar }) => {
  return (
    <div className="m-0 p-0 box-border font-[Poppins,sans-serif]">
      <nav className="fixed top-0 left-0 w-full h-[60px] bg-white flex items-center justify-between px-4 shadow-md z-50">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            className="cursor-pointer w-6"
            onClick={() => setSidebar(prev => !prev)}
            src={menu_icon}
            alt="Menu"
          />
          <img className="cursor-pointer w-24" src={logo} alt="Logo" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden max-w-xl w-full mx-4">
          <input
            className="flex-1 px-4 py-2 outline-none text-sm"
            type="text"
            placeholder="Search"
          />
          <button className="bg-gray-100 px-4 py-2">
            <img className="w-5" src={search_icon} alt="Search" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <img className="cursor-pointer w-6" src={upload_icon} alt="Upload" />
          <img className="cursor-pointer w-6" src={more} alt="More" />
          <img className="cursor-pointer w-6" src={notification} alt="Notifications" />
          <img className="cursor-pointer w-8 rounded-full" src={profile} alt="Profile" />
        </div>
      </nav>

      {/* spacer div for avoiding content hide behind navbar */}
      <div className="h-[60px]"></div>
    </div>
  );
};

export default Navbar;
