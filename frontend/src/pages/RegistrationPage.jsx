import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Check } from 'lucide-react';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    interests: []
  });

  const courseInterests = [
    'Web Development', 
    'Mobile App Development', 
    'Data Science', 
    'Machine Learning', 
    'Cybersecurity',
    
    // Web Development
    'HTML & CSS for Beginners',
    'JavaScript Basics',
    'Responsive Web Design',
    'Advanced JavaScript',
    'React.js Fundamentals',
    'Vue.js for Beginners',
    'Angular for Developers',
    'Node.js and Express',
    'Django for Web Development',
    'Ruby on Rails',
    'Full Stack Web Development with MERN (MongoDB, Express, React, Node.js)',
    'Next.js for Static and Server-Side Rendering',
    'Web Accessibility Best Practices',
    'Progressive Web Apps (PWA)',
    'GraphQL API Development',
    'Web Performance Optimization',
    'Web Security Essentials',
    'GraphQL with Apollo',
    'Serverless Architecture with AWS Lambda',
    'Building Microservices with Node.js',
  
    // Mobile App Development
    'Introduction to Mobile App Development',
    'Flutter for Beginners',
    'React Native Basics',
    'Android Development with Kotlin',
    'iOS Development with Swift',
    'Advanced Flutter Development',
    'Cross-Platform App Development',
    'Building APIs for Mobile Apps',
    'Augmented Reality (AR) in Mobile Apps',
    'Mobile App UI/UX Design',
    'Mobile App Testing & Debugging',
    'Push Notifications for Mobile Apps',
    'Database Management for Mobile Apps',
    'App Store Optimization (ASO)',
    'Advanced iOS Features (Core Data, SwiftUI, etc.)',
    'Android Advanced Topics (Kotlin Coroutines, Jetpack Compose, etc.)',
  
    // Data Science
    'Introduction to Data Science',
    'Python for Data Science',
    'Data Wrangling and Cleaning',
    'Exploratory Data Analysis with Pandas',
    'Statistical Analysis for Data Science',
    'Data Visualization with Matplotlib and Seaborn',
    'Machine Learning with Scikit-learn',
    'Deep Learning with TensorFlow and Keras',
    'Natural Language Processing (NLP)',
    'Time Series Analysis',
    'Data Science for Business',
    'Data Science Project Management',
    'SQL for Data Science',
    'Big Data Tools (Hadoop, Spark)',
    'Building Data Pipelines',
    'Data Science with R',
    'Predictive Analytics',
    'Data Ethics and Privacy',
    'Data Science in Healthcare',
    'Reinforcement Learning',
  
    // Machine Learning
    'Introduction to Machine Learning',
    'Supervised Learning: Regression & Classification',
    'Unsupervised Learning: Clustering & Dimensionality Reduction',
    'Deep Learning Fundamentals',
    'Neural Networks from Scratch',
    'Convolutional Neural Networks (CNN)',
    'Recurrent Neural Networks (RNN) & LSTMs',
    'Reinforcement Learning',
    'Natural Language Processing (NLP) with Machine Learning',
    'Generative Adversarial Networks (GANs)',
    'Ensemble Methods (Random Forest, XGBoost, etc.)',
    'Support Vector Machines (SVM)',
    'Model Evaluation and Hyperparameter Tuning',
    'Transfer Learning',
    'AI and Ethics',
    'AI in Healthcare',
    'Scalable Machine Learning with TensorFlow',
    'Deploying ML Models to Production',
    'ML for Computer Vision',
    'ML for Audio and Speech Recognition',
  
    // Cybersecurity
    'Introduction to Cybersecurity',
    'Network Security Basics',
    'Cryptography and Encryption Techniques',
    'Ethical Hacking and Penetration Testing',
    'Advanced Penetration Testing',
    'Web Application Security (OWASP Top 10)',
    'Security Operations and Incident Response',
    'Cybersecurity for Cloud Computing',
    'Cybersecurity for IoT Devices',
    'Firewalls, VPNs, and IDS/IPS',
    'Malware Analysis and Reverse Engineering',
    'Risk Management and Cybersecurity Frameworks',
    'Digital Forensics and Incident Response',
    'Social Engineering and Phishing Attacks',
    'Advanced Persistent Threats (APTs)',
    'Wireless Network Security',
    'Security in DevOps and CI/CD',
    'Blockchain Security',
    'Cyber Threat Intelligence',
    'Ethical Hacking with Kali Linux',
  
    // Programming Languages
  
    // Python
    'Python for Beginners',
    'Advanced Python Programming',
    'Python for Web Development (Flask, Django)',
    'Python for Data Science',
    'Python for Automation/Scripting',
    'Machine Learning with Python',
    'Deep Learning with Python',
    'Python for Networking and Security',
    'Python for Game Development',
  
    // JavaScript
    'JavaScript Fundamentals',
    'Advanced JavaScript (ES6 and beyond)',
    'Asynchronous Programming in JavaScript',
    'JavaScript for Backend Development (Node.js)',
    'Building Full-Stack Applications with JavaScript',
    'JavaScript Design Patterns',
    'Testing JavaScript Applications',
    'JavaScript Frameworks (React.js, Angular, Vue.js)',
  
    // Java
    'Java for Beginners',
    'Object-Oriented Programming with Java',
    'Java for Android Development',
    'Advanced Java Concepts (Streams, Lambdas, etc.)',
    'Java and Spring Boot for Backend Development',
    'Concurrency and Multithreading in Java',
  
    // C/C++
    'C Programming for Beginners',
    'Advanced C Programming',
    'C++ for Beginners',
    'Data Structures and Algorithms in C/C++',
    'Systems Programming in C',
    'C++ Design Patterns',
    'Low-Level Programming with C',
  
    // Ruby
    'Ruby for Beginners',
    'Building Web Apps with Ruby on Rails',
    'Ruby for Test-Driven Development (TDD)',
    'Ruby and Database Management',
  
    // Go (Golang)
    'Go Programming for Beginners',
    'Concurrency in Go',
    'Building Web Applications with Go',
    'Go for Microservices',
    'Advanced Go Techniques',
  
    // Algorithms & Data Structures
    'Introduction to Algorithms',
    'Sorting Algorithms (Merge Sort, Quick Sort, etc.)',
    'Searching Algorithms (Binary Search, DFS/BFS)',
    'Dynamic Programming',
    'Graph Algorithms (Dijkstra, A*)',
    'Data Structures: Arrays, Stacks, Queues',
    'Trees and Binary Search Trees',
    'Heaps and Priority Queues',
    'Hashing Techniques',
    'Advanced Data Structures (Trie, Segment Trees, etc.)',
    'String Matching and Parsing Algorithms',
    'Greedy Algorithms',
    'Divide and Conquer Algorithms',
    'Network Flow Algorithms',
    'Computational Geometry Algorithms',
    'Parallel Algorithms',
    'Algorithms for Big Data',
    'Approximation Algorithms',
  
    // Cloud Computing & DevOps
    'Introduction to Cloud Computing',
    'AWS Fundamentals',
    'Azure Fundamentals',
    'Google Cloud Platform (GCP) Basics',
    'Cloud Architecture and Design',
    'Cloud Security Best Practices',
    'DevOps Basics',
    'Continuous Integration/Continuous Deployment (CI/CD)',
    'Docker and Containerization',
    'Kubernetes for Orchestration',
    'Infrastructure as Code (Terraform, CloudFormation)',
    'Microservices and Cloud-Native Development',
    'Serverless Computing with AWS Lambda',
    'Monitoring and Logging in Cloud Environments',
    'Building Scalable Applications on the Cloud',
  
    // Artificial Intelligence & Robotics
    'Introduction to AI',
    'AI for Problem Solving',
    'Robotics and Autonomous Systems',
    'AI in Robotics',
    'Computer Vision for AI',
    'Speech Recognition AI',
    'AI for Game Development',
    'Building Chatbots with AI',
    'Ethical AI and Bias Mitigation',
    'AI for Healthcare',
    'Swarm Robotics',
  
    // Blockchain & Cryptocurrencies
    'Blockchain Basics',
    'Ethereum and Smart Contracts',
    'Building Decentralized Apps (DApps)',
    'Cryptography in Blockchain',
    'Blockchain Security',
    'Bitcoin and Cryptocurrency Fundamentals',
    'NFTs (Non-Fungible Tokens)',
    'Developing Smart Contracts with Solidity',
    'Blockchain Development with Hyperledger',
    'Blockchain for Finance and Supply Chain'
  ];
  

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      // Send registration data to server
      const response = await axios.post('https://quick-up.onrender.com/register', formData);

      // Reset form data
      setFormData({
        name: '',
        email: '',
        password: '',
        interests: []
      });

      // Show success message
      alert('Registration successful!');

      // Redirect to homepage
      navigate('/');

    } catch (error) {
      console.error('Registration error:', error);
      
      // Handle specific error cases
      if (error.response) {
        alert(error.response.data.message || 'Registration failed');
      } else {
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          Join Tech Tutorial Class
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input 
              type="text" 
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input 
              type="password" 
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-purple-700 mb-4">
              Select Your Interests
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {courseInterests.map(interest => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`
                    flex items-center justify-center py-2 rounded-lg 
                    transition-all duration-300 
                    ${formData.interests.includes(interest) 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-100 text-purple-800'}
                  `}
                >
                  {formData.interests.includes(interest) && <Check className="mr-2" />}
                  {interest}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-purple-700 text-white py-3 rounded-lg 
            hover:bg-purple-800 transition transform hover:scale-105 
            flex items-center justify-center"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;