import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";
import Swal from "sweetalert2";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      icon: "info",
      text: "Loading...",
      allowOutsideClick: () => !Swal.isLoading(),
    });
    await loginUser({
      username: username,
      password: password,
    });
    Swal.close();
    navigate("/dashboard");
  };

  return (
    <div className="container mx-auto flex items-center justify-center flex-col h-screen">
      <span className="text-3xl font-semibold uppercase">Login</span>
      <form
        onSubmit={formSubmit}
        className="flex flex-col gap-y-4 border-2 px-3 py-5 rounded-md mt-5 w-1/3"
      >
        <div className="flex flex-col gap-y-1">
          <label className="text-xl font-semibold">Username</label>
          <input
            type="text"
            className="p-2 text-lg rounded-md border-2"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-xl font-semibold">Password</label>
          <input
            type="password"
            className="p-2 text-lg rounded-md border-2"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="flex bg-emerald-500 rounded-md border-2 py-2 justify-center text-xl uppercase font-semibold mt-1 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
