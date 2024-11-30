import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  BookOpen, 
  Users, 
  Terminal, 
  Star, 
  CheckCircle 
} from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-indigo-800 mb-6">
          Tutourly Tech Class
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Empowering Tech Enthusiasts through Comprehensive Programming Courses
        </p>
        
        <div className="flex justify-center space-x-4 mb-16">
          <Link 
            to="/register" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg 
            hover:bg-indigo-700 transition transform hover:scale-105 
            flex items-center gap-2 shadow-lg"
          >
            <Users /> Register
          </Link>
          <Link 
            to="/courses" 
            className="border-2 border-indigo-600 text-indigo-600 
            px-6 py-3 rounded-lg hover:bg-indigo-50 
            flex items-center gap-2 transition transform hover:scale-105"
          >
            <Code /> View Courses
          </Link>
          <Link 
            to="/all-pro-courses" 
            className="border-2 border-indigo-600 text-indigo-600 
            px-6 py-3 rounded-lg hover:bg-indigo-50 
            flex items-center gap-2 transition transform hover:scale-105"
          >
            <Code /> Professional Courses
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <Terminal className="text-indigo-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
            <p className="text-gray-600">
              Cutting-edge programming courses covering latest technologies
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <BookOpen className="text-green-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry professionals with real-world experience
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <Star className="text-yellow-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Hands-on Learning</h3>
            <p className="text-gray-600">
              Practical projects and interactive coding sessions
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;