import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import icon from '../assets/icon4.png'; 

export default function Footer() {
  return (
    <section className="bg-[#03232e] text-white px-4 md:px-8 py-10 pt-12">
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and Follow Us */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-start space-x-3 mb-6">
                <img 
                  src={icon} 
                  alt="ZiyaAcademy Logo" 
                  className="h-12 w-10 sm:h-16 sm:w-14 md:h-18 md:w-16" 
                />
                <div className="font-[Poppins]">
                  <h1 className="text-xl sm:text-2xl font-bold text-blue-500">ZiyaAcademy</h1>
                  <p className="text-xs sm:text-sm text-green-500">KEY TO SUCCESS</p>
                </div>
              </div>

              {/* Follow Us */}
              <div className="w-full">
                <h2 className="font-bold mb-4 text-lg">Follow Us</h2>
                <div className="flex justify-center lg:justify-start space-x-3 text-xl">
                  <a href="#" aria-label="Facebook" className="bg-white text-black p-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"><FaFacebookF /></a>
                  <a href="#" aria-label="YouTube" className="bg-white text-black p-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"><FaYoutube /></a>
                  <a href="#" aria-label="LinkedIn" className="bg-white text-black p-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"><FaLinkedinIn /></a>
                  <a href="#" aria-label="Instagram" className="bg-white text-black p-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"><FaInstagram /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold mb-4 text-lg">Quick Links</h2>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold mb-4 text-lg">Programs</h2>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">School Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">NIOS/IGNOU</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform">Internships</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold mb-4 text-lg">Contact Us</h2>
            <div className="flex flex-col gap-3 mb-3 text-gray-300">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex items-start gap-2">
                  <MdLocationOn className="text-green-400 mt-1 min-w-[20px]" />
                  <p className="text-sm text-left max-w-xs">
                    Muppathadam Rd, near Muthukkad Temple,<br />Muppathadam, Edayar, Aluva, Kerala 683110
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <div className="flex items-center gap-2"><MdPhone className="text-green-400" /><a href="tel:+917306353515" className="text-sm hover:text-blue-400 transition-colors duration-300">+91 7306353515</a></div>
              <div className="flex items-center gap-2"><MdEmail className="text-green-400" /><a href="mailto:ziyaacademyedu@gmail.com" className="text-sm hover:text-blue-400 transition-colors duration-300">ziyaacademyedu@gmail.com</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8">
          <div className="text-center font-[Poppins]"><span>© 2025 Ziya Academy. All Rights Reserved.</span></div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}