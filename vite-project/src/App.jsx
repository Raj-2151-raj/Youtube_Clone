import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import VideoPage from "./Pages/Videopage";
import { useState } from "react";

export default function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <Navbar setSidebar={setSidebar} />

      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<VideoPage />} />
      </Routes>
    </>
  );
}
