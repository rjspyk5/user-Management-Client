import { Outlet } from "react-router-dom";
import { Navbar } from "../Pages/Navbar";

export const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};
