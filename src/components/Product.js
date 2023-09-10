import React, { useContext } from 'react';
import {BsPlus,BsEyeFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { cartContext } from './../contexts/CartContext';

const Product = ({product}) => {
  
  const {id, image,category,title,price}= product
  const {addToCart}=useContext(cartContext)

  return <div>

    <div className='border border-[#e4e4e4] h-[300px] mb-4
   relative overflow-hidden group transition ca'>
    <div className='w-full h-full flex justify-center items-center'>
      {/* image */}
      <div className=' w-[200px] max-auto flex justify-center items-center'>
        <img src={image} className='max-h-[160px] group-hover:scale-110 transition duration-300' alt="product-image"/>
      </div>

    </div>
    
    <div>
  {/* Buttona */}
  <div className='absolute top-6 -right-12 p-2 flex 
  flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300 '>
    <button onClick={()=>{addToCart(id,product)}}>
      <div className='text-white  bg-red-500 flex justify-center items-center
       w-10 h-11'>
        <BsPlus className="text-2xl "/>
      </div>
    </button>
    <Link to={`/Product/${id}`} className='bg-white flex justify-center
       items-center w-10 h-10 text-primary drop-shadow-xl'>
        <BsEyeFill/>
      </Link>
  </div>
    </div>
  </div>

  {/* category-title-price */}
    <div>
      <div className=' text-sm capitalize tex-gray-500 mb-1'>
          {category}
      </div>

      <Link to={`/Product/${id}`} className='font-semibold mb-1'>
        {title}
      </Link>
      
      <div className='font-semibold'>
        $ {price}
      </div>
    </div>
  </div>
};

export default Product;
