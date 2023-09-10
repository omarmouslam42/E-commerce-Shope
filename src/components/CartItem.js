import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { cartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const {id,image,price,title,amount}=item;

  const{removeFromCart,newCart ,increaseCart,decreaseAmount}=useContext(cartContext)
  // console.log(item);

  return <div className='flex gap-x-4 border-b py-2 w-full font-light'>
     <div className='w-full min-h-[150px] flex items-start gap-x-4'>
      <Link to={`/Product/${id}`}>
      <img src={image} alt='productImage' className='max-w-[80px]' />
      </Link>
      
     <div className='flex w-full flex-col'>

      <div className=' flex justify-between mb-2'>
          <Link to={`/Product/${id}` } className="text-sm font-medium uppercase max-w-[240px]
          text-primary hover:underline">
            {title}
          </Link>
          
          <div >
            <IoMdClose onClick={()=>{removeFromCart(id)}} className='cursor-pointer hover:text-red-500 transition-all'/>
          </div>
      </div>

      <div className='flex gap-x-2 h-[36px] text-sm'>

          <div className='flex gap-x-3 border'>
            <div onClick={()=>decreaseAmount(id)} className='border-r h-full flex justify-center items-center px-2 cursor-pointer'>
              <IoMdRemove/>
            </div>
            <div className=' flex justify-center items-center ' >{amount}</div>
            <div  onClick={()=>increaseCart(id)} className='border-l h-full  flex justify-center items-center  cursor-pointer  px-2'>
              <IoMdAdd/>
            </div>
          </div>

      <div  className='flex-1 flex items-center justify-around '> ${price} </div>
      <div className='flex-1 flex items-center justify-end text-primary font-medium'>  ${parseFloat(price * amount).toFixed(2)} </div>
      </div>

     </div>
     </div>
    </div>;
};

export default CartItem;
