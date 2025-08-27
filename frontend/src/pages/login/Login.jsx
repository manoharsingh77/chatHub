import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      
    >
      <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-2xl w-full max-w-md">
        <div className="backdrop-blur-xl bg-black/50 rounded-2xl p-8">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-300 mb-6">
            ChatApp Login
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Signup link */}
            <Link
              to="/signup"
              className="text-sm text-blue-300 hover:underline mt-3 inline-block"
            >
              Don’t have an account?
            </Link>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 mt-5 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 transition duration-300 text-white font-semibold"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
