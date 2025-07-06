import React, { useEffect } from 'react';
import { BsBuildings } from "react-icons/bs";
import { VscListSelection } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="sticky top-0 bg-[#040F28] shadow-sm z-50">
      <nav className="flex items-center justify-between md:px-15 px-6 flex-wrap text-white py-7">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="font-extrabold uppercase text-white flex items-center">
            <BsBuildings className="text-[#FD5D14] text-4xl mr-2" />
            {/* <img src="/Logo.png" alt=""  className='w-10 h-10'/> */}
           SAFE LEADERS INNOVATION
          </h1>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <VscListSelection className="w-6 h-6" />
        </button>

        {/* Nav Links */}
        <div
          className={`${
            menuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
          } transition-all duration-500 ease-in-out overflow-hidden w-full lg:flex lg:items-center lg:w-auto lg:opacity-100 lg:max-h-full`}
        >
          <div className="lg:ml-auto flex flex-col lg:flex-row items-start lg:items-center text-white space-y-2 lg:space-y-0 lg:space-x-6 pt-3 lg:pt-0">
            <Link to="/#home"  className="hover:text-[#FD5D14] transition-colors duration-300">
              Home
            </Link>
            <Link to="/#about"  className="hover:text-[#FD5D14] transition-colors duration-300">
              About
            </Link>
            <Link to="/#service"  className="hover:text-[#FD5D14] transition-colors duration-300">
              Service
            </Link>
            <Link to="/#contact"  className="hover:text-[#FD5D14] transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
