import { useNavigate } from "react-router-dom";
import errorIcon from '../assets/error_icon.svg';

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="h-dvh w-full flex items-center justify-center px-4 py-10">
      <div className="w-full md:w-1/2 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-6 py-6 px-10">
        <h1 className="text-4xl text-[#6B6B6B] font-semibold text-center">Page Not Found</h1>
        <img src={errorIcon} alt="404 Error" className="object-contain" />
        <p className="text-xl text-red-600 font-semibold">Please check the URL and try again.</p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-black text-white rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
