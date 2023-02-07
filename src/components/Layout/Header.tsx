import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/api";

export default function Header() {
  const navigate = useNavigate();

  const logout = async () => {
    await logoutUser({});

    navigate("/");
  };
  return (
    <div className="flex items-center justify-between container mx-auto h-[80px]">
      <h2 className="text-2xl font-bold text-teal-500">CookWeb</h2>
      <div className="flex gap-x-5 items-center">
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/cookings"}>Cookings</Link>
        <button
          className="px-4 py-2 bg-rose-500 text-white rounded-md"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
