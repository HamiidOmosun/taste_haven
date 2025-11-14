import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}

        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          if (!productData) return null; // skip if product not found

          return (
            <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={Array.isArray(productData.image) ? productData.image[0] : productData.image} alt={productData.name} />
                <div>
                  <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex itmes-center gap-5 mt-2'>
                    <p className='text-sm text-gray-500'>Size: {item.size}</p>
                    <p className='text-sm text-gray-500'>Quantity: {item.quantity}</p>
                    <p className='text-sm font-medium'>{currency}{productData.price * item.quantity}</p>
                  </div>
                </div>
              </div>
              <input
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => updateQuantity(item._id, item.size, parseInt(e.target.value))}
              />
               <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className='w-4 mr-4 sm:w-5 cursor-pointer'
                  src={assets.bin_icon}
                  alt="Delete"
                />
            </div>
          );
        })}
      </div>

      <div className='flex justify-end my-20'>
          <div className='w-full sm:-[450px]'>
            <CartTotal/>
            <div className='w-full text-end'>
              <button onClick={()=>navigate('/orders')} className='bg-black text-white text-sm my-8 py-3 px-8 cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
