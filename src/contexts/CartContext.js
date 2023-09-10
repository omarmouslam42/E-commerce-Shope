import React, { createContext, useEffect, useState } from 'react';

export const cartContext=createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [itemAmout, setItemAmout] = useState(0);
  const [total, setTotal] = useState(0);
  

  const addToCart= (id,product)=>{
    // console.log({id,product});
    const newItem= {...product , amount: 1}
    const cartItem=cart.find( item=>{
      return item.id === id
    })
    // if cart item is already in the cart
    if (cartItem) {
      const newCart=[...cart].map((item)=>{
        if (item.id === id) {
        return {...item, amount:cartItem.amount + 1}
        }else{
          return item;
        }
      });
      setCart(newCart)
    }else{
      setCart([...cart , newItem])
    }
    // console.log(cart);
  }

  // remove from cart
  const removeFromCart=(id)=>{
    const newCart=cart.filter((item)=>{
      return item.id !== id
    });
    setCart(newCart)
  }

  // increase cart
  const increaseCart=(id)=>{
    // console.log(id);
    const newCart= cart.find(item=> item.id === id);
    addToCart(id,newCart)
  }


  // decreaseAmount
  const decreaseAmount=(id)=>{
    // console.log(id);
    const cartItem= cart.find((item)=>{
      return item.id === id
    })

    if (cartItem) {
      const newCart= cart.map((item)=>{
        if (item.id === id) {
          return {...item, amount: cartItem.amount - 1}
        }else{
          return item;
        }
      });
    setCart(newCart)
    }

    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }
  // update amount 

  useEffect(()=>{
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem)=>{
        // console.log(accumulator);
          return accumulator + currentItem.amount;
      }, 0);
      setItemAmout(amount)
    }
  },[cart])

// total Price State
  useEffect(()=>{
    const totalPayment = cart.reduce((accumulator,currentItem)=>{
      return accumulator + currentItem.price * currentItem.amount 
    },0)
    setTotal(totalPayment)
  })



  return <cartContext.Provider value={{
    decreaseAmount,
    addToCart,
    cart,
    removeFromCart,
    setCart,
    increaseCart,
    itemAmout,
    total
    }}>
    {children}
  </cartContext.Provider>;
};

export default CartProvider;
