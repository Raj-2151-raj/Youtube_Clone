import React, { useState, useEffect } from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";
import { API_KEY } from "../data";

// Dummy comments
const initialComments = [
  { id: 1, user: "Jack Nicholson", time: "1 day ago", text: "Awesome explanation 👌", likes: 244 },
  { id: 2, user: "Emma Watson", time: "2 days ago", text: "This tutorial was so easy to follow!", likes: 120 },
  { id: 3, user: "Robert Downey Jr.", time: "3 days ago", text: "🔥🔥🔥", likes: 300 },
];

const PlayVideo = ({ videoId }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [apiData, setApiData] = useState(null);

  // ✅ Fetch video data
  useEffect(() => {
    const fetchVideoData = async () => {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const res = await fetch(videoDetails_url);
      const data = await res.json();
      console.log("Video API Data:", data.items[0]);
      setApiData(data.items[0]);
    };
    fetchVideoData();
  }, [videoId]);

  // ✅ Add new comment
  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const comment = {
      id: comments.length + 1,
      user: "You",
      time: "Just now",
      text: newComment,
      likes: 0,
    };
    setComments([comment, ...comments]); // नवीन वर append होईल
    setNewComment("");
  };

  return (
    <div className="w-[900px] ml-4 mt-4">
      {/* ✅ YouTube Video */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-2xl w-full h-[500px]"
      ></iframe>

      {/* ✅ Video Info from API */}
      {apiData && (
        <div className="mt-3">
          <h2 className="text-xl font-semibold">{apiData.snippet.title}</h2>
          <p className="text-sm text-gray-600">
            {apiData.snippet.channelTitle} • {apiData.statistics.viewCount} views
          </p>
          <p className="text-sm text-gray-500">
            👍 {apiData.statistics.likeCount} • 💬 {apiData.statistics.commentCount}
          </p>
        </div>
      )}

      {/* ✅ Like / Dislike / Share / Save */}
      <div className="flex items-center gap-4 my-3">
        <img src={like} alt="like" className="w-6 cursor-pointer" />
        <img src={dislike} alt="dislike" className="w-6 cursor-pointer" />
        <img src={share} alt="share" className="w-6 cursor-pointer" />
        <img src={save} alt="save" className="w-6 cursor-pointer" />
      </div>

      {/* ✅ Comment Input */}
      <div className="flex items-center gap-3 my-4">
        <img src={user_profile} alt="profile" className="w-10 h-10 rounded-full" />
        <input
          type="text"
          placeholder="Add a public comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black p-2"
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Comment
        </button>
      </div>

      {/* ✅ Render Comments */}
      <div className="mt-5">
        <h3 className="font-semibold mb-3">{comments.length} Comments</h3>
        {comments.map((c) => (
          <div key={c.id} className="flex items-start gap-3 mb-4">
            <img src={jack} alt={c.user} className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">
                {c.user} <span className="text-xs text-gray-500">{c.time}</span>
              </p>
              <p className="text-gray-800">{c.text}</p>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                <span>👍 {c.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
