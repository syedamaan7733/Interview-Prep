import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.redux";

// components
import Header from "./component/Header";
import ProtectedRoute from "./component/auth/ProdtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/authPage";
import ProductsPage from "./pages/ProductPage";

const initializeTheme = () => {
  //giving theme in local storage
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    //for targeting parent ele
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const App = () => {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route 
                path="/products" 
                element={
                  <ProtectedRoute children={ProductsPage}>
                    <ProductsPage />
                  </ProtectedRoute>
                }  */}

              <Route
                path="/products"
                element={
                  <ProtectedRoute>
                    <ProductsPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <footer className="bg-white dark:bg-gray-800 shadow-inner py-4">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} .BAZAR. All rights reserve.
            </div>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
