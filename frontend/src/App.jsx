import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-center">
      <Routes>
        {/* Home */}
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />

        {/* Login */}
        <Route
          path='/login'
          element={
            authUser ? (
              <Navigate to='/' />
            ) : (
              <div className="p-4 min-h-screen flex items-center justify-center">
                <Login />
              </div>
            )
          }
        />

        {/* Signup */}
        <Route
          path='/signup'
          element={
            authUser ? (
              <Navigate to='/' />
            ) : (
              <div className="p-4 min-h-screen flex items-center justify-center">
                <SignUp />
              </div>
            )
          }
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;