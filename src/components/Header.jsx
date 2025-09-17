import React from 'react';
import { Bell, Search, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`px-6 py-4 transition-colors duration-300  shadow-sm ${
      theme === 'dark' ? 'bg-black border-[#1976D2]' : 'bg-white border-[#0057D9]'
    }`}>
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search
              size={20}
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                theme === 'dark' ? 'text-[#2196F3]' : 'text-gray-400'
              }`}
            />
            <input
              type="text"
              placeholder=""
              className={`pl-10 pr-4 py-2 w-80 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2196F3] ${
                theme === 'dark'
                  ? 'bg-black text-[#ffffff] border-[#ffffff] placeholder-[#ffffff]'
                  : 'bg-white text-gray-900 border-gray-300 placeholder-gray-400'
              }`}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className={`p-2 rounded-lg relative ${theme === 'dark' ? 'hover:bg-[#0057D9]/20' : 'hover:bg-gray-100'}`}>
            <Bell size={20} className={theme === 'dark' ? 'text-[#ffffff]' : 'text-gray-600'} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>

          {/* Settings */}
          <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-[#0057D9]/20' : 'hover:bg-gray-100'}`}>
            <Settings size={20} className={theme === 'dark' ? 'text-[#ffffff]' : 'text-gray-600'} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-[#0057D9]/20' : 'hover:bg-gray-100'}`}
          >
            {theme === 'light' ? <Moon size={20} className="#0057D9" /> : <Sun size={20} className="text-[#ffffff]" />}
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-[#ffffff]' : 'text-gray-800'}`}>Dr. Sarah Johnson</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-[#ffffff]' : 'text-gray-500'}`}>Computer Science</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-[#0057D9] to-[#2196F3] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">SJ</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
