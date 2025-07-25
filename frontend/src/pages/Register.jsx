import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await API.post("/auth/register", form);
      alert(res.data);
      if (res.data.includes("successful")) {
        navigate("/login");
      }
    } catch (err) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10">
      <h1 className="text-xl font-bold mb-4 text-center">Register</h1>
      <input
        className="w-full p-2 border mb-2"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        className="w-full p-2 border mb-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 w-full"
        onClick={submit}
      >
        Register
      </button>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <a href="/login" className="text-green-600 underline">
          Login here
        </a>
      </p>
    </div>
  );
}
