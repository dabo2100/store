import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <header className='w-full flex items-center justify-between py-6 md:px-0 container mx-auto relative'>
            {/* Logo */}
            <svg width="66" height="23" viewBox="0 0 66 23" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1826 16.08C13.1266 17.352 8.016 17.5 6.096 17.5C2.304 17.5 0 15.052 0 11.5C0 7.972 2.328 5.524 6.096 5.524C7.92 5.524 13.1746 6.72 14.2306 7.992L8.832 9.484C8.064 8.644 7.224 8.308 6.096 8.308C4.488 8.308 3.096 9.604 3.096 11.5C3.096 13.564 4.392 14.716 6.096 14.716C7.104 14.716 8.256 14.332 8.88 13.54L14.1826 16.08Z" fill="black" />
                <path d="M28.8035 6.312L21.8195 22.872H18.3875L20.6195 17.712L15.7955 6.312H19.2035L21.6035 12.408L22.2995 14.592L22.9715 12.408L25.3715 6.312H28.8035Z" fill="#989898" />
                <path d="M36.6494 8.856C34.9214 8.856 33.6734 10.176 33.6734 11.976C33.6734 13.752 34.9214 15.072 36.6494 15.072C38.3294 15.072 39.4814 13.824 39.4814 11.976C39.4814 10.104 38.3294 8.856 36.6494 8.856ZM30.6734 17.592V0H33.7214V6.264L33.6734 7.08C34.1774 6.408 35.7134 6.024 36.7694 6.024C40.5374 6.024 42.6495 8.784 42.6495 11.976C42.6495 15.576 40.4894 17.904 36.7694 17.904C35.8574 17.904 34.3934 17.472 33.7934 16.752L33.8174 17.4V17.592H30.6734Z" fill="black" />
                <path d="M55.3377 16.152C54.4497 17.304 52.4098 18 50.6578 18C46.8418 18 44.7058 15.384 44.7058 12C44.7058 8.544 46.8178 6.024 50.5378 6.024C54.2338 6.024 56.3457 8.544 56.3457 12C56.3457 12.384 56.3457 12.624 56.3217 12.96H47.8258C47.9938 14.376 49.0498 15.264 50.6578 15.264C51.8098 15.264 52.8897 14.88 53.5617 14.136L55.3377 16.152ZM47.8738 10.896H53.1537C53.0097 9.624 51.9538 8.76 50.5378 8.76C49.1218 8.76 47.9938 9.624 47.8738 10.896Z" fill="black" />
                <path d="M64.7516 9.144C64.1276 8.928 63.5756 8.856 62.9276 8.856C62.4956 8.856 62.1356 8.88 61.7996 9.024V17.592H58.7036V6.816C59.6396 6.336 61.2476 6 62.8076 6C63.4796 6 64.6796 6.072 65.3996 6.336L64.7516 9.144Z" fill="black" />
            </svg>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center bg-[#F5F5F5] rounded-lg px-4 py-3 gap-2 w-full max-w-[372px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-[#989898] w-full text-sm font-medium"
                />
            </div>

            {/* Navigation*/}
            <nav className='hidden lg:flex items-center gap-[50px]'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#989898] hover:text-black font-medium transition-colors'}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#989898] hover:text-black font-medium transition-colors'}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#989898] hover:text-black font-medium transition-colors'}>Contact Us</NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#989898] hover:text-black font-medium transition-colors'}>Blog</NavLink>
            </nav>

            {/* Icons */}
            <div className='flex items-center gap-4 md:gap-6'>
                <div className='hidden sm:flex items-center gap-6'>
                    <button className='hover:opacity-75 transition-opacity cursor-pointer'>
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 18.5339 10.5694 18.5835 10.75 18.5835C10.9306 18.5835 11.1077 18.5339 11.262 18.44C19.875 13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 3.75C10.75 3.75 8.511 0.75 5.75 0.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className='hover:opacity-75 transition-opacity cursor-pointer' onClick={()=>{navigate("/Cart")}}>
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 0.75H4.75L7.75 17.75H23.75M7.75 12.4167H23.34C23.4556 12.4167 23.5677 12.3767 23.6572 12.3035C23.7466 12.2302 23.8079 12.1282 23.8306 12.0148L25.6306 3.01479C25.6451 2.94222 25.6434 2.86733 25.6255 2.79552C25.6075 2.72372 25.5739 2.65679 25.5269 2.59956C25.48 2.54234 25.4209 2.49625 25.354 2.46462C25.2871 2.43299 25.214 2.41662 25.14 2.41667H5.75M9.75 21.75C9.75 22.3023 9.30228 22.75 8.75 22.75C8.19772 22.75 7.75 22.3023 7.75 21.75C7.75 21.1977 8.19772 20.75 8.75 20.75C9.30228 20.75 9.75 21.1977 9.75 21.75ZM23.75 21.75C23.75 22.3023 23.3023 22.75 22.75 22.75C22.1977 22.75 21.75 22.3023 21.75 21.75C21.75 21.1977 22.1977 20.75 22.75 20.75C23.3023 20.75 23.75 21.1977 23.75 21.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className='hover:opacity-75 transition-opacity cursor-pointer'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='lg:hidden text-black z-50 cursor-pointer'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {/* Mobile Menu Icon */}
                    {isMenuOpen ?
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M32.5 13.75H7.5V11.25H32.5V13.75Z" fill="#080341" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M32.5 21.25H7.5V18.75H32.5V21.25Z" fill="#080341" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M32.5 28.75H7.5V26.25H32.5V28.75Z" fill="#080341" />
                        </svg>
                    }
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen &&
                <div className='absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 lg:hidden z-40 border-t border-gray-100'>
                    {/* Mobile Search */}
                    <div className="flex sm:hidden items-center bg-[#F5F5F5] rounded-lg px-4 py-3 gap-2 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-[#989898] w-full text-sm font-medium"
                        />
                    </div>

                    {/* Mobile Navigation */}
                    <nav className='flex flex-col gap-4'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#989898] hover:text-black font-medium transition-colors'}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#989898] hover:text-black font-medium transition-colors'}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#989898] hover:text-black font-medium transition-colors'}>Contact Us</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#989898] hover:text-black font-medium transition-colors'}>Blog</NavLink>
                    </nav>

                    {/* Mobile Icons */}
                    <div className='flex sm:hidden items-center gap-6 pt-4 border-t border-gray-100'>
                        <button className='hover:opacity-75 transition-opacity'>
                            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6667 6.66666C20.6667 6.66666 18.8 7.6 17.6 9.06666C16.9333 9.86666 15.0667 9.86666 14.4 9.06666C13.2 7.6 11.3333 6.66666 9.33333 6.66666C5.86667 6.66666 3.06667 9.46666 3.06667 12.9333C3.06667 19.8667 16 26.6667 16 26.6667C16 26.6667 28.9333 19.8667 28.9333 12.9333C28.9333 9.46666 26.1333 6.66666 22.6667 6.66666Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            }
        </header>
    );
};
