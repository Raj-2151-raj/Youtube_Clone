
import React from 'react'
import home from '../assets/home.png'
import Sidebar from "../Components/Sidebar";


const Home = ({sidebar}) => {
  return (
    <div>
      <Sidebar  sidebar = {sidebar}/>
      <div className= {`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </div>
  )
}

export default Home