import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#0D9488]">NIXRIX</span>
              <span className="ml-2 text-sm text-gray-400">LTD</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Decision-Intelligent Websites for SMEs
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <MapPin size={16} className="mr-2" />
                Leeds, UK
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Mail size={16} className="mr-2" />
                help@nixrix.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  Business Websites
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  KPI Dashboards
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  AI Chatbots
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#06B6D4] text-sm transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NIXRIX LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}