import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiOutlineBars,AiFillCloseCircle} from 'react-icons/ai';
import { Link } from 'react-scroll';
import './head.css'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  // const links = [
  //   {
  //     id: 1,
  //     link: 'Home',
  //   },
  //   {
  //     id: 2,
  //     link: 'Project',
  //   },
  //   {
  //     id: 3,
  //     link: 'About Us',
  //   },
  //   {
  //     id: 4,
  //     link: 'contact Us',
  //   },
  // ];

  const handleLogoClick = () => {
    setNav(false);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (

    
    <div className="navbar flex justify-between items-center w-full h-20 px-4  text-white bg-black fixed stick">
      <input type="checkbox" name='' id='check'/>
      
    <div className='container'>
      <label htmlFor="check">
        <span className='ai' id='times'> <AiFillCloseCircle/></span>
        <span className='fas fa-bars' id='bars'><AiOutlineBars/></span>

      </label>
      
      <div className='head'>Menu</div>
      <ol>
        <li><a href="">Home</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Contact us</a></li>
     

      </ol>
    </div>
      <div>
        
        <Link onClick={handleLogoClick} to='home' className="text-5xl font-serif px-3  font-bold">
          <img className='log' src='./image/log1.png'/>
        </Link>
      </div>



      {/* <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium 
            text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center
          absolute top-0 left-0 w-full h-screen bg-gradient-to-b
          from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul> */}
      {/* )} */}
    </div>
  );
};

export default Navbar;