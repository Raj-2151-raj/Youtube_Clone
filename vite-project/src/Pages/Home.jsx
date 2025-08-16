import React from 'react'
import Sidebar from "../Components/Sidebar";
import Feed from '../Components/feed';

const Home = ({ sidebar }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebar={sidebar} />

      {/* Feed */}
      <div className={`flex-1 p-4 ${sidebar ? "ml-0" : "ml-[80px]"}`}>
        <Feed />
      </div>
    </div>
  )
}

export default Home
