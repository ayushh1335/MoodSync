import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if user is logged in (JWT token stored in localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  // Handle Sign Out
  const handleSignOut = () => {
    localStorage.removeItem("token"); // Remove token from storage
    setUser(false); // Update state
    navigate("/"); // Redirect to landing page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      {user && (
        <button 
          className="absolute top-5 right-5 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}

      <h1 className="text-4xl font-bold text-blue-600">Welcome to TaskTuner!</h1>
      <p className="text-lg text-gray-700 mt-4">
        Your AI-powered smart routine planner.
      </p>

      {!user && (
        <div className="mt-6 space-x-4">
          <button 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
          <button 
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
