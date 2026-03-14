import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, List, PlusCircle, X, Settings, Users } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  const getLinks = () => {
    if (user.role === 'admin') {
      return [
        { name: 'Dashboard', to: '/admin/dashboard', icon: Home },
        { name: 'All Complaints', to: '/admin/complaints', icon: List },
        // { name: 'Students', to: '/admin/students', icon: Users },
      ];
    } else {
      return [
        { name: 'Dashboard', to: '/dashboard', icon: Home },
        { name: 'New Complaint', to: '/new-complaint', icon: PlusCircle },
      ];
    }
  };

  const links = getLinks();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-80 transition-opacity md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar component */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col justify-between pt-5 pb-4 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between px-4 mb-6 md:hidden">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                FixIt
              </span>
              <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="px-4 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
              Menu
            </div>
            
            <nav className="mt-2 px-2 space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    end={link.to === '/dashboard' || link.to === '/admin/dashboard'}
                    className={({ isActive }) =>
                      `group flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-500 dark:bg-blue-500/10 dark:text-blue-500'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white'
                      }`
                    }
                  >
                    <Icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
          
          <div className="px-2 mt-auto pt-8">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">
                Logged in as
              </p>
              <p className="text-sm text-gray-900 dark:text-white font-semibold truncate">
                {user.role === 'admin' ? 'Warden Admin' : 'Student'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
