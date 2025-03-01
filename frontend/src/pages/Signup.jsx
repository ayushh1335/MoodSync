import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/signup", formData);
    navigate("/signin");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        <button type="submit" className="bg-blue-500 text-white py-2">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
