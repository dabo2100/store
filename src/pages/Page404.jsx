import { useNavigate } from "react-router-dom";
import errorIcon from '../assets/error_icon.svg';

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-6">
      <img src={errorIcon} alt="404 Error" className="w-24 h-24 mb-4" />
      <h1 className="text-[150px] font-bold leading-none">404</h1>
      <p className="text-xl font-medium">Page Not Found</p>
      <button
        onClick={() => navigate('/')}
        className="px-8 py-3 bg-black text-white rounded-lg hover:opacity-80 transition-opacity"
      >
        Go to Home
      </button>
    </div>
  );
}
