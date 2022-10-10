import React, { useContext } from "react";
import "./Main.css";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { UserContext } from "../../utils/UserContext";

function Main() {
  const [user] = useContext(UserContext);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="Main">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Main;
