import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaBook, FaClipboardCheck } from 'react-icons/fa';
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
    setFormData(prevState => ({
      ...prevState,
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
    <div id="contact"
      className="min-h-screen flex flex-col md:flex-row items-start relative"
      style={{
        backgroundImage: `url(${laptopImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

      <div className="absolute inset-0 bg-green-400 opacity-50"></div>

      <div className="container mx-auto px-4 pt-10 pb-12 flex flex-col md:flex-row relative z-10">

        {/* Left Content */}
        <div className="text-white mb-8 md:mb-0 md:pr-10 mt-4 pt-[60px] md:pt-[100px] md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Unlock Your Potential <br className="hidden md:block"/>With Ziya Academy</h1>
          <p className="text-base md:text-xl">
            From school education to professional IT training<br className="hidden md:block"/>
            Your complete learning solutions.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full">
          <div className="text-white text-center mb-6 pt-10 md:pt-[80px] px-4">
            <h2 className="text-2xl md:text-4xl font-bold">Get Started</h2>
            <p className="text-sm md:text-base">Fill out the form below and we'll get <br className="hidden md:block" /> back to you within 24 hours</p>
          </div>

          <div className="w-full max-w-md mx-auto bg-white/30 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-xl">
            <form onSubmit={handleSubmit}>
              {/* Form Fields */}
              {[{ field: 'fullName', icon: <FaUser /> }, { field: 'email', icon: <FaEnvelope /> }, { field: 'phone', icon: <FaPhoneAlt /> }].map(({ field, icon }) => (
                <div className="mb-4" key={field}>
                  <label htmlFor={field} className="block text-white mb-1">
                    {field === 'fullName' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Phone Number'}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      {icon}
                    </span>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full pl-10 py-2 bg-white rounded border-0 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>
              ))}

              {/* Interest Field */}
              <div className="mb-4">
                <label htmlFor="interest" className="block text-white mb-1">I'm Interested In</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaBook />
                  </span>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 bg-white rounded border-0 focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                    required
                  >
                    <option value="" disabled>Choose Your Area Of Interest</option>
                    <option value="other">School Education LKG To +2</option>
                    <option value="other">NIOS (National Institute Of Open School)</option>
                    <option value="other">IGNOU (Distance Learning)</option>
                    <option value="intership">Professional Internship Program</option>
                    <option value="other">IT Service And Solutions</option>
                  </select>
                </div>
              </div>

              {/* Specialization Field */}
              {formData.interest === 'intership' && (
                <div className="mb-4">
                  <label htmlFor="specialization" className="block text-white mb-1">Choose Internship Program</label>
                  <select
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full py-2 bg-white rounded border-0 focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                    required
                  >
                    <option value="" disabled>Select your specialization</option>
                    <option value="python">Python Development</option>
                    <option value="react">React.js Development</option>
                    <option value="flutter">Flutter Mobile Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="mern">MERN Stack Development</option>
                    <option value="testing">Software Testing & QA</option>
                  </select>
                </div>
              )}

              {/* Terms Checkbox */}
              {formData.specialization && (
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="terms" className="text-white">T&C Applied</label>
                </div>
              )}

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-1">Message or Specific Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full py-2 px-3 bg-white rounded border-0 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition duration-300 uppercase"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
