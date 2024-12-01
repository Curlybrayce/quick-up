import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  Cpu, 
  BookOpen, 
  Star, 
  CheckCircle 
} from 'lucide-react';

const coursesData = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    category: 'Web Development',
    level: 'Beginner to Advanced',
    duration: '12 weeks',
    price: 499,
    icon: <Code className="w-12 h-12 text-blue-600" />,
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    description: 'Comprehensive web development course covering frontend and backend technologies with hands-on projects.',
    highlights: [
      'Full-stack JavaScript curriculum',
      'Real-world project development',
      'Career support and portfolio building'
    ]
  },
  {
    id: 2,
    title: 'Data Science Masterclass',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '16 weeks',
    price: 699,
    icon: <Database className="w-12 h-12 text-green-600" />,
    technologies: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'TensorFlow'],
    description: 'Advanced data science program covering statistical analysis, machine learning, and AI applications.',
    highlights: [
      'Machine learning algorithms',
      'Data visualization techniques',
      'Capstone real-world project'
    ]
  },
  {
    id: 3,
    title: 'Cloud Computing Professional',
    category: 'Cloud Technology',
    level: 'Advanced',
    duration: '10 weeks',
    price: 599,
    icon: <Cloud className="w-12 h-12 text-purple-600" />,
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    description: 'Comprehensive cloud computing course focusing on infrastructure, deployment, and scalable solutions.',
    highlights: [
      'Cloud certification preparation',
      'Hands-on cloud architecture design',
      'DevOps and containerization'
    ]
  },
  {
    id: 4,
    title: 'Cybersecurity Essentials',
    category: 'Cybersecurity',
    level: 'Intermediate',
    duration: '8 weeks',
    price: 449,
    icon: <Server className="w-12 h-12 text-red-600" />,
    technologies: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Security Protocols'],
    description: 'Comprehensive cybersecurity course covering network protection, ethical hacking, and security best practices.',
    highlights: [
      'Practical security testing',
      'Incident response training',
      'Industry-recognized certifications'
    ]
  },
  {
    id: 5,
    title: 'AI and Machine Learning',
    category: 'Artificial Intelligence',
    level: 'Advanced',
    duration: '14 weeks',
    price: 749,
    icon: <Cpu className="w-12 h-12 text-indigo-600" />,
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Neural Networks', 'Deep Learning'],
    description: 'Advanced AI and machine learning course exploring neural networks, deep learning, and intelligent systems.',
    highlights: [
      'Advanced neural network design',
      'AI model development',
      'Research-driven curriculum'
    ]
  }
];

const CoursesPage = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const categories = [
    'All', 
    'Web Development', 
    'Data Science', 
    'Cloud Technology', 
    'Cybersecurity', 
    'Artificial Intelligence'
  ];

  const filteredCourses = filter === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === filter);

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
            Our Tech Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform Your Tech Career with Our Expert-Led, Comprehensive Programming Courses
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-4 py-2 rounded-full 
                transition-all duration-300 
                ${filter === category 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'}
                shadow-md
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden 
              transform transition-all duration-300 hover:-translate-y-2 
              hover:shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {course.icon}
                  <h3 className="text-xl font-bold ml-4 text-gray-800">
                    {course.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {course.level}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Star className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  {course.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Technologies Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-indigo-50 text-indigo-600 
                        text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Course Highlights:
                  </h4>
                  {course.highlights.map((highlight) => (
                    <div 
                      key={highlight} 
                      className="flex items-center text-sm text-gray-600 mb-1"
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${course.price}
                  </span>
                  <button 
                    className="bg-indigo-600 text-white 
                    px-4 py-2 rounded-lg 
                    hover:bg-indigo-700 
                    transition-colors"
                    onClick={() => handleEnrollClick(course.title, course.price)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;