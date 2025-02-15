import { Link, useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import { useDataStore } from "../dataStore/useStore";




export function Login() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { login, checkAuth, loading } = useDataStore();

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email')
    const password = formData.get('password')

    console.log(email + " " + password);
    console.log("Handle login credencials ", Date.now());
    const isLoggedIn = await login({ email, password });

    if (isLoggedIn) {
      navigate('/')
    }
  }
  console.log("Login page :: loading -",loading);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Student Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" required name="email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-sky-600" />
          <input type="password" name="password" required placeholder="Password" className="w-full p-3 border rounded-md focus:outline-none  focus:ring-1 focus:ring-offset-sky-600
           " />
          <button
            disabled={loading}
            className={`w-full py-2 rounded-md text-white transition 
            ${loading ? 'bg-green-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
          >
            Login
          </button>
          <p className="text-center text-gray-700">Or</p>

          <Link to={'/register'}>
            <button className={`w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition  ${loading ? 'bg-sky-500 cursor-not-allowed':'bg-sky-600'}`}>
              Register
            </button>
          </Link>

        </form>
      </div>
    </div>
  );
}
