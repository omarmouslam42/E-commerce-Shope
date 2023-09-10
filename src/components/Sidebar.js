import React, { useContext } from 'react';
import { sideBarContext } from '../contexts/SidebarContext.js';
import { cartContext } from '../contexts/CartContext.js';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {isOpen,setIsOpen,handleClose}=useContext(sideBarContext)
  const {cart,setCart,total,itemAmout}= useContext(cartContext)


  return <div className={`${isOpen? "right-0" :"-right-full" }   
  w-full h-full bg-white fixed top-0 
  shadow-2xl md:w-[35vw] xl:max-w-[30vw] z-20 transition-all
   duration-300 px-4 xl:px-[35px] `}>
    <div className='flex justify-between items-center py-3 border-b '>
      <div className='font-semibold text-sm uppercase'>Shopping Bag ({itemAmout})</div>
      <div onClick={()=>{setIsOpen(false)}} className="cursor-pointer h-8 w-8 felx justify-center items-center">
        <IoMdArrowForward className="text-xl"/>
      </div>
    </div>

    <div className='py-6 '>
      <div className='flex flex-col gap-y-2
     h-[400px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b'>
        {cart?.map((item)=>{
          return <CartItem item={item} key={item.id} />
        })}
      </div>
    </div>

    <div className='flex justify-between items-center'>
      <div className=' uppercase font-semibold '>
        <span className='mr-2'>Total:</span> ${parseFloat(total).toFixed(2)}
      </div>
      <div onClick={()=> setCart([])}  className='bg-red-600 text-white w-10 h-10 flex justify-center items-center text-xl '>
        <FiTrash2 className='cursor-pointer'/>
      </div>
    </div>

        <div className='flex gap-x-2 mt-2'>
        <Link to={'/'} className=' bg-gray-300 flex justify-center 
        items-center w-full font-medium p-4'>
        View Cart
        </Link>
        <Link to={"/"} className='bg-primary text-white font-medium w-full flex justify-center
         items-center 
       '>CheckOut</Link>
        </div>
        

  </div>;
};

export default Sidebar;
