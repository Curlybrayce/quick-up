import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Globe, 
  CreditCard, 
  Check 
} from 'lucide-react';

const EnrollmentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseName, coursePrice } = location.state || {};

  useEffect(() => {
    // Check if courseName is empty or undefined
    if (!courseName) {
      navigate('/'); // Redirect to home or another page
    }
  }, [courseName, navigate]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseName,
    country: '',
    paymentMethod: '',
    promoCode: '',
    total: ''
  });

  const [discount, setDiscount] = useState(0);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Ghana', 
    'Australia', 'Germany', 'Nigeria', 'Brazil', 'Other'
  ];

  const paymentMethods = [
    'Bank Transfer', 'Student Installment Plan'
  ];

  const promoCodeHandler = () => {
    const validPromoCodes = {
      'STUDENT2024': 0.15,  // 15% discount
      'FIRSTCOURSE': 0.10,  // 10% discount
      'TECHLEARN': 0.20      // 20% discount
    };

    const discountPercentage = validPromoCodes[formData.promoCode] || 0;
    setDiscount(discountPercentage);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.total = calculateTotal();
    // Enrollment logic would go here
    console.log(formData)
    setIsEnrolled(true);
  };

  const calculateTotal = () => {
    const basePrice = coursePrice;
    const discountAmount = basePrice * discount;
    return basePrice - discountAmount;
  };

  if (isEnrolled) {
    return (
      <div className="bg-green-50 p-8 rounded-xl text-center">
        <Check className="w-24 h-24 mx-auto text-green-600 mb-6" />
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Enrollment Successful!
        </h2>
        <p className="text-green-700 mb-4">
          You've been enrolled in {courseName}. 
          Check your email for further instructions.
        </p>
        <p className="font-semibold text-green-600">
          Total Paid: ${calculateTotal()}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-2xl rounded-xl p-8 max-w-2xl mx-auto my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Enroll in {courseName}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
              <input 
                type="text" 
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-indigo-200 rounded-lg"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-indigo-200 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-indigo-200 rounded-lg"
                required
              />
            </div>

            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-indigo-200 rounded-lg"
                required
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-indigo-200 rounded-lg"
              required
            >
              <option value="">Select Payment Method</option>
              {paymentMethods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              name="promoCode"
              placeholder="Promo Code (Optional)"
              value={formData.promoCode}
              onChange={handleInputChange}
              className="flex-grow pl-4 pr-4 py-3 border-2 border-indigo-200 rounded-lg"
            />
            <button 
              type="button"
              onClick={promoCodeHandler}
              className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600"
            >
              Apply
            </button>
          </div>

          {discount > 0 && (
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-700">
                Promo Code Applied: {(discount * 100)}% Discount
              </p>
            </div>
          )}

          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Course Price:</span>
              <span>${coursePrice}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between mb-2 text-green-600">
                <span>Discount ({(discount * 100)}%):</span>
                <span>-${(coursePrice * discount)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-4 rounded-lg 
            hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Complete Enrollment
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;