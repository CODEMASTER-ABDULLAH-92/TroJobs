import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <BiError className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg mb-4">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
