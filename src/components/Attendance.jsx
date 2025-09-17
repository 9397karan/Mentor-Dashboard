import React, { useState } from 'react';
import { 
  Upload, 
  Calendar, 
  Users, 
  CheckCircle, 
  XCircle, 
  BarChart3, 
  Download,
  Link as LinkIcon,
  FileSpreadsheet
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const themeColors = {
  primary: '#0057D9',
  secondary: '#1976D2',
  accent: '#2196F3'
};

const Attendance = () => {
  const { theme } = useTheme();
  const [activeView, setActiveView] = useState('manual');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const students = [
    { id: 1, name: 'Alex Johnson', rollNumber: 'CS001', present: true },
    { id: 2, name: 'Sarah Chen', rollNumber: 'CS002', present: true },
    { id: 3, name: 'David Rodriguez', rollNumber: 'CS003', present: false },
    { id: 4, name: 'Emily Watson', rollNumber: 'CS004', present: true },
    { id: 5, name: 'Michael Brown', rollNumber: 'CS005', present: false },
  ];

  const attendanceStats = {
    totalStudents: 45,
    presentToday: 38,
    absentToday: 7,
    averageAttendance: 84.5
  };

  const toggleAttendance = (studentId) => {
    console.log(`Toggle attendance for student ${studentId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 p-8 space-y-6">
      
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold" style={{ color: themeColors.accent }}>
          Attendance System
        </h1>
        <div className="flex items-center space-x-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-black text-gray-900 dark:text-gray-100"
          />
          <button
            className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-colors"
            style={{ backgroundColor: themeColors.primary }}
          >
            Save Attendance
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Students', value: attendanceStats.totalStudents, icon: <Users size={32} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} /> },
          { label: 'Present Today', value: attendanceStats.presentToday, icon: <CheckCircle size={32} className="text-green-500" /> },
          { label: 'Absent Today', value: attendanceStats.absentToday, icon: <XCircle size={32} className="text-red-500" /> },
          { label: 'Average Attendance', value: `${attendanceStats.averageAttendance}%`, icon: <BarChart3 size={32} className="text-blue-500" /> },
        ].map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-black dark:border-[#05355c] rounded-xl shadow-sm border border-gray-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{card.label}</p>
                <p className="text-2xl font-bold">{card.value}</p>
              </div>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Attendance Method Tabs */}
      <div className="bg-white dark:bg-black rounded-xl shadow-sm border dark:border-[#05355c] border-gray-600">
        <div className="border-b border-gray-600">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'manual', label: 'Manual Marking', icon: CheckCircle },
              { id: 'excel', label: 'Excel Upload', icon: FileSpreadsheet },
              { id: 'sheets', label: 'Google Sheets', icon: LinkIcon },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeView === tab.id
                      ? `border-[${themeColors.accent}] text-[${themeColors.accent}]`
                      : 'border-transparent text-gray-500 dark:text-white hover:text-gray-200'
                  }`}
                  style={{
                    borderColor: activeView === tab.id ? themeColors.primary : undefined,
                    color: activeView === tab.id ? themeColors.primary : undefined
                  }}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Manual Marking */}
          {activeView === 'manual' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Manual Attendance Marking</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:opacity-90">
                    Mark All Present
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:opacity-90">
                    Mark All Absent
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium">{student.name}</h4>
                        <p className="text-sm text-gray-400">{student.rollNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                          student.present
                            ? 'bg-green-600 text-white hover:opacity-90'
                            : 'bg-red-600 text-white hover:opacity-90'
                        }`}
                      >
                        {student.present ? (
                          <>
                            <CheckCircle size={16} />
                            <span>Present</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={16} />
                            <span>Absent</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Excel Upload */}
          {activeView === 'excel' && (
            <div className="text-center py-12">
              <div className="border-2 border-dashed border-gray-600 rounded-xl p-12">
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload Excel File</h3>
                <p className="mb-4 text-gray-400">
                  Upload an Excel file with roll numbers and attendance data.
                </p>
                <button className="px-6 py-3 text-white rounded-lg" style={{ backgroundColor: themeColors.primary }}>
                  Choose File
                </button>
                <p className="text-xs text-gray-400 mt-2">Supports .xlsx, .xls files</p>
              </div>
            </div>
          )}

          {/* Google Sheets */}
          {activeView === 'sheets' && (
            <div className="space-y-6">
              <div className="text-center">
                <LinkIcon size={48} className="mx-auto text-blue-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Google Sheets Integration</h3>
                <p className="text-gray-400 mb-6">
                  Connect your Google Sheets for auto-sync attendance.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <label className="block text-sm font-medium mb-2">Google Sheets URL</label>
                <div className="flex space-x-2">
                  <input
                    type="url"
                    placeholder="https://docs.google.com/spreadsheets/d/..."
                    className="flex-1 px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-black text-gray-900 dark:text-gray-100"
                  />
                  <button
                    className="px-4 py-2 text-white rounded-lg hover:opacity-90"
                    style={{ backgroundColor: themeColors.primary }}
                  >
                    Connect
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Ensure public access or shared with service account
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 border border-blue-800 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Sheet Format Requirements:</h4>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Column A: Student Roll Numbers</li>
                  <li>• Column B: Student Names</li>
                  <li>• Column C: Attendance Status (P/A or 1/0)</li>
                  <li>• First row must contain headers</li>
                </ul>
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeView === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Attendance Analytics</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="font-medium mb-4">Class Attendance Trends</h4>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <BarChart3 size={64} />
                    <span className="ml-2">Chart visualization here</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="font-medium mb-4">Student Performance</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Sarah Chen', percentage: 95, status: 'excellent' },
                      { name: 'Alex Johnson', percentage: 88, status: 'good' },
                      { name: 'Emily Watson', percentage: 76, status: 'average' },
                      { name: 'David Rodriguez', percentage: 62, status: 'poor' }
                    ].map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">{student.name}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                student.status === 'excellent' ? 'bg-green-500' :
                                student.status === 'good' ? 'bg-blue-500' :
                                student.status === 'average' ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${student.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-400">{student.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 text-white rounded-lg hover:opacity-90" style={{ backgroundColor: themeColors.primary }}>
                  <Download size={16} />
                  <span>Export Report</span>
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:opacity-90">
                  Generate Monthly Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
