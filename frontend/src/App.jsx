import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Routine from "./pages/Routine";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUser(token ? true : false);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  return (
    <BrowserRouter>
      <Navbar user={user} handleSignOut={handleSignOut} />
      <Routes>
      <Route path="/routine" element={<Routine />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
