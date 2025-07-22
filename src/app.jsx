import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./components/signup";
import Signin from "./components/signin";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <Link className="navbar-brand" to="/">Library App</Link>
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">My Profile</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};


const Home = () => (
  <div className="container mt-4">
    <h2>Welcome to the Library App</h2>
    <p>This is the home page. You can register, log in, and view your profile.</p>
  </div>
);

export default App;
