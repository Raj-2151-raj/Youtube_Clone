import React from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";

const videos = [
  { id: 1, img: thumbnail1, title: "Best channel that help you to be a web developer", author: "GreatStack", views: "199K views" },
  { id: 2, img: thumbnail2, title: "Learn React in 2025", author: "CodeWithMe", views: "120K views" },
  { id: 3, img: thumbnail3, title: "JavaScript Crash Course", author: "JS Mastery", views: "500K views" },
  { id: 4, img: thumbnail4, title: "Full TailwindCSS Tutorial", author: "Tailwind Guru", views: "95K views" },
  { id: 5, img: thumbnail5, title: "Frontend Interview Prep", author: "DevTalks", views: "45K views" },
  { id: 6, img: thumbnail6, title: "Backend Development Guide", author: "NodeJS Hub", views: "80K views" },
  { id: 7, img: thumbnail7, title: "Mastering Git & GitHub", author: "CodeMania", views: "60K views" },
  { id: 8, img: thumbnail8, title: "Top 10 VSCode Extensions", author: "Pro Coder", views: "150K views" },
];

const Recommended = () => {
  return (
    <div className="flex-basis-30% justify-between  gap-4 mt-4">
      {videos.map((video) => (
        <div key={video.id} className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <img src={video.img} alt={video.title} className="w-48 rounded-lg" />
          <div className="vid-info">
            <h4 className="font-semibold text-sm">{video.title}</h4>
            <p className="text-gray-600 text-xs">{video.author}</p>
            <p className="text-gray-500 text-xs">{video.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;




// {
//     flex-basis:30%
// }

// {
//     display: flex;
//     jusstify-content: space-between;
//     margin-bottom:8px
// }