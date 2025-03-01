import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:5000/api/auth/signin", formData);
    localStorage.setItem("token", data.token);
    navigate("/landing");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        <button type="submit" className="bg-green-500 text-white py-2">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
