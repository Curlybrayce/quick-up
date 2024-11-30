import React from 'react';
import { 
  Target, 
  Globe, 
  Award, 
  Users, 
  BookOpen, 
  Rocket 
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-teal-800 mb-6">
            About Tech Tutorial Class
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Tech Education through Innovative, Practical Learning Experiences
          </p>
        </header>
        
        <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <Target className="text-teal-600 w-16 h-16 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4 text-teal-800">
              Our Mission
            </h3>
            <p className="text-gray-600 text-center">
              Empower aspiring tech professionals with cutting-edge skills, practical knowledge, 
              and industry-relevant training to succeed in the rapidly evolving tech landscape.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <Globe className="text-blue-600 w-16 h-16 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-800">
              Global Perspective
            </h3>
            <p className="text-gray-600 text-center">
              Connecting learners worldwide through comprehensive online and in-person 
              programming courses that transcend geographical boundaries.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <Rocket className="text-purple-600 w-16 h-16 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-center mb-4 text-purple-800">
              Future-Ready Learning
            </h3>
            <p className="text-gray-600 text-center">
              Continuously updating curriculum to align with the latest technological 
              advancements, ensuring our students are always ahead of the curve.
            </p>
          </div>
        </section>
        
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
            Why Choose Tech Tutorial Class?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
              <Award className="text-yellow-600 w-12 h-12 mr-6 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-3 text-teal-700">
                  Certified Instructors
                </h4>
                <p className="text-gray-600">
                  Learn from industry experts with real-world experience and professional certifications.
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
              <Users className="text-green-600 w-12 h-12 mr-6 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-3 text-teal-700">
                  Community-Driven Learning
                </h4>
                <p className="text-gray-600">
                  Collaborative environment with peer learning, mentorship, and networking opportunities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
              <BookOpen className="text-indigo-600 w-12 h-12 mr-6 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-3 text-teal-700">
                  Comprehensive Curriculum
                </h4>
                <p className="text-gray-600">
                  Structured courses covering theoretical foundations and practical application across various tech domains.
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
              <Rocket className="text-red-600 w-12 h-12 mr-6 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-3 text-teal-700">
                  Career Acceleration
                </h4>
                <p className="text-gray-600">
                  Job placement assistance, portfolio building, and industry connections to kickstart your tech career.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;