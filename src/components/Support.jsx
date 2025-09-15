import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  Book, 
  MessageCircle, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronRight,
  Play,
  FileText,
  Bug,
  Lightbulb
} from 'lucide-react';

const Support = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [supportTicket, setSupportTicket] = useState({
    subject: '',
    category: 'technical',
    description: ''
  });

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I set up my mentor profile?',
          answer: 'Navigate to the Profile section from the sidebar and click "Edit Profile". Fill in your personal information, academic details, and subjects you teach.'
        },
        {
          question: 'How do I add students to my mentorship?',
          answer: 'Go to Student Management and click "Add Student". You can manually add students or import them from a CSV file.'
        }
      ]
    },
    {
      title: 'Student Management',
      faqs: [
        {
          question: 'How do I track student attendance?',
          answer: 'Use the Attendance System to mark attendance manually, upload Excel files, or connect Google Sheets for automatic syncing.'
        },
        {
          question: 'What is the Risk Analysis feature?',
          answer: 'Risk Analysis uses AI to identify students at risk of dropping out based on attendance, performance, and engagement patterns.'
        }
      ]
    },
    {
      title: 'Assignments & Grading',
      faqs: [
        {
          question: 'How do I create and distribute assignments?',
          answer: 'In the Assignments section, click "Create Assignment", fill in the details, attach files, and set deadlines. Students will be automatically notified.'
        },
        {
          question: 'How does the grading system work?',
          answer: 'You can grade submissions directly in the platform, provide feedback, and export grades to external systems.'
        }
      ]
    }
  ];

  const tutorials = [
    {
      title: 'Platform Overview',
      duration: '5:30',
      description: 'Complete walkthrough of the mentor dashboard features',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      title: 'Student Risk Analysis Setup',
      duration: '8:15',
      description: 'Learn how to use AI-powered risk analysis tools',
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      title: 'Attendance Management',
      duration: '6:45',
      description: 'Master all attendance tracking methods',
      thumbnail: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    console.log('Support ticket submitted:', supportTicket);
    setSupportTicket({ subject: '', category: 'technical', description: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Help & Support</h1>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <MessageCircle size={18} />
            <span>Live Chat</span>
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Phone size={18} />
            <span>Call Support</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <HelpCircle className="text-blue-500" size={24} />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Frequently Asked Questions</h2>
              </div>
            </div>
            
            <div className="p-6">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">{category.title}</h3>
                  <div className="space-y-3">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex;
                      return (
                        <div key={faqIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                          <button
                            onClick={() => toggleFaq(globalIndex)}
                            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <span className="font-medium text-gray-900 dark:text-gray-100">{faq.question}</span>
                            {expandedFaq === globalIndex ? (
                              <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                            ) : (
                              <ChevronRight size={20} className="text-gray-500 dark:text-gray-400" />
                            )}
                          </button>
                          {expandedFaq === globalIndex && (
                            <div className="px-4 pb-3 text-gray-700 dark:text-gray-300">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Tutorials */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Play className="text-green-500" size={24} />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Video Tutorials</h2>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-50 flex items-center justify-center rounded-lg group-hover:bg-opacity-50 transition-all">
                        <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <Play className="text-gray-800 dark:text-gray-900" size={20} />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {tutorial.duration}
                      </span>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                        {tutorial.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tutorial.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Support */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Support</h3>
            
            <div className="space-y-4">
              <div className="p-4 border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <MessageCircle className="text-blue-600" size={20} />
                  <span className="font-medium text-blue-900 dark:text-blue-300">Live Chat</span>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200">Available 24/7 for immediate assistance</p>
              </div>

              <div className="p-4 border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="text-green-600" size={20} />
                  <span className="font-medium text-green-900 dark:text-green-300">Phone Support</span>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200">+1 (555) 123-HELP</p>
                <p className="text-sm text-green-800 dark:text-green-200">Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div className="p-4 border border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Mail className="text-orange-600" size={20} />
                  <span className="font-medium text-orange-900 dark:text-orange-300">Email Support</span>
                </div>
                <p className="text-sm text-orange-800 dark:text-orange-200">support@mentordashboard.com</p>
                <p className="text-sm text-orange-800 dark:text-orange-200">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Submit Ticket */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Submit Support Ticket</h3>
            
            <form onSubmit={handleSupportSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={supportTicket.subject}
                  onChange={(e) => setSupportTicket({...supportTicket, subject: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <select
                  value={supportTicket.category}
                  onChange={(e) => setSupportTicket({...supportTicket, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  <option value="technical">Technical Issue</option>
                  <option value="account">Account Problem</option>
                  <option value="feature">Feature Request</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  rows={4}
                  value={supportTicket.description}
                  onChange={(e) => setSupportTicket({...supportTicket, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Detailed description of your issue or question"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Ticket
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h3>
            
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <FileText className="text-gray-500 dark:text-gray-400" size={18} />
                <span className="text-sm text-gray-700 dark:text-gray-300">User Manual</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Bug className="text-gray-500 dark:text-gray-400" size={18} />
                <span className="text-sm text-gray-700 dark:text-gray-300">Report Bug</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Lightbulb className="text-gray-500 dark:text-gray-400" size={18} />
                <span className="text-sm text-gray-700 dark:text-gray-300">Feature Requests</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Book className="text-gray-500 dark:text-gray-400" size={18} />
                <span className="text-sm text-gray-700 dark:text-gray-300">API Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
