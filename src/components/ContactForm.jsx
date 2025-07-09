import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaBook } from 'react-icons/fa';
import laptopImage from '../assets/laptop.jpg';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    specialization: '',
    terms: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Your inquiry has been sent! We'll get back to you within 24 hours.");
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interest: '',
      specialization: '',
      terms: false,
      message: ''
    });
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-start relative font-[Poppins] overflow-hidden"
      style={{
        backgroundImage: `url(${laptopImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="container mx-auto pt-6 md:pt-10 pb-6 md:pb-12 flex flex-col md:flex-row relative z-10 px-4">
        {/* Left Content */}
        <div className="text-white mb-6 md:mb-0 mt-4 pt-4 md:pt-[100px] md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
            Unlock Your Potential <br className="hidden md:block" />
            With Ziya Academy
          </h1>
          <p className="text-sm sm:text-base md:text-xl">
            From school education to professional IT training<br className="hidden md:block" />
            Your complete learning solutions.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full">
          <div className="text-white text-center mb-4 md:mb-6 pt-6 md:pt-[80px]">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Get Started</h2>
            <p className="text-xs sm:text-sm md:text-base mt-1">
              Fill out the form below and we'll get back to you
            </p>
          </div>

          <div className="w-full max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-8 shadow-xl border border-white/20">
            <form onSubmit={handleSubmit} className="p-3 md:p-5">
              {/* Common Fields */}
              {[
                { field: 'fullName', icon: <FaUser /> },
                { field: 'email', icon: <FaEnvelope /> },
                { field: 'phone', icon: <FaPhoneAlt /> }
              ].map(({ field, icon }) => (
                <div className="mb-3 md:mb-4" key={field}>
                  <label htmlFor={field} className="block text-white mb-1 text-sm md:text-base">
                    {field === 'fullName' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Phone Number'}
                  </label>
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-blue-600 transition-colors text-sm md:text-base">
                      {icon}
                    </span>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full pl-9 md:pl-10 py-2 bg-white/90 rounded-lg border-0 focus:ring-2 focus:ring-blue-600 outline-none transition-shadow text-sm md:text-base"
                      required
                    />
                  </div>
                </div>
              ))}

              {/* Interest */}
              <div className="mb-3 md:mb-4">
                <label htmlFor="interest" className="block text-white mb-1 text-sm md:text-base">
                  I'm Interested In
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-blue-600 transition-colors text-sm md:text-base">
                    <FaBook />
                  </span>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full pl-9 md:pl-10 py-2 bg-white/90 rounded-lg border-0 focus:ring-2 focus:ring-blue-600 outline-none appearance-none text-sm md:text-base"
                    required
                  >
                    <option value="" disabled>Choose Your Area Of Interest</option>
                    <option value="school">School Education LKG To +2</option>
                    <option value="other">NIOS (National Institute Of Open School)</option>
                    <option value="other">IGNOU (Distance Learning)</option>
                    <option value="intership">Professional Internship Program</option>
                    <option value="service">IT Service And Solutions</option>
                  </select>
                </div>
              </div>

              {/* Specialization */}
              {formData.interest === 'intership' && (
                <SelectBox
                  label="Choose Internship Program"
                  name="specialization"
                  value={formData.specialization}
                  options={[
                    'Python Development',
                    'React.js Development',
                    'Flutter Mobile Development',
                    'UI/UX Design',
                    'MERN Stack Development',
                    'Software Testing & QA'
                  ]}
                  onChange={handleChange}
                />
              )}

              {formData.interest === 'school' && (
                <SelectBox
                  label="Choose your class"
                  name="specialization"
                  value={formData.specialization}
                  options={[
                    'Plus Two (12th Grade)',
                    'Plus One (11th Grade)',
                    'Classes 6th to 10th',
                    'Classes 1st to 5th',
                    'UKG (Upper Kindergarten)',
                    'LKG (Lower Kindergarten)'
                  ]}
                  onChange={handleChange}
                />
              )}

              {formData.interest === 'service' && (
                <SelectBox
                  label="Choose the service you need"
                  name="specialization"
                  value={formData.specialization}
                  options={[
                    'Mobile App Development',
                    'Web Application Development',
                    'Dashboard & Analytics Solutions',
                    'E-commerce Solutions',
                    'Custom Software Development'
                  ]}
                  onChange={handleChange}
                />
              )}

              {/* Terms Checkbox */}
              {formData.specialization && (
                <div className="mb-3 md:mb-4 flex items-center group">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4 md:h-5 md:w-5 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    required
                  />
                  <label htmlFor="terms" className="text-white text-sm md:text-base">T&C Applied</label>
                </div>
              )}

              {/* Message */}
              <div className="mb-4 md:mb-6">
                <label htmlFor="message" className="block text-white mb-1 text-sm md:text-base">
                  Message or Specific Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full py-2 px-3 bg-white/90 rounded-lg border-0 focus:ring-2 focus:ring-blue-600 outline-none resize-none text-sm md:text-base"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-6 rounded-2xl transition duration-300 uppercase focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 text-sm md:text-base"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable SelectBox Component
const SelectBox = ({ label, name, value, options, onChange }) => (
  <div className="mb-3 md:mb-4">
    <label htmlFor={name} className="block text-white mb-1 text-sm md:text-base">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full py-2 bg-white/90 rounded-lg border-0 focus:ring-2 focus:ring-blue-600 outline-none appearance-none text-sm md:text-base"
      required
    >
      <option value="" disabled>Select your option</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.toLowerCase().replace(/\s+/g, '-')}>{opt}</option>
      ))}
    </select>
  </div>
);

export default ContactForm;