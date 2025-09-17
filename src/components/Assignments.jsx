import React, { useState } from 'react';
import {
  Plus,
  Upload,
  FileText,
  Calendar,
  Eye,
  Edit3,
  Download,
  AlertCircle,
  Star
} from 'lucide-react';

const Assignments = () => {
  const [activeTab, setActiveTab] = useState('assignments');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const assignments = [
    {
      id: 1,
      title: 'Data Structures Implementation',
      description: 'Implement binary trees, linked lists, and hash tables',
      dueDate: '2024-01-15',
      subject: 'Data Structures',
      totalSubmissions: 45,
      pendingSubmissions: 12,
      attachments: ['assignment.pdf', 'sample_code.zip'],
      status: 'active'
    },
    {
      id: 2,
      title: 'Machine Learning Project',
      description: 'Build a classification model using Python and scikit-learn',
      dueDate: '2024-01-20',
      subject: 'Machine Learning',
      totalSubmissions: 38,
      pendingSubmissions: 8,
      attachments: ['project_requirements.pdf', 'dataset.csv'],
      status: 'active'
    }
  ];

  const submissions = [
    {
      id: 1,
      studentName: 'Alex Johnson',
      studentId: 'CS2021001',
      assignmentTitle: 'Data Structures Implementation',
      submittedAt: '2024-01-14 14:30',
      files: ['binary_tree.py', 'linked_list.py'],
      status: 'submitted',
      grade: null,
      feedback: ''
    },
    {
      id: 2,
      studentName: 'Sarah Chen',
      studentId: 'CS2021002',
      assignmentTitle: 'Data Structures Implementation',
      submittedAt: '2024-01-13 16:45',
      files: ['complete_implementation.zip'],
      status: 'graded',
      grade: 92,
      feedback: 'Excellent implementation with clean code structure!'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold dark:text-[#2196F3]" >
          Assignments & Projects
        </h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white"
          style={{ backgroundColor: '#0057D9' }}
        >
          <Plus size={18} />
          <span>Create Assignment</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-black rounded-lg border border-gray-700 dark:border-[#05355c]">
        <nav className="flex space-x-8 px-6 border-b border-gray-700">
          {[
            { id: 'assignments', label: 'My Assignments', count: assignments.length },
            { id: 'submissions', label: 'Submissions', count: submissions.length },
            { id: 'grading', label: 'Pending Grading', count: 15 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 font-medium text-sm border-b-2 ${
                activeTab === tab.id
                  ? 'text-[#2196F3] border-[#2196F3]'
                  : 'text-gray-500 dark:text-white border-transparent'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>

        <div className="p-6">
          {activeTab === 'assignments' && (
            <div className="space-y-6 ">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="rounded-lg p-6 bg-white dark:bg-black border-b "
                >
                  <div className="flex justify-between items-start mb-4 ">
                    <div>
                      <h3 className="text-xl font-semibold text-[#0057D9]">
                        {assignment.title}
                      </h3>
                      <p className="mb-2">{assignment.description}</p>
                      <div className="flex space-x-4 text-gray-500 dark:text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FileText size={16} />
                          <span>{assignment.subject}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-500 hover:text-[#2196F3]">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-[#2196F3]">
                        <Edit3 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="rounded-lg p-4 bg-[#0057D9] text-white text-center">
                      <div className="text-2xl font-bold">{assignment.totalSubmissions}</div>
                      <div>Total Submissions</div>
                    </div>
                    <div className="rounded-lg p-4 bg-[#2196F3] text-white text-center">
                      <div className="text-2xl font-bold">{assignment.pendingSubmissions}</div>
                      <div>Pending</div>
                    </div>
                    <div className="rounded-lg p-4 bg-[#1976D2] text-white text-center">
                      <div className="text-2xl font-bold">
                        {assignment.totalSubmissions - assignment.pendingSubmissions}
                      </div>
                      <div>Submitted</div>
                    </div>
                  </div>

                  {assignment.attachments.length > 0 && (
                    <div>
                      <h4 className="font-medium text-[#0057D9] mb-2 dark:text-white">Attachments</h4>
                      <div className="flex flex-wrap gap-2">
                        {assignment.attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 bg-gray-800 text-white rounded-lg px-3 py-2"
                          >
                            <FileText size={16} />
                            <span>{file}</span>
                            <button>
                              <Download size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div
                  key={submission.id}
                  className="rounded-lg p-6 bg-white dark:bg-black shadow border-b"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0057D9] to-[#2196F3] rounded-full text-white flex items-center justify-center font-bold">
                        {submission.studentName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0057D9]">{submission.studentName}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {submission.studentId} • {submission.assignmentTitle}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          Submitted: {submission.submittedAt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      {submission.status === 'graded' && (
                        <div className="flex items-center space-x-2 text-green-600">
                          <Star size={16} />
                          <span className="font-semibold">{submission.grade}/100</span>
                        </div>
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        submission.status === 'graded'
                          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200'
                          : 'bg-[#2196F3] text-white'
                      }`}>
                        {submission.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {submission.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-gray-800 text-white rounded-lg px-3 py-2"
                      >
                        <FileText size={16} />
                        <span>{file}</span>
                        <button>
                          <Download size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {submission.feedback && (
                    <div className="mt-4 p-3 bg-[#1976D2] text-white rounded-lg">
                      <h5 className="font-medium">Feedback</h5>
                      <p>{submission.feedback}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'grading' && (
            <div className="text-center py-12">
              <AlertCircle size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
              <h3 className="text-lg font-medium text-[#0057D9]">Grading Queue</h3>
              <p>15 submissions pending your review</p>
              <button
                className="mt-4 px-4 py-2 text-white rounded-lg"
                style={{ backgroundColor: '#0057D9' }}
              >
                Start Grading
              </button>
            </div>
          )}
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-[#0057D9]">Create New Assignment</h2>
            </div>
            <div className="p-6 space-y-6">
              <input
                type="text"
                placeholder="Title"
                className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-[#2196F3]"
              />
              <textarea
                rows={4}
                placeholder="Description"
                className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-[#2196F3]"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-[#2196F3]">
                  <option>Data Structures</option>
                  <option>Algorithms</option>
                  <option>Machine Learning</option>
                  <option>Software Engineering</option>
                </select>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-[#2196F3]"
                />
              </div>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <Upload size={32} className="mx-auto mb-2 text-[#0057D9]" />
                <p>
                  Drag and drop files here, or <button className="text-[#2196F3]">browse</button>
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#0057D9] text-white rounded-lg"
              >
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
