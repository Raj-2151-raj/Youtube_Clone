import React from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { Link } from "react-router-dom";


const videos = [
  { img: thumbnail1, title: "Best channel to learn coding that help you to be a web developer", author: "GreatStack", views: "15k views • 2 days ago" },
  { img: thumbnail2, title: "Learn JavaScript in 1 Hour", author: "GreatStack", views: "20k views • 1 week ago" },
  { img: thumbnail3, title: "React JS Full Course", author: "GreatStack", views: "35k views • 3 weeks ago" },
  { img: thumbnail4, title: "Node.js Crash Course", author: "GreatStack", views: "40k views • 1 month ago" },
  { img: thumbnail5, title: "MongoDB Explained", author: "GreatStack", views: "12k views • 5 days ago" },
  { img: thumbnail6, title: "Tailwind CSS Tutorial", author: "GreatStack", views: "10k views • 1 week ago" },
  { img: thumbnail7, title: "Full MERN Project", author: "GreatStack", views: "50k views • 2 months ago" },
  { img: thumbnail8, title: "Next.js Crash Course", author: "GreatStack", views: "22k views • 3 weeks ago" },
];

const Feed = () => {
  const videoList = [...videos, ...videos, ...videos]; 
  return (
    <div className="feed p-4 grid gap-6 
      sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videoList.map((video, index) => (
  <Link
    to={`/video/programming/${index}`}
    key={index}
    className="card bg-white rounded-xl shadow hover:shadow-lg transition p-2"
  >
    <img src={video.img} alt={video.title} className="rounded-lg w-full" />
    <h2 className="text-sm font-semibold mt-2 line-clamp-2">{video.title}</h2>
    <h3 className="text-gray-600 text-xs">{video.author}</h3>
    <p className="text-gray-500 text-xs">{video.views}</p>
  </Link>
))}
    </div>
  );
};


export default Feed;
