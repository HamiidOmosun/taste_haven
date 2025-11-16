import assets from '../assets/assets'
import React from 'react'

const MenuPreview = () => {
  return (
    <div className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${assets.f_img2})` }}>
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      <div className="relative z-10 h-full flex flex-col items-center">

      </div>
    </div>
  )
}

export default MenuPreview