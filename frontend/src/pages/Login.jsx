import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await API.post("/auth/login", form);
      alert(res.data);
      if (res.data.includes("successful")) {
        localStorage.setItem("username", form.username);
        navigate("/dashboard");
      }
    } catch (err) {
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10">
      <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
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
        className="bg-green-500 text-white px-4 py-2 w-full"
        onClick={submit}
      >
        Login
      </button>
      <p className="mt-4 text-sm text-center">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 underline">
          Register here
        </a>
      </p>
    </div>
  );
}
