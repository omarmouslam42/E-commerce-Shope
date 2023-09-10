import React, { useContext, useEffect, useState } from 'react';
import { sideBarContext } from '../contexts/SidebarContext.js';
import { cartContext } from '../contexts/CartContext.js';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo  from '../img/logo.svg';

const Header = () => {
  const{setIsOpen,isOpen}= useContext(sideBarContext)
  const{itemAmout}= useContext(cartContext)
  const[isActive,setIsActive]= useState(false)

    // event listner
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
          window.scrollY > 60 ? setIsActive(true):setIsActive(false)
        });
    })

    
  return <section className={`${isActive?`bg-white py-4 shadow-md `:`bg-none  py-6`} 
  fixed w-full transition-all z-10 `}>
  <div className='flex justify-between items-center container h-full mx-auto'>
    <Link to={'/'}>
    <img src={Logo} alt='headerCover' className='w-[40px]'/>
    </Link>

    <div onClick={()=>{setIsOpen(!isOpen)}} className='cursor-pointer flex relative text-xl'>
      <BsBag/>

      <div className=' bg-red-700 text-white rounded-full text-[12px]
       w-[18px] h-[18px] flex justify-center items-center absolute -right-2
        -bottom-2'>
        {itemAmout}
      </div>
      </div>
  </div>

  </section>;
};

export default Header;
