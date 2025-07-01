import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import icon from '../assets/icon4.png'; 

export default function Footer() {
  return (
    <section className="bg-[#03232e] text-white px-4 md:px-8 py-8 md:py-12">
      {/* Logo and Description - Centered on mobile */}
      <div className="flex justify-center md:justify-start md:pl-[230px] mx-auto">
        <div className="flex items-start space-x-3 mb-6 md:mb-0">
          <img src={icon} alt="ZiyaAcademy Logo" className="h-16 w-14 md:h-18 md:w-16" />
          <div className="font-[Poppins]">
            <h1 className="text-xl md:text-2xl font-bold text-blue-500">ZiyaAcademy</h1>
            <p className="text-xs md:text-sm text-green-500">KEY TO SUCCESS</p>
          </div>
        </div>
      </div>

      {/* Footer Columns - Stacked on mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-sm pt-6 md:pt-12">
        {/* Follow Us */}
        <div className="font-[Poppins] text-center md:text-left">
          <h2 className="font-bold mb-3 text-lg md:text-base">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-3 text-xl">
            <a href="#" aria-label="Facebook" className="bg-white text-black p-2 rounded-md shadow-md">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube" className="bg-white text-black p-2 rounded-md shadow-md">
              <FaYoutube />
            </a>
            <a href="#" aria-label="LinkedIn" className="bg-white text-black p-2 rounded-md shadow-md">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="bg-white text-black p-2 rounded-md shadow-md">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="font-[Poppins] text-center md:text-left">
          <h2 className="font-bold mb-3 text-lg md:text-base">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-300">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300">Services</a></li>
            <li><a href="#" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div className="font-[Poppins] text-center md:text-left">
          <h2 className="font-bold mb-3 text-lg md:text-base">Programs</h2>
          <ul className="space-y-2">
            <li className="text-gray-300 hover:text-blue-300">
              School Coaching
            </li>
            <li className="text-gray-300 hover:text-blue-300">
              NIOS/IGOU
            </li>
            <li className="text-gray-300 hover:text-blue-300">
              Web development
            </li>
            <li className="text-gray-300 hover:text-blue-300">
              Internships
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="font-[Poppins] text-center md:text-left">
          <h2 className="font-bold mb-3 text-lg md:text-base">Contact Us</h2>
          <div className="flex flex-col items-center md:items-start gap-2 mb-3 text-gray-300">
            <div className="flex items-start gap-2">
              <MdLocationOn className="text-green-400 mt-1" />
              <p className="text-sm">
                Muppathadam Rd, near Muthukkad Temple,<br />
                Muppathadam, Edayar, Aluva, Kerala 683110
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2 mb-2 text-gray-300">
            <MdEmail className="text-green-400" />
            <span className="text-sm">+91 7306353515</span>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2 text-gray-300">
            <MdPhone className="text-green-400" />
            <span className="text-sm">ziyaacademyedu@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Stacked on mobile */}
      <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-700 text-white text-sm flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
        <div className="text-center md:text-left font-[Poppins]">
          <a>© 2025 Ziya Academy. All Rights Reserved.</a>
        </div>
        <div className="flex gap-3 md:gap-4">
          <a href="#" className="hover:underline text-sm">Privacy Policy</a>
          <a href="#" className="hover:underline text-sm">Terms of Service</a>
        </div>
      </div>
    </section>
  );
}