import { Link } from "react-router-dom";




export function Login() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Student Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-sky-600" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-md focus:outline-none  focus:ring-1 focus:ring-offset-sky-600
           " />
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            Login
          </button>
          <p className="text-center text-gray-700">Or</p>

          <Link to={'/register'}>
            <button className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition">
              Register
            </button>
          </Link>

        </form>
      </div>
    </div>
  );
}
