import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='w-full px-0 md:px-14 lg:px-[144px] bg-black text-white py-[104px]'>
            <div className='container flex flex-col items-between mx-auto gap-8 md:gap-6'>
                {/* Upper */}
                <div className='flex flex-col md:flex-row gap-8 md:gap-0 lg:gap-6 items-center md:items-start md:justify-between'>
                    {/* Logo & Description */}
                    <div className='flex flex-col gap-6 items-center md:items-start'>
                        <svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1826 16.08C13.1266 17.352 8.016 17.5 6.096 17.5C2.304 17.5 0 15.052 0 11.5C0 7.972 2.328 5.524 6.096 5.524C7.92 5.524 13.1746 6.72 14.2306 7.992L8.832 9.484C8.064 8.644 7.224 8.308 6.096 8.308C4.488 8.308 3.096 9.604 3.096 11.5C3.096 13.564 4.392 14.716 6.096 14.716C7.104 14.716 8.256 14.332 8.88 13.54L14.1826 16.08Z" fill="white" />
                            <path d="M28.8035 6.312L21.8195 22.872H18.3875L20.6195 17.712L15.7955 6.312H19.2035L21.6035 12.408L22.2995 14.592L22.9715 12.408L25.3715 6.312H28.8035Z" fill="#989898" />
                            <path d="M36.6494 8.856C34.9214 8.856 33.6734 10.176 33.6734 11.976C33.6734 13.752 34.9214 15.072 36.6494 15.072C38.3294 15.072 39.4814 13.824 39.4814 11.976C39.4814 10.104 38.3294 8.856 36.6494 8.856ZM30.6734 17.592V0H33.7214V6.264L33.6734 7.08C34.1774 6.408 35.7134 6.024 36.7694 6.024C40.5374 6.024 42.6495 8.784 42.6495 11.976C42.6495 15.576 40.4894 17.904 36.7694 17.904C35.8574 17.904 34.3934 17.472 33.7934 16.752L33.8174 17.4V17.592H30.6734Z" fill="white" />
                            <path d="M55.3377 16.152C54.4497 17.304 52.4098 18 50.6578 18C46.8418 18 44.7058 15.384 44.7058 12C44.7058 8.544 46.8178 6.024 50.5378 6.024C54.2338 6.024 56.3457 8.544 56.3457 12C56.3457 12.384 56.3457 12.624 56.3217 12.96H47.8258C47.9938 14.376 49.0498 15.264 50.6578 15.264C51.8098 15.264 52.8897 14.88 53.5617 14.136L55.3377 16.152ZM47.8738 10.896H53.1537C53.0097 9.624 51.9538 8.76 50.5378 8.76C49.1218 8.76 47.9938 9.624 47.8738 10.896Z" fill="white" />
                            <path d="M64.7516 9.144C64.1276 8.928 63.5756 8.856 62.9276 8.856C62.4956 8.856 62.1356 8.88 61.7996 9.024V17.592H58.7036V6.816C59.6396 6.336 61.2476 6 62.8076 6C63.4796 6 64.6796 6.072 65.3996 6.336L64.7516 9.144Z" fill="white" />
                        </svg>
                        <p className='text-[#CFCFCF] text-base font-medium leading-6 max-w-[384px] text-center md:text-left'>
                            The premium destination for the latest phones and accessories. We offer the best deals on the market.
                        </p>
                    </div>

                    {/* Services */}
                    <div className='flex flex-col gap-2 items-center md:items-start'>
                        <h3 className='text-white font-semibold text-center lg:text-left'>Services</h3>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Bonus program</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Gift cards</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Credit and payment</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Service contracts</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Non-cash account</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Payment</NavLink>
                    </div>

                    {/* Assistance */}
                    <div className='flex flex-col gap-2 items-center md:items-start'>
                        <h3 className='text-white font-semibold text-center lg:text-left'>Assistance to the buyer</h3>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Find an order</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Terms of delivery</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Exchange and return of goods</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Guarantee</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Frequently asked questions</NavLink>
                        <NavLink to="#" className='text-[#CFCFCF] hover:text-white transition-colors'>Terms of use of the site</NavLink>
                    </div>
                </div>

                {/* Socials */}
                <div className='w-full flex flex-col md:flex-row gap-6 items-center md:items-start'>
                    <div className='flex items-center gap-8'>
                        {/* Twitter */}
                        <NavLink to="#" className='text-white hover:text-gray-300 transition-colors text-2xl'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </NavLink>
                        {/* Facebook */}
                        <NavLink to="#" className='text-white hover:text-gray-300 transition-colors text-2xl'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </NavLink>
                        {/* Tiktok */}
                        <NavLink to="#" className='text-white hover:text-gray-300 transition-colors text-2xl'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.03 5.91-.05 8.81-.47 9.91-15.86 7.82-11.59-1.09 1.4-2.93 4.41-5.06 7.64-5.06.02 2.91-.01 5.85.01 8.79-.05 1.42 1.75 2.14 2.64 1.12 2.2-2.53 1.25-6.66-2.09-6.61-4.04.05-7.74 3.79-7.1 7.91.56 3.66 4 6.28 7.63 5.8 4.71-.62 7.5-6.19 5.86-10.4-1.17-2.99-4.22-5.04-7.46-5.03L12.525.02z" />
                            </svg>
                        </NavLink>
                        {/* Instagram */}
                        <NavLink to="#" className='text-white hover:text-gray-300 transition-colors text-2xl'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};
