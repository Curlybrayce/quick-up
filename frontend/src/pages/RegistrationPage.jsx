import React, { useState } from 'react';
import { User, Mail, Lock, Check } from 'lucide-react';

const RegistrationPage = () => {
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
    'Cybersecurity'
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Registration Data:', formData);
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