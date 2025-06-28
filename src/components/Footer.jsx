import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import icon from '../assets/icon.webp'; 

export default function Footer() {
  return (
    <section className="bg-[#03232e] text-white px-6 md:px-8 py-12">
      {/* Logo and Description */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-6">
        <div className="flex items-start gap-4">
          <img src={icon} alt="ZiyaAcademy Logo" className="h-20 w-auto" />
          <div className="py-2">
            <h1 className="text-2xl font-bold text-blue-500">ZiyaAcademy</h1>
            <p className="text-sm text-green-500">KEY TO SUCCESS</p>
          </div>
        </div>
        <p className="text-sm text-white mt-4 md:mt-10 md:ml-8 max-w-xl">
          Providing quality education and training with proven results and student satisfaction since 2010.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm pt-12">
        {/* Follow Us */}
        <div>
          <h2 className="font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-3 text-xl">
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
        <div>
          <h2 className="font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h2 className="font-bold mb-3">Programs</h2>
          <ul className="space-y-2 text-gray-300">
            <li>School Coaching</li>
            <li>NIOS/IGOU</li>
            <li>Web development</li>
            <li>Internships</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold mb-3">Contact Us</h2>
          <div className="flex items-start gap-2 mb-3 text-gray-300">
            <MdLocationOn className="text-green-400 mt-1" />
            <p>
              Muppathadam Rd, near Muthukkad Temple,<br />
              Muppathadam, Edayar, Aluva, Kerala 683110
            </p>
          </div>
          <div className="flex items-center gap-2 mb-2 text-gray-300">
            <MdEmail className="text-green-400" />
            <span>+91 7306353515</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MdPhone className="text-green-400" />
            <span>ziyaacademyedu@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-white/20 text-white text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 Ziya Academy. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </section>
  );
}
