// src/Pages/VideoPage.jsx
import { useParams } from "react-router-dom";

export default function VideoPage() {
  const { categoryId, videoId } = useParams();

  return (
    <div>
      <h1>Video Page</h1>
      <p>Category ID: {categoryId}</p>
      <p>Video ID: {videoId}</p>
    </div>
  );
}
