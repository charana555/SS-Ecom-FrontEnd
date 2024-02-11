import React from "react";
import { Link } from "react-router-dom";

import { PiShoppingCartBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import logo from "../../assets/Images/logo.png";

import { selectCurrentToken } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectCurrentToken);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/auth");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed z-[100000] top-0 w-[100%]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row   md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {isLoggedIn && (
              <li>
                <Link
                  to="#"
                  className="flex group gap-1 py-2 px-3 text-white rounded md:bg-transparent hover:text-orange-600 hover:scale-[1.1] duration-200 ease-in-out  "
                  aria-current="page"
                >
                  <PiShoppingCartBold className="text-2xl" />
                </Link>
              </li>
            )}
            {isLoggedIn ? (
              <li>
                <div
                  onClick={handleLogout}
                  className="flex group gap-1 py-2 px-3 text-white rounded md:bg-transparent hover:text-orange-600 hover:scale-[1.1] duration-200 ease-in-out  "
                  aria-current="page"
                >
                  <MdLogout className="text-2xl" />
                </div>
              </li>
            ) : (
              <li>
                <Link
                  to="/auth"
                  className="cursor-pointer flex group gap-1 py-2 px-3 text-white rounded md:bg-transparent hover:text-orange-600 hover:scale-[1.1] duration-200 ease-in-out  "
                  aria-current="page"
                >
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
