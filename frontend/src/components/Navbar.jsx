import { Link } from "react-router-dom";
import { Home, Info, Calendar, LogOut } from "lucide-react";

const Navbar = ({ user, handleSignOut }) => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">TaskTuner</h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white flex items-center gap-1 hover:text-gray-200">
            <Home size={20} /> Home
          </Link>
          <Link to="/about" className="text-white flex items-center gap-1 hover:text-gray-200">
            <Info size={20} /> About
          </Link>
          <Link to="/routine" className="text-white flex items-center gap-1 hover:text-gray-200">
            <Calendar size={20} /> Routine
          </Link>
        </div>

        {/* Sign Out Button (Only if logged in) */}
        {user && (
          <button 
            onClick={handleSignOut} 
            className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            <LogOut size={20} /> Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
