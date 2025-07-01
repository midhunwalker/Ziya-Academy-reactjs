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
      className="min-h-screen flex flex-col md:flex-row items-start relative font-[Poppins]"
      style={{
        backgroundImage: `url(${laptopImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

      <div className="absolute inset-0 bg-green-400 opacity-50"></div>

      <div className="container pt-6 md:pt-10 pb-6 md:pb-12 flex flex-col md:flex-row relative">
        {/* Left Content - Mobile responsive */}
        <div className="text-white mb-6 md:mb-0 mt-4 pt-4 md:pt-[100px] md:w-1/2 px-4 md:pl-[70px]">
          <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
            Unlock Your Potential <br className="hidden md:block"/>With Ziya Academy
          </h1>
          <p className="text-sm md:text-xl">
            From school education to professional IT training<br className="hidden md:block"/>
            Your complete learning solutions.
          </p>
        </div>

        {/* Right Form Section - Mobile responsive */}
        <div className="md:w-1/2 w-full px-4 md:pl-[200px]">
          <div className="text-white text-center mb-4 md:mb-6 pt-6 md:pt-[80px]">
            <h2 className="text-xl md:text-4xl font-bold">Get Started</h2>
            <p className="text-xs md:text-base mt-1">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="w-full max-w-md mx-auto bg-white/30 backdrop-blur-sm rounded-lg p-4 md:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className='p-3 md:p-5'>
              {/* Form Fields */}
              {[{ field: 'fullName', icon: <FaUser /> }, { field: 'email', icon: <FaEnvelope /> }, { field: 'phone', icon: <FaPhoneAlt /> }].map(({ field, icon }) => (
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
                      className="w-full pl-9 md:pl-10 py-2 bg-white rounded border-0 focus:ring-2 focus:ring-blue-600 outline-none transition-shadow text-sm md:text-base"
                      required
                    />
                  </div>
                </div>
              ))}

              {/* Interest Field */}
              <div className="mb-3 md:mb-4">
                <label htmlFor="interest" className="block text-white mb-1 text-sm md:text-base">I'm Interested In</label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-blue-600 transition-colors text-sm md:text-base">
                    <FaBook />
                  </span>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full pl-9 md:pl-10 py-2 bg-white rounded border-0 focus:ring-2 focus:ring-blue-600 outline-none appearance-none text-sm md:text-base"
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
                <div className="mb-3 md:mb-4">
                  <label htmlFor="specialization" className="block text-white mb-1 text-sm md:text-base">Choose Internship Program</label>
                  <div className="group">
                    <select
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      className="w-full py-2 bg-white rounded border-0 focus:ring-2 focus:ring-blue-600 outline-none appearance-none text-sm md:text-base"
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
                </div>
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

              {/* Message Field */}
              <div className="mb-4 md:mb-6">
                <label htmlFor="message" className="block text-white mb-1 text-sm md:text-base">Message or Specific Requirements</label>
                <div className="group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full py-2 px-3 bg-white rounded border-0 focus:ring-2 focus:ring-blue-600 outline-none resize-none text-sm md:text-base"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 md:py-3 px-4 rounded transition duration-300 uppercase focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 text-sm md:text-base"
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