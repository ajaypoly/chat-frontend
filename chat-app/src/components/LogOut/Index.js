import { Logout } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
function LogOut() {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <button className="flex justify-center p-2 border rounded-lg bg-[#055345] border-none hover:bg-transparent w-28 ml-auto mr-auto"

    onClick={handleClick}>
      <Logout className="text-teal-500" />
    </button>
  );
}

export default LogOut;
