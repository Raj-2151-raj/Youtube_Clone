import React, { useState } from 'react'
import Sidebar from "../Components/Sidebar";
import Feed from '../Components/feed';

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div
        className={`transition-all duration-300 ${
          sidebar ? "ml-[15%] w-[85%]" : "ml-[5%] w-[95%]"
        }`}
      >
        <Feed category={category} />
      </div>
    </div>
  )
}

export default Home
