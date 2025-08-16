import React from 'react'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'


const Feed = () => {
  return (
    <div className="feed">
        <div className='card'>
          <img src={thumbnail1} alt="" />
          <h2>Best channel to learn coding that help you to be a web devloper</h2>
          <h3>greatstack</h3>
          <p>15k views &; 2 day ago</p>
        </div>
    </div>

  )
}

export default Feed