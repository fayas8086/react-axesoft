import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { BsChevronDoubleRight } from 'react-icons/bs';
import './Home.css';

function Home() {
  return (
    <div>
      <div className='hero'>
        <div className='content'>
          <div className='number'>
            <div className='number1'>
              <p className='anim desgin fade-in'>53</p>
            </div>
            <div className='number2'>
              <p className='design1 fade-in'>Celebrating Years</p>
            </div>
          </div>

          <div className='icon1 fade-in'>
            <h6 style={{ fontSize: '18px', color: 'rgb(137,149,165)' }}>
              To see our on<br /> going projects
            </h6>
            <p>
              <BsChevronDoubleRight />
            </p>
          </div>

          <div className='icon bounce'>
            <p>
              <AiOutlineDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
