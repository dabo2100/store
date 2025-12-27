import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useCart } from './store';

export default function MainLayout() {
  // const { items, calcTotal } = useCart();

  // useEffect(() => {
  //   console.log('Cart Changed');
  //   calcTotal();
  // }, [items]);

  return (
    <div className="flex flex-col items-center bg-white">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
