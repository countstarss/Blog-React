import React from 'react'
import { Link } from 'react-router-dom'
import me from "../img/me.png"



const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="box">
        <div className="logo">
          <img src={me} alt="" />
        </div>
        <div className="links">
          <Link to="/?cat=?" className='link'><h6>ART</h6></Link>
          <Link to="/?cat=?" className='link'><h6>SCIENCE</h6></Link>
          <Link to="/?cat=?" className='link'><h6>TECHOLOGY</h6></Link>
          <Link to="/?cat=?" className='link'><h6>CINEMA</h6></Link>
          <Link to="/?cat=?" className='link'><h6>DESIGN</h6></Link>
          <Link to="/?cat=?" className='link'><h6>FOOD</h6></Link>
          <span className='name'>John</span>
          <span className='logout'>Logout</span>
          <Link to="/write"><span className='write'>write</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar