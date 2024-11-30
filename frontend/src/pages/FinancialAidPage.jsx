import React, { useState } from 'react';
import axios from 'axios';
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
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    edulevel: '',
    school: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:5000/submit-financial-form', formData);
        
        // Reset form data
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phoneNumber: '',
          edulevel: '',
          school: '',
          aidType: 'scholarship',
          additionalDetails: ''
        });
  
        // Show success alert
        alert('Form submitted successfully!', response.message);
        Navigate('/');
        
      } catch (error) {
        // console.error('Submission error:', error);
        alert('Failed to submit your Financial Aid Application');
      }
  };

  const unis = ["University of Abuja", "University of Agriculture, Abeokuta", "University of Ado-Ekiti", "University of Benin", "University of Calabar", "University of Education, Ikere-Ekiti", "University of Ibadan",
    "University of Ilorin", "University of Jos", "University of Lagos", "University of Maiduguri", "University of Mkar, Mkar", "University of Nigeria", "University of port-harcourt", "University of Technology, Akwa-Ibom",
    "University Of Uyo", "Abia State University, Uturu", "ABTI-American University of Nigeria", "Abubakar Tafawa Balewa University", "Adamawa State University, Mubi", "Adekunle Ajasin University", "Ahmadu Bello University", "Ajayi Crowther University, Oyo",
    "Ambrose Alli University", "Bayero University, Kano", "Bells University", "Benson Idahosa University", "Bowen University, Iwo", "Cetep City University, Lagos", "Covenant University", "Crawford University, Oye Ekiti", "Cross River University of Technology",
    "Delta State University, Abraka", "Ebonyi State University", "Enugu State University of Science & Technology", "Federal University of Technology, Akure", "Federal University of Technology, Minna", "Federal University of Technology, Owerri", "Federal University Of Technology, Yola",
    "Gombe State University, Tudun, Wada", "Igbinedion University, Okada", "Imo State University", "Joseph Ayo Babalola University", "Katsina State University", "Kogi State University, Anyigba", "Ladoke Akintola University of Tech.", "Lagos State University", "Lead City University",
    "Michael Okpara University", "Nasarrawa State University", "National Open University", "Niger Delta University", "Nigerian Defence Academy", "Nnamdi Azikiwe University of Agriculture, Umudike", "Obafemi Awolowo University, Ile-Ife", "Olabisi Onabanjo University, Ago-Iwoye", "Osun State University",
    "Pan African University, Lekki", "Plateau State University", "Redeemer's University", "Renaissance University, Enugu", "Rivers State University of Science and Technology", "Salem University, Lokoja", "St. Paul's University College, Awka", "Theological College of Northern Nigeria, Bukuru", "Tai Solarin University of Education, Ijebu-Ode",
    "Usmanu Danfodiyo University, Sokoto", "Wesley University, Ondo", "Anambra State University, Anambra"
  ]

  const polys = ["Abia State polytechnic", "Adamawa State polytechnic, Yola", "Akanu Ibiam Federal polytechnic, Unwana", "Allover central polytechnic, Sango-Ota Ogun State", "Akwa Ibom State polytechnic", "Auchi polytechnic, Auchi", "Dorben polytechnic (formerly Abuja School of Accountancy and Computer Studies)", "Delta state polytechnic, Ozoro",
    "Federal polytechnic, Ado – Ekiti", "Federal polytechnic Offa", "Federal polytechnic Bida", "Federal polytechnic, Bauchi", "Federal polytechnic, Idah", "Federal polytechnic, Ilaro", "Federal polytechnic, Damaturu", "Federal polytechnic, Nassarawa", "Federal polytechnic, Mubi", "Federal polytechnic, Nekede", "Federal polytechnic, Oko",
    "Federal polytechnic, Ede", "Federal polytechnic, Birnin-Kebbi", "Federal coll. of Animal health & production Tech., Ibadan", "Gateway polytechnic Saapade", "Hussaini Adamu Federal polytechnic, Kazaure", "Institute of Management Technology, Enugu", "Kaduna polytechnic", "Kano State polytechnic, Kano", "Kwara State polytechnic", "Lagos City polytechnic",
    "Lagos City Computer College", "Lagos State polytechnic", "Niger State polytechnic, Zungeru", "Nigerian Coll. of Aviation Tech., Zaira", "Maritime Academy of Nigeria, Oron", "Moshood Abiola polytechnic, Abeokuta", "Nuhu Bamalli polytechnic, Zaria, Kaduna State", "Osun State College of Technology, Esa-Oke", "Osun State polytechnic, Iree", "Ramat polytechnic, Maiduguri",
    "River State polytechnic, Bori", "Rufus Giwa polytechnic, Owo", "Shaka polytechnic", "The polytechnic, Ibadan", "Yaba College of Tech."
  ];
  

  const colgs = ["Adeniran Ogunsanya College of Education", "Adeyemi College of Education, Ondo", "College of Education, Agbor", "College of Education, Afaha-Nsit", "College of Education, Akwanga", "College of Education, Ekiadolor", "College of Education, Ikere Ekiti",
    "College of Education, Katsina Ala", "College of Education, Zuba", "College of Education, Oro, Kwara State", "College of Education, Azare", "College of Education, Warri", "College of Education, Agbor", "College of Education, Akwanga", "College of Education, Gindiri",
    "College of Education, Katsina-Ala", "FCT College of Education, Zuba", "Federal College of Education, Zaira", "Federal College of Education, Okene", "Federal College of Education, Akoka", "Federal College of Education, Omoku", "Federal College of Education (Special), Oyo", 
    "Federal College of Education, Zaria", "Federal College of Education (Technical) Gombe", "Federal College of Education, Obudu", "Federal College of Education, Pankshin", "Federal College of Education, (Technical) Bich", "Federal College of Education (Technical) Gusau",
    "Federal College of Education, Yola", "Kano State College of Education, Kano", "Kwara State College of Education", "National Teachers Institute, Kaduna", "Nwafor Orizu College of Education", "Osun State College of Education, Ilesa", "Osun State College of Education, Ila-Orangun", "Oyo State College Of Education, Oyo", "Rivers State College of Education"
  ];

  const allSchools = [...unis, ...polys, ...colgs];
  

  const studyLevels = [
    'High School', 'Undergraduate', 'Graduate', 'PhD'
  ];


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
                <label className="block text-indigo-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                  focus:outline-none focus:border-indigo-500"
                  required
                  placeholder='firstname'
                />                
              </div>

              <div>
                <label className="block text-indigo-700 mb-2"> Last Name</label>
                <input 
                  type="text" 
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                  focus:outline-none focus:border-indigo-500"
                  required
                  placeholder='Lastname'
                /> 
              </div>
            </div>
            
            
            <div className="grid md:grid-cols-2 gap-6">
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
              <label className="block text-indigo-700 mb-2">Education Level</label>
              <select 
                name="edulevel"
                value={formData.edulevel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                focus:outline-none focus:border-indigo-500"
              >
                {studyLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-indigo-700 mb-2">Institution</label>
              <input  
                list='schoolList'
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg 
                focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <datalist id='schoolList'> 
                {allSchools.map((schlname, index) => ( 
                    <option key={index} value={schlname} /> 
                ))} 
            </datalist>

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