import React from "react";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";

const PlayVideo = () => {
  return (
    <div className="w-[900px] ml-4 mt-4">
      {/* Video */}
      <video
        className="rounded-2xl w-full"
        src={video1}
        controls
        autoPlay
        muted
      ></video>

      {/* Title */}
      <h3 className="font-bold text-lg mt-3">
        Best YouTube Channel To Learn Web Development
      </h3>

      {/* Views + Actions */}
      <div className="flex items-center justify-between mt-2 text-gray-600 text-sm">
        <p>1525 Views • 2 days ago</p>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 cursor-pointer">
            <img src={like} alt="like" className="w-5" /> 125
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            <img src={dislike} alt="dislike" className="w-5" /> 2
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            <img src={share} alt="share" className="w-5" /> Share
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            <img src={save} alt="save" className="w-5" /> Save
          </span>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Channel Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={jack} alt="channel" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-bold">GreaStack</p>
            <span className="text-gray-600 text-sm">1M Subscribers</span>
          </div>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PlayVideo;
