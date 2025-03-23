import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState } from "../redux/selector";
import { logoutUser } from "../redux/actions/auth.actions";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { isAuthenticated, user } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            .BAZAR.
          </Link>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Products
              </Link>
            </nav>

            <ThemeToggle />

            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 dark:text-gray-300">
                  Hello, {user?.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
