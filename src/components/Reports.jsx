import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  TrendingUp, 
  BarChart3,
  PieChart,
  Filter,
  Share2,
  Printer
} from 'lucide-react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('student-performance');
  const [selectedPeriod, setSelectedPeriod] = useState('semester');

  const reportTypes = [
    { id: 'student-performance', name: 'Student Performance', description: 'Comprehensive academic performance analysis', icon: TrendingUp, frequency: 'Monthly' },
    { id: 'attendance-summary', name: 'Attendance Summary', description: 'Detailed attendance tracking and trends', icon: Users, frequency: 'Weekly' },
    { id: 'risk-analysis', name: 'Risk Analysis', description: 'Student dropout and intervention analysis', icon: BarChart3, frequency: 'Bi-weekly' },
    { id: 'engagement-metrics', name: 'Engagement Metrics', description: 'Student participation and engagement levels', icon: PieChart, frequency: 'Monthly' }
  ];

  const recentReports = [
    { id: 1, title: 'December 2023 - Student Performance Report', type: 'Student Performance', generatedAt: '2024-01-02', size: '2.4 MB', status: 'ready' },
    { id: 2, title: 'Week 1 January - Attendance Summary', type: 'Attendance Summary', generatedAt: '2024-01-08', size: '1.8 MB', status: 'ready' },
    { id: 3, title: 'Q4 2023 - Risk Analysis Report', type: 'Risk Analysis', generatedAt: '2024-01-05', size: '3.2 MB', status: 'processing' }
  ];

  const studentPerformanceData = {
    summary: { totalStudents: 156, averageGPA: 7.8, passRate: 94.2, improvementRate: 12.5 },
    topPerformers: [
      { name: 'Sarah Chen', gpa: 9.6, improvement: '+0.3' },
      { name: 'Alex Johnson', gpa: 9.2, improvement: '+0.1' },
      { name: 'Emily Watson', gpa: 8.9, improvement: '+0.4' }
    ],
    needsAttention: [
      { name: 'David Rodriguez', gpa: 6.2, improvement: '-0.5' },
      { name: 'Michael Brown', gpa: 6.8, improvement: '-0.2' }
    ]
  };

  return (
    <div className="space-y-6 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h1>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="semester">This Semester</option>
            <option value="year">This Year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Report Types */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white">Report Types</h2>
            </div>
            <div className="p-4 space-y-2">
              {reportTypes.map((report) => {
                const Icon = report.icon;
                return (
                  <button
                    key={report.id}
                    onClick={() => setSelectedReport(report.id)}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      selectedReport === report.id
                        ? 'bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-600 dark:border-blue-500 dark:text-white'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon size={20} />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{report.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{report.frequency}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Report Area */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {reportTypes.find(r => r.id === selectedReport)?.name} Report
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {reportTypes.find(r => r.id === selectedReport)?.description}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Filter size={20} />
                </button>
                <button className="p-2 text-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Share2 size={20} />
                </button>
                <button className="p-2 text-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Printer size={20} />
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <Download size={16} />
                  <span>Export</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              {selectedReport === 'student-performance' ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-700 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-white">{studentPerformanceData.summary.totalStudents}</div>
                      <div className="text-sm text-blue-600 dark:text-gray-300">Total Students</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-700 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600 dark:text-white">{studentPerformanceData.summary.averageGPA}</div>
                      <div className="text-sm text-green-600 dark:text-gray-300">Average GPA</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-700 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-white">{studentPerformanceData.summary.passRate}%</div>
                      <div className="text-sm text-purple-600 dark:text-gray-300">Pass Rate</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-700 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-600 dark:text-white">+{studentPerformanceData.summary.improvementRate}%</div>
                      <div className="text-sm text-orange-600 dark:text-gray-300">Improvement</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center text-gray-500 dark:text-gray-300">
                      <PieChart size={64} className="mx-auto" />
                      <p className="mt-2">GPA Distribution Chart Placeholder</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center text-gray-500 dark:text-gray-300">
                      <BarChart3 size={64} className="mx-auto" />
                      <p className="mt-2">Performance Trends Chart Placeholder</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Top Performers</h3>
                      <div className="space-y-3">
                        {studentPerformanceData.topPerformers.map((student, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-700 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                {idx + 1}
                              </div>
                              <span className="font-medium text-gray-900 dark:text-white">{student.name}</span>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-green-600 dark:text-white">{student.gpa}/10</div>
                              <div className="text-xs text-green-600 dark:text-gray-300">{student.improvement}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Needs Attention</h3>
                      <div className="space-y-3">
                        {studentPerformanceData.needsAttention.map((student, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-700 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">
                                !
                              </div>
                              <span className="font-medium text-gray-900 dark:text-white">{student.name}</span>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-red-600 dark:text-white">{student.gpa}/10</div>
                              <div className="text-xs text-red-600 dark:text-gray-300">{student.improvement}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <FileText size={64} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {reportTypes.find(r => r.id === selectedReport)?.name} Report
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    This report type is currently being developed.
                  </p>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Generate Sample Report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Reports</h2>
        </div>
        <div className="p-6">
          {recentReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-700 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-600 dark:text-blue-100" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{report.title}</h3>
                  <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{new Date(report.generatedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  report.status === 'ready'
                    ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200'
                }`}>
                  {report.status}
                </span>
                {report.status === 'ready' && (
                  <button className="p-2 text-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Download size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
