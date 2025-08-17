import React from 'react'
import Sidebar from "../Components/Sidebar";
import Feed from '../Components/feed';

const Home = ({ sidebar }) => {
  return (
    <div>
  <Sidebar sidebar={sidebar} />
  <div
    className={`transition-all duration-300 ${
      sidebar ? "ml-[15%] w-[85%]" : "ml-[5%] w-[95%]"
    }`}
  >
    <Feed />
  </div>
</div>

  )
}

export default Home
