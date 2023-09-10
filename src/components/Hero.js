import React from 'react';
import { Link } from 'react-router-dom';
import WomanImg from '../img/woman_hero.png';

const Hero = () => {
  return <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center  py-24'>
        
        <div className='container mx-auto flex justify-around h-full'>
          {/* text */}
          <div className='flex flex-col justify-center'>
             <div className='flex items-center font-semibold uppercase'>
                <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
                New Trend
             </div>

            <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
              AUTUMN SALE STYLISH <br/>
              <span className='font-semibold'> WOMENS</span>
            </h1>
            <Link to={"/"} className="self-start uppercase font-semibold border-b-2 border-primary">
            Discover More
            </Link>

          </div>

          {/* image */}
          <div>
            <img src={WomanImg} alt='' className='hidden lg:block'/>
          </div>
        </div>
        </section>;
};

export default Hero;