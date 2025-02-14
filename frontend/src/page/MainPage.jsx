import { useState } from "react";
import { Navbar } from "../component/Navbar";
import Sidebar from "../component/sideBar";
import { useStyleState } from "../stateStore/useStyleState";
import { Dashboard } from "../component/Dashboard";
import StudentProfile from "../component/StudentProfile";
import { Outlet, Route, Routes } from "react-router-dom";

export function MainPage() {
  const [onClick, setOnClick] = useState(true); // Fixed state declaration
  const { isClickedAINotes } = useStyleState();

  return (
    <div className="w-full h-screen relative overflow-hidden box-border">
      <Navbar />
      <div className="w-full relative h-screen bg-lime-300 overflow-hidden box-border pt-20">
        <Sidebar />
        <div
          className={`h-full overflow-y-scroll max-md:py-5 pt-5 pb-1 border-yellow-400 relative bg-indigo-300 z-0 transition-all ease-in-out duration-700  
          ${isClickedAINotes ? 'ml-0 z-30 max-xs:-ml-0' : ' lg:ml-52 ml-16 max-xs:-ml-0'} lg:hover:z-20 box-border px-1 sm:px-2`}
        >
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
