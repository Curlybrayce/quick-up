import React, { useState } from 'react';
import { 
  DollarSign, 
  BookOpen, 
  CreditCard, 
  Handshake, 
  CheckCircle, 
  HelpCircle 
} from 'lucide-react';

const FinancialAidPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const financialAidOptions = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Scholarship Programs",
      description: "Merit-based and need-based scholarships for talented students",
      details: [
        "Full and partial tuition scholarships",
        "Academic performance scholarships",
        "Diversity and inclusion grants"
      ]
    },
    {
      icon: <CreditCard className="w-12 h-12 text-green-600 mb-4" />,
      title: "Payment Plans",
      description: "Flexible financing options to make education accessible",
      details: [
        "Zero-interest installment plans",
        "Semester-based payment schedules",
        "Customizable payment options"
      ]
    },
    {
      icon: <Handshake className="w-12 h-12 text-purple-600 mb-4" />,
      title: "Corporate Sponsorships",
      description: "Partnerships with tech companies for student support",
      details: [
        "Company-sponsored learning programs",
        "Internship opportunities",
        "Potential job placement assistance"
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    aidType: 'scholarship',
    additionalDetails: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add financial aid application logic
    console.log('Financial Aid Application:', formData);
    alert('Your application has been submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <DollarSign className="mx-auto w-16 h-16 text-indigo-700 mb-6" />
          <h1 className="text-5xl font-bold text-indigo-800 mb-6">
            Financial Aid & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Breaking Down Financial Barriers to Tech Education
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {financialAidOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg text-center 
              hover:shadow-xl transition transform hover:-translate-y-3"
            >
              {option.icon}
              <h3 className="text-2xl font-semibold mb-4 text-indigo-800">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <ul className="space-y-2 text-left pl-5 text-gray-700">
                {option.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">
            Financial Aid Application
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-indigo-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                  focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-indigo-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                  focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-indigo-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-indigo-700 mb-2">Type of Financial Aid</label>
              <select 
                name="aidType"
                value={formData.aidType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                focus:outline-none focus:border-indigo-500"
              >
                <option value="scholarship">Scholarship</option>
                <option value="paymentPlan">Payment Plan</option>
                <option value="corporateSponsorship">Corporate Sponsorship</option>
              </select>
            </div>
            
            <div>
              <label className="block text-indigo-700 mb-2">
                Additional Details <HelpCircle className="inline w-5 h-5 text-indigo-500" />
              </label>
              <textarea 
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                focus:outline-none focus:border-indigo-500"
                placeholder="Share any additional information that supports your financial aid application"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-lg 
              hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Submit Financial Aid Application
            </button>
          </form>
        </section>

        <section className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-8">
            Financial Aid FAQ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-700 mb-4">
                Who is Eligible?
              </h4>
              <p className="text-gray-600">
                We offer financial aid to students based on merit, financial need, 
                and potential to excel in tech fields.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-700 mb-4">
                Application Process
              </h4>
              <p className="text-gray-600">
                Complete our online application, provide necessary documentation, 
                and await review by our financial aid committee.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FinancialAidPage;