import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation()


  if (  location.pathname != '/auth') {
    
    return (
      <nav className="bg-gray-300 shadow-lg sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-black font-bold text-lg">
                <div className="text-3xl font-extrabold text-black cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-400 from-blue-300">
                    UCS
                  </span>{" "}
                  (Taungoo)
                </div>
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Link
             
                to="/admin"
                className="text-black p-1 hover:bg-blue-500 rounded-md hover:text-gray-200 focus:outline-none focus:text-blue-600 transition duration-300 ease-in-out"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/userlist"
                className="text-black p-1 hover:bg-blue-500 rounded-md hover:text-gray-200 focus:outline-none focus:text-blue-600 transition duration-300 ease-in-out"
              >
                User List
              </Link>
              <Link
                to="/admin/about"
                className="text-black p-1 hover:bg-blue-500 rounded-md hover:text-gray-200 focus:outline-none focus:text-blue-600 transition duration-300 ease-in-out"
              >
                Post
              </Link>
              <Link
                to="/admin/settings"
                className="text-black p-1 hover:bg-blue-500 rounded-md hover:text-gray-200 focus:outline-none focus:text-blue-600 transition duration-300 ease-in-out"
              >
                Settings
              </Link>
              
            </div>
            <div className="flex lg:hidden items-center">
              <button
                onClick={toggleNavbar}
                className="text-black hover:bg-blue-500 rounded-md hover:text-gray-200 focus:outline-none focus:text-gray-200 transition duration-300 ease-in-out"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 5.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 11a1 1 0 100 2h14a1 1 0 100-2H5zm-1 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/admin"
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/about"
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                Post
              </Link>
              <Link
                to="/admin/userlist"
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                User List
              </Link>
              <Link
                to="/admin/settings"
                className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                Settings
              </Link>
              
            </div>
          </div>
        )}
      </nav>
    );
  }
  
};

export default Navbar;
