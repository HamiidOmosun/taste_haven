import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import React, { useContext } from 'react'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="
              py-4 border-t border-b text-gray-700
              grid grid-cols-1 gap-4 items-center
              md:grid-cols-3
            "
          >
            {/* LEFT COLUMN */}
            <div className="flex items-start gap-6 text-sm md:col-span-1">
              <img className="w-16" src={item.image[0]} alt={item.name} />

              <div>
                <p className="sm:text-base font-medium">{item.name}</p>

                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">{currency} {item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size : M</p>
                </div>

                <p className="mt-2">
                  Date: <span className="text-gray-400">25, July 2025</span>
                </p>
              </div>
            </div>

            {/* CENTER COLUMN — perfectly centered */}
            <div className="flex justify-center md:col-span-1">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm sm:text-base">Ready to ship</span>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex justify-end md:col-span-1">
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                TRACK ORDER
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
