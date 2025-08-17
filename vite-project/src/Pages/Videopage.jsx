// src/Pages/VideoPage.jsx
import { useParams } from "react-router-dom";
import PlayVideo from "../Components/PlayVideo";

export default function VideoPage() {
  const { categoryId, videoId, extra } = useParams();


  return (
    <div>
      <PlayVideo />
    </div>
  );
}
