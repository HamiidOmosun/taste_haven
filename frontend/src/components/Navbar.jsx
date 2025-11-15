import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const textColorClass = isHome ? 'text-white' : 'text-black';
  const iconFilterClass = isHome ? 'invert' : '';

  // NavItem component
  const NavItem = ({ to, label, end = false }) => (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <div className="flex flex-col items-center gap-1">
          {/* Text: active OR hover turns orange */}
          <p
            className={`font-semibold transition-colors
              ${isActive ? 'text-orange-500' : textColorClass} 
              hover:text-orange-500
            `}
          >
            {label}
          </p>

          {/* Dot: ONLY visible on active page */}
          {isActive && <span className="block w-2 h-2 bg-orange-500 rounded-full"></span>}
        </div>
      )}
    </NavLink>
  );

  return (
    <header className={`flex items-center justify-between py-5 font-medium px-5 ${textColorClass}`}>
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-32" alt="logo" />
      </Link>

      {/* Desktop nav links */}
      <nav>
        <ul className="hidden sm:flex gap-5 text-sm">
          <li><NavItem to="/" label="Home" end /></li>
          <li><NavItem to="/menu" label="Menu" /></li>
          <li><NavItem to="/about" label="About" /></li>
          <li><NavItem to="/contact" label="Contact" /></li>
          <li><NavItem to="/reservations" label="Reservations" /></li>
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-6">


        {/* book a table button */}
        <Link to="/cart" className="relative">
          <button className='px-6 py-3 border border-amber-600  text-amber-600 text-sm hover:bg-amber-600 hover:text-white cursor-pointer'>
            Book a Table
          </button>
        </Link>

        {/* Mobile menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className={`w-5 cursor-pointer sm:hidden ${iconFilterClass}`}
          alt="menu"
        />
      </div>

      {/* Mobile sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="back" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/collection">Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/about">About</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/contact">Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
