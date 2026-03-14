import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Menu, User, X } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = ({ toggleSidebar }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 backdrop-saturate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {user && (
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
            
            <Link to={user ? (user.role === 'admin' ? '/admin/dashboard' : '/dashboard') : '/'} className="flex-shrink-0 flex items-center ml-2 md:ml-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                FixIt
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {!user ? (
              <div className="hidden sm:flex items-center space-x-4">
                <Link to="/login" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium text-sm transition-colors">
                  Log in
                </Link>
                <Link to="/signup" className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="relative ml-3">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white ring-2 ring-white dark:ring-deep-navy shadow-sm">
                    <span className="text-sm font-medium">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                </button>
                
                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-1 bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 dark:ring-gray-800 border border-gray-100 dark:border-gray-800 transition transform animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>
                    {/*
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Your Profile
                    </a>
                    */}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
