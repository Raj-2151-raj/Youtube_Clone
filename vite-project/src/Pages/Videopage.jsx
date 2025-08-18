// src/Pages/VideoPage.jsx
import { useParams } from "react-router-dom";
import PlayVideo from "../Components/PlayVideo";
import Recommended from "../Components/recommended";

export default function VideoPage() {
  const { videoId, categoryId } = useParams();

  return (
    <div className="flex gap-5 px-6 py-4">
      {/* Left Side - Main Video */}
      <div className="flex-[2]">
        {/* ✅ videoId prop Pass */}
        <PlayVideo videoId={videoId} />
      </div>

      {/* Right Side - Recommended */}
      <div className="flex-[1]">
        <Recommended categoryId={categoryId} />
      </div>
    </div>
  );
}
