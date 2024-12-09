import React, { useContext, useEffect, useState } from "react";
// import ReactTooltip from 'react-tooltip';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import userIcon from "../assets/user.png";
import { toast } from "react-toastify";
import { Theme, Button } from 'react-daisyui'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();


  // Try to get the theme from localStorage if available, otherwise default to 'light'
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);  // Save the theme to localStorage
  };

  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "border-2 p-2 border-cyan-500 text-cyan-700 rounded-lg hover:bg-transparent font-bold text-lg"
      : "border-2 p-2 rounded-lg hover:bg-transparent hover:text-gray-300 hover:bg-cyan-300 font-bold text-lg";

  const links = (
    <>
      <NavLink to="/" className={linkClass} data-tooltip-id="my-tooltip"
        data-tooltip-content={"Stay Home"}
        data-tooltip-place="top">
        Home
      </NavLink>
      <NavLink to="/allEquipments" className={linkClass} data-tooltip-id="my-tooltip"
        data-tooltip-content={"Go to All Equipments"}
        data-tooltip-place="top">
        All Sports Equipment
      </NavLink>
      {/* <NavLink to="/profile" className={linkClass}>
        My Profile
      </NavLink> */}
      {user && (
        <NavLink to="/addEquipment" className={linkClass} data-tooltip-id="my-tooltip"
          data-tooltip-content={"Only User Can Use"}
          data-tooltip-place="top">
          Add Equipment
        </NavLink>
      )}
      {user && (
        <NavLink to="/myEquipments" className={linkClass} data-tooltip-id="my-tooltip"
          data-tooltip-content={"Only User Can Use"}
          data-tooltip-place="top">
          My Equipment List
        </NavLink>
      )}
      <NavLink to="/faq" className={linkClass} data-tooltip-id="my-tooltip"
        data-tooltip-content={"Know Your Answer"}
        data-tooltip-place="top">
        FAQ
      </NavLink>
    </>
  );

  const signOut = () => {
    logOut();
    navigate("/auth/login");
    toast.success("Logout successfully!");
  };

  return (
    <div className="navbar bg-base-100 px-4">
      {/* Start Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52"
          >
            {links}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-outline btn-accent rounded-lg ml-2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"Change Theme"}
              data-tooltip-place="top"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
        <Link to="/" className="text-2xl text-cyan-600 font-semibold" data-tooltip-id="my-tooltip"
          data-tooltip-content={"Website's Name"}
          data-tooltip-place="top">
          EquiSports
        </Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 space-x-4">
          {links}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-outline btn-accent rounded-lg ml-2"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={"Change Theme"}
            data-tooltip-place="top"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>

      {/* End Section */}
      <div className="navbar-end flex items-center gap-3">
        <div>
          {user && user?.email ? (
            <img
              className="w-10 h-10 rounded-full border-2 border-cyan-500"
              src={user?.photoURL}
              alt=""
              // title={user?.displayName || "User"}
              // data-tip={user?.displayName || "User"}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName || "User"}
              data-tooltip-place="top"
            />
          ) : (
            <img
              className="my-tooltip w-10 h-10 rounded-full"
              src={userIcon}
              alt=""
              // title={"No Logged User"}
              // data-tip={"No Logged User"}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"No Logged User"}
              data-tooltip-place="top"
            />
          )}
        </div>
        <div>
          {user && user?.email ? (
            <button
              onClick={signOut}
              className="btn btn-neutral bg-cyan-500 rounded-lg border-none hover:bg-cyan-700" data-tooltip-id="my-tooltip"
              data-tooltip-content={"You Can Logout"}
              data-tooltip-place="top"
            >
              Logout
            </button>
          ) : (
            <div>
              <Link
                to="/auth/login"
                className="btn btn-neutral bg-cyan-500 rounded-lg border-none hover:bg-cyan-700 mr-2"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={"Please Login"}
                data-tooltip-place="top"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-neutral bg-cyan-500 rounded-lg border-none hover:bg-cyan-700"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={"Register If Not Account"}
                data-tooltip-place="top"
              >
                Register
              </Link>
            </div>
          )}
        </div>

      </div>
      <Tooltip id="my-tooltip" />


      {/* <Tooltip anchorSelect=".my-tooltip" place="top">
        Hello world!
      </Tooltip> */}
    </div>
  );
};

export default Navbar;