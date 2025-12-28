import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../store';
import { IoCartOutline, IoHeartOutline, IoLogOutOutline, IoMenuSharp } from 'react-icons/io5';
import { LuSearch } from 'react-icons/lu';

export default function Header() {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const makeActive = ({ isActive }) => (
    isActive
      ?
      'text-black font-medium'
      : 'text-[#989898] hover:text-black font-medium transition-colors'
  )

  const logout = () => {
    sessionStorage.removeItem("token")
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <header className='w-full sticky top-0 z-50 flex justify-center border-b border-[#E5E5E5]'>
      <div className="container w-full flex items-center px-1.5 py-4 md:px-4 justify-between relative bg-[rgba(255,255,255,0.8)]">
        {/* ==================== Logo ==================== */}
        <svg onClick={() => { navigate('/'); }} className="cursor-pointer" width="66" height="23" viewBox="0 0 66 23" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1826 16.08C13.1266 17.352 8.016 17.5 6.096 17.5C2.304 17.5 0 15.052 0 11.5C0 7.972 2.328 5.524 6.096 5.524C7.92 5.524 13.1746 6.72 14.2306 7.992L8.832 9.484C8.064 8.644 7.224 8.308 6.096 8.308C4.488 8.308 3.096 9.604 3.096 11.5C3.096 13.564 4.392 14.716 6.096 14.716C7.104 14.716 8.256 14.332 8.88 13.54L14.1826 16.08Z" fill="black" />
          <path d="M28.8035 6.312L21.8195 22.872H18.3875L20.6195 17.712L15.7955 6.312H19.2035L21.6035 12.408L22.2995 14.592L22.9715 12.408L25.3715 6.312H28.8035Z" fill="#989898" />
          <path d="M36.6494 8.856C34.9214 8.856 33.6734 10.176 33.6734 11.976C33.6734 13.752 34.9214 15.072 36.6494 15.072C38.3294 15.072 39.4814 13.824 39.4814 11.976C39.4814 10.104 38.3294 8.856 36.6494 8.856ZM30.6734 17.592V0H33.7214V6.264L33.6734 7.08C34.1774 6.408 35.7134 6.024 36.7694 6.024C40.5374 6.024 42.6495 8.784 42.6495 11.976C42.6495 15.576 40.4894 17.904 36.7694 17.904C35.8574 17.904 34.3934 17.472 33.7934 16.752L33.8174 17.4V17.592H30.6734Z" fill="black" />
          <path d="M55.3377 16.152C54.4497 17.304 52.4098 18 50.6578 18C46.8418 18 44.7058 15.384 44.7058 12C44.7058 8.544 46.8178 6.024 50.5378 6.024C54.2338 6.024 56.3457 8.544 56.3457 12C56.3457 12.384 56.3457 12.624 56.3217 12.96H47.8258C47.9938 14.376 49.0498 15.264 50.6578 15.264C51.8098 15.264 52.8897 14.88 53.5617 14.136L55.3377 16.152ZM47.8738 10.896H53.1537C53.0097 9.624 51.9538 8.76 50.5378 8.76C49.1218 8.76 47.9938 9.624 47.8738 10.896Z" fill="black" />
          <path d="M64.7516 9.144C64.1276 8.928 63.5756 8.856 62.9276 8.856C62.4956 8.856 62.1356 8.88 61.7996 9.024V17.592H58.7036V6.816C59.6396 6.336 61.2476 6 62.8076 6C63.4796 6 64.6796 6.072 65.3996 6.336L64.7516 9.144Z" fill="black" />
        </svg>

        {/* ==================== Search Bar ==================== */}
        <div className="hidden sm:flex items-center bg-[#F5F5F5] rounded-lg px-4 py-3 gap-2 w-full max-w-[372px]">
          <LuSearch className='h-6 w-6 text-[#989898] opacity-75' />
          <input type="text" placeholder="Search" className="bg-transparent outline-none text-[#656565] opacity-50 w-full text-sm font-medium" />
        </div>

        {/* ==================== Navigation ====================*/}
        <nav className="hidden lg:flex items-center gap-[50px]">
          <NavLink to="/" className={`cursor-pointer ${makeActive}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={`cursor-pointer ${makeActive}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={`cursor-pointer ${makeActive}`}>
            Contact Us
          </NavLink>
          <NavLink to="/blog" className={`cursor-pointer ${makeActive}`}>
            Blog
          </NavLink>
        </nav>

        {/* ==================== Icons ==================== */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-6">
            {/* ==================== Favorite Icon */}
            <button className="hover:opacity-75 transition-opacity cursor-pointer">
              <IoHeartOutline className='h-8 w-8' />
            </button>

            {/* ==================== Cart Icon */}
            <button
              className="hover:opacity-75 transition-opacity cursor-pointer relative"
              onClick={() => {
                navigate('/Cart');
              }}
            >
              <IoCartOutline className='h-8 w-8' />
              <div>
                {items.length != 0 && <span className='absolute top-6 right-2.5 text-[#989898] font-bold text-xl'>{items.length}</span>}
              </div>
            </button>

            {/* ==================== Logout Icon */}
            <button className="hover:opacity-75 transition-opacity cursor-pointer flex flex-col" onClick={logout}>
              <IoLogOutOutline className='h-8 w-8' />
              <button className='hover:opacity-75 transition-opacity cursor-pointer'>Logout</button>
            </button>
          </div>

          {/* ==================== Cart in Mobile View ==================== */}
          <button
            onClick={() => {
              navigate('/Cart')
            }}
            to="/cart"
            className="hover:opacity-75 transition-opacity cursor-pointer relative sm:hidden"
          >
            <IoCartOutline className='h-8 w-8' />
            {items.length != 0 && <span className='absolute top-6 right-2.5 text-[#989898] font-bold text-xl'>{items.length}</span>}
          </button>

          {/* ==================== Mobile Menu Button ==================== */}
          <button className="lg:hidden text-black z-50 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* ==================== Mobile Menu Icon ==================== */}
            {isMenuOpen ?
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              :
              <IoMenuSharp className='h-10 w-10' />
            }
          </button>
        </div>

        {/* ==================== Mobile Menu Overlay ==================== */}
        {isMenuOpen &&
          <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 lg:hidden z-40 border-t border-gray-100">
            {/* ==================== Mobile Search ==================== */}
            <div className="flex sm:hidden items-center bg-[#F5F5F5] rounded-lg px-4 py-3 gap-2 w-full">
              <LuSearch className='h-6 w-6 text-[#989898]' />
              <input type="text" placeholder="Search" className="bg-transparent outline-none text-[#656565] opacity-50 w-full text-sm font-medium" />
            </div>

            {/* ==================== Mobile Navigation ==================== */}
            <nav className="flex flex-col gap-4">
              <NavLink
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to="/"
                className={({ isActive }) => (isActive ? 'text-black font-medium w-fit' : 'text-[#989898] hover:text-black font-medium transition-colors w-fit')}
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to="/about"
                className={({ isActive }) => (isActive ? 'text-black font-medium w-fit' : 'text-[#989898] hover:text-black font-medium transition-colors w-fit')}
              >
                About
              </NavLink>
              <NavLink
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to="/contact"
                className={({ isActive }) => (isActive ? 'text-black font-medium w-fit' : 'text-[#989898] hover:text-black font-medium transition-colors w-fit')}
              >
                Contact Us
              </NavLink>
              <NavLink
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to="/blog"
                className={({ isActive }) => (isActive ? 'text-black font-medium w-fit' : 'text-[#989898] hover:text-black font-medium transition-colors w-fit')}
              >
                Blog
              </NavLink>
            </nav>

            {/* ==================== Mobile Icons ==================== */}
            <div className="flex sm:hidden items-center gap-6 pt-4 border-t border-gray-100">
              <button className="hover:opacity-75 transition-opacity cursor-pointer">
                <IoHeartOutline className='h-7 w-7' />
              </button>
              <button onClick={logout} className="hover:opacity-75 transition-opacity cursor-pointer flex sm:flex-row items-center gap-2">
                <IoLogOutOutline className='h-7 w-7' />
                <button className="hover:opacity-75 transition-opacity cursor-pointer">Logout</button>
              </button>
            </div>
          </div>
        }
      </div>
    </header>
  );
}
