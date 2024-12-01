import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { 
  Code, 
  Book, 
  Monitor, 
  Cpu, 
  Layers, 
  PieChart, 
  Database, 
  Share2, 
  Star,
  Coffee,
  Server  
} from 'lucide-react';

const courseCategories = [
  {
    category: 'Programming Fundamentals',
    courses: [
      {
        id: 1,
        title: 'Web Development Basics',
        shortDescription: 'Learn HTML, CSS, and JavaScript from scratch',
        price: 19.99,
        duration: '4 weeks',
        icon: <Code className="w-12 h-12 text-blue-600" />,
        curriculum: [
          'HTML5 fundamentals',
          'CSS styling techniques',
          'JavaScript basics',
          'Simple web page creation',
          'Responsive design principles'
        ]
      },
      {
        id: 2,
        title: 'Python Programming for Beginners',
        shortDescription: 'Master Python programming from ground zero',
        price: 24.99,
        duration: '6 weeks',
        icon: <Cpu className="w-12 h-12 text-green-600" />,
        curriculum: [
          'Python syntax and structure',
          'Data types and variables',
          'Control structures',
          'Functions and modules',
          'Basic data manipulation'
        ]
      },
      {
        id: 3,
        title: 'Introduction to Java',
        shortDescription: 'Start your journey into Java programming',
        price: 29.99,
        duration: '6 weeks',
        icon: <Coffee className="w-12 h-12 text-orange-500" />,
        curriculum: [
          'Setting up the Java environment',
          'Understanding object-oriented programming',
          'Java syntax and basics',
          'Working with classes and objects',
          'Simple application development'
        ]
      },
      {
        id: 4,
        title: 'C++ Essentials',
        shortDescription: 'Get a solid foundation in C++ programming',
        price: 21.99,
        duration: '5 weeks',
        icon: <Database className="w-12 h-12 text-purple-600" />,
        curriculum: [
          'Introduction to C++ and IDE setup',
          'Basic syntax and variables',
          'Control flow and loops',
          'Pointers and memory management',
          'Simple problem-solving techniques'
        ]
      },
      {
        id: 5,
        title: 'Introduction to Algorithms',
        shortDescription: 'Learn the fundamental algorithms for programming',
        price: 34.99,
        duration: '7 weeks',
        icon: <Star className="w-12 h-12 text-yellow-600" />,
        curriculum: [
          'Understanding algorithms and complexity',
          'Sorting and searching algorithms',
          'Greedy algorithms',
          'Divide-and-conquer techniques',
          'Introduction to dynamic programming'
        ]
      },
      {
        id: 6,
        title: 'Database Basics',
        shortDescription: 'Understand relational databases and SQL',
        price: 22.99,
        duration: '4 weeks',
        icon: <Server className="w-12 h-12 text-red-500" />,
        curriculum: [
          'Introduction to databases',
          'Relational database concepts',
          'SQL queries and commands',
          'Database design principles',
          'Connecting applications to databases'
        ]
      },
      {
        id: 7,
        title: 'Introduction to Data Structures',
        shortDescription: 'Master essential data structures for programming',
        price: 27.99,
        duration: '5 weeks',
        icon: <Star className="w-12 h-12 text-teal-500" />,
        curriculum: [
          'Arrays and linked lists',
          'Stacks and queues',
          'Trees and graphs',
          'Hashing and hash tables',
          'Practical implementation in code'
        ]
      },
      {
        id: 8,
        title: 'Fundamentals of Mobile App Development',
        shortDescription: 'Dive into mobile app development with Flutter',
        price: 39.99,
        duration: '8 weeks',
        icon: <Star className="w-12 h-12 text-indigo-500" />,
        curriculum: [
          'Introduction to mobile app development',
          'Dart programming language basics',
          'Building user interfaces with Flutter',
          'State management in Flutter',
          'Deploying your first mobile app'
        ]
      }
    ]
  },
  {
    category: 'Advanced Programming',
    courses: [
      {
        id: 3,
        title: 'Advanced JavaScript',
        shortDescription: 'Deep dive into modern JavaScript techniques',
        price: 29.99,
        duration: '5 weeks',
        icon: <Share2 className="w-12 h-12 text-yellow-600" />,
        curriculum: [
          'ES6+ features',
          'Async programming',
          'Promises and async/await',
          'DOM manipulation',
          'Modern framework basics'
        ]
      },
      {
        id: 4,
        title: 'C# Programming',
        shortDescription: 'Complete C# programming for Windows and .NET',
        price: 34.99,
        duration: '7 weeks',
        icon: <Monitor className="w-12 h-12 text-purple-600" />,
        curriculum: [
          'C# language fundamentals',
          'Object-oriented programming',
          'Windows application development',
          '.NET framework basics',
          'Basic game development'
        ]
      }
    ]
  },
  {
    category: 'Data Science & Analytics',
    courses: [
      {
        id: 5,
        title: 'Python for Data Science',
        shortDescription: 'Data analysis and machine learning basics',
        price: 39.99,
        duration: '8 weeks',
        icon: <Database className="w-12 h-12 text-indigo-600" />,
        curriculum: [
          'NumPy and Pandas',
          'Data cleaning techniques',
          'Basic machine learning',
          'Statistical analysis',
          'Data visualization'
        ]
      },
      {
        id: 6,
        title: 'Data Visualization Mastery',
        shortDescription: 'Create compelling data stories with visualization',
        price: 27.99,
        duration: '5 weeks',
        icon: <PieChart className="w-12 h-12 text-red-600" />,
        curriculum: [
          'Matplotlib basics',
          'Seaborn library',
          'Interactive visualizations',
          'Data storytelling',
          'Dashboard creation'
        ]
      }
    ]
  },
  {
    category: 'Computer Science Fundamentals',
    courses: [
      {
        id: 7,
        title: 'Algorithms and Data Structures',
        shortDescription: 'Master problem-solving and efficient coding',
        price: 44.99,
        duration: '8 weeks',
        icon: <Layers className="w-12 h-12 text-teal-600" />,
        curriculum: [
          'Algorithm complexity',
          'Sorting algorithms',
          'Search techniques',
          'Data structure implementation',
          'Coding interview preparation'
        ]
      },
      {
        id: 8,
        title: 'Operating Systems Fundamentals',
        shortDescription: 'Understand how computer systems work',
        price: 32.99,
        duration: '6 weeks',
        icon: <Book className="w-12 h-12 text-orange-600" />,
        curriculum: [
          'OS architecture',
          'Process management',
          'Memory management',
          'File systems',
          'Basic system programming'
        ]
      }
    ]
  }
];

const AllProCoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('Programming Fundamentals');
  const navigate = useNavigate();

  const handleEnrollClick = (courseName, coursePrice) => {    
    navigate('/enroll', {
      state: { courseName, coursePrice },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-800 mb-6">
            Affordable Tech Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Students with Budget-Friendly, High-Quality Tech Education
          </p>
        </header>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {courseCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`
                px-4 py-2 rounded-full 
                transition-all duration-300 
                ${activeCategory === cat.category 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'}
                shadow-md
              `}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courseCategories
            .find(cat => cat.category === activeCategory)
            .courses.map((course) => (
              <div
          key={course.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden 
                     transform transition-all duration-300 hover:-translate-y-2 
                     hover:shadow-2xl"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              {course.icon}
              <h3 className="text-2xl font-bold ml-4 text-gray-800">
                {course.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-4">{course.shortDescription}</p>

            <div className="mb-4">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Duration: {course.duration}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">
                What You'll Learn:
              </h4>
              {course.curriculum.map((item) => (
                <div
                  key={item}
                  className="flex items-center text-sm text-gray-600 mb-1"
                >
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-3xl font-bold text-green-600">
                ${course.price}
              </span>
              <button
                className="bg-indigo-600 text-white 
                           px-6 py-3 rounded-lg 
                           hover:bg-indigo-700 
                           transition-colors 
                           flex items-center gap-2"
                onClick={() => handleEnrollClick(course.title, course.price)}
              >
                <Book className="w-5 h-5" />
                Enroll Now
              </button>
            </div>
          </div>
        </div>
            ))}
        </div>

        {/* Student Support Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">
            Student Support
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            We understand the financial challenges students face. Our courses are priced affordably, 
            with flexible payment options and student discounts available. Our mission is to make 
            quality tech education accessible to everyone passionate about learning.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
                to="/financial-aid"
                className="bg-green-600 text-white 
                px-6 py-3 rounded-lg 
                hover:bg-green-700 
                transition-colors flex items-center justify-center"
            >
                Financial Aid
            </Link>
            <Link 
                to="/scholarship-info"
                className="border-2 border-indigo-600 text-indigo-600 
                px-6 py-3 rounded-lg 
                hover:bg-indigo-50 
                transition-colors flex items-center justify-center"
            >
                Scholarship Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProCoursesPage;