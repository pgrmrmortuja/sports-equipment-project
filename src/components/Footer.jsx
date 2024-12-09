import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-black">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">EquiSports</h2>
            <p className="text-sm">
              Empowering individuals to make informed equipments team choices through beautiful products and resources.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/allEquipments"
                  className="hover:text-blue-500 transition duration-200"
                >
                  All Sports Equipment
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-blue-500 transition duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li>Email: support@equisportsteam.com</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: 123 Career Lane, Guidance City, USA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EquiSports Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
