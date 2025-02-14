import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-900 via-indigo-600 to-cyan-400">
      <div className="flex flex-col items-center rounded-md justify-center shadow-2xl h-80 w-fit sm:w-[28rem] bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
        <p className="text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}