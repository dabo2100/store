import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center">
      <header className="w-full p-4 bg-black text-white">This is Header</header>
      <div className="container min-h-[70vh]">
        <Outlet />
      </div>
      <footer className="w-full p-4 bg-dark text-white min-h-[20vh]">This is Footer</footer>
    </div>
  );
}
