import React from 'react';
import { 
  User, 
  Users, 
  BookOpen, 
  Calendar, 
  Image, 
  AlertTriangle, 
  MessageSquare, 
  FileText, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, collapsed, setCollapsed }) => {
  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'students', label: 'Student Management', icon: Users },
    { id: 'assignments', label: 'Assignments & Projects', icon: BookOpen },
    { id: 'attendance', label: 'Attendance System', icon: Calendar },
    { id: 'community', label: 'Community & Events', icon: Image },
    { id: 'risk-analysis', label: 'Risk Analysis', icon: AlertTriangle },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'support', label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <div className={`transition-all duration-300 fixed left-0 top-0 h-full z-50 
      ${collapsed ? 'w-20' : 'w-64'} 
      ${'bg-white dark:bg-black shadow-lg'}`}>
      
      {/* Header / Title */}
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <h1 className="text-xl font-bold text-gray-800 dark:text-[#2196F3]">Mentor Dashboard</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-[#0057D9]/10 dark:hover:bg-[#1976D2]/20 transition-colors"
        >
          {collapsed ? <Menu size={20} className="text-gray-800 dark:text-[#2196F3]" /> 
                     : <X size={20} className="text-gray-800 dark:text-[#2196F3]" />}
        </button>
      </div>
      
      {/* Menu Items */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 ${
                isActive 
                  ? 'bg-[#0057D9]/10 dark:bg-[#2196F3]/20 text-[#0057D9] dark:text-[#2196F3] border-r-2 border-[#0057D9] dark:border-[#2196F3]' 
                  : 'text-gray-600 dark:text-[#ffffff] hover:bg-[#0057D9]/5 dark:hover:bg-[#0057D9]/10 hover:text-[#0057D9] dark:hover:text-[#2196F3]'
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!collapsed && <span className="ml-3 font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
