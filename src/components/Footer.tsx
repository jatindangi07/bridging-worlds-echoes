
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Mail, ExternalLink, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mahmudabad-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Dr. Ali Khan Mahmudabad</h3>
            <p className="text-gray-300 text-sm">
              Historian, Political Scientist, Public Intellectual, and Civic Leader
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com/alimahmudabad" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mahmudabad-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@alimahmudabad.com" className="text-gray-300 hover:text-mahmudabad-gold transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://www.ashoka.edu.in/profile/ali-khan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mahmudabad-gold transition-colors" aria-label="Academic Profile">
                <BookOpen size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Site Map</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-mahmudabad-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-mahmudabad-gold transition-colors">About</Link></li>
              <li><Link to="/scholarship" className="text-gray-300 hover:text-mahmudabad-gold transition-colors">Scholarship</Link></li>
              <li><Link to="/public-voice" className="text-gray-300 hover:text-mahmudabad-gold transition-colors">Public Voice</Link></li>
              <li><Link to="/civic-action" className="text-gray-300 hover:text-mahmudabad-gold transition-colors">Civic Action</Link></li>
              <li><Link to="/heritage" className="text-gray-300 hover:text-mahmudabad-gold transition-colors">Heritage</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Affiliations</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.ashoka.edu.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mahmudabad-gold transition-colors flex items-center">
                  Ashoka University <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mahmudabad-gold transition-colors flex items-center">
                  Shoulder 2 Shoulder Foundation <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mahmudabad-gold transition-colors flex items-center">
                  Madrassatul Waizeen <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Department of History & Political Science</p>
              <p>Ashoka University</p>
              <p>Sonipat, Haryana, India</p>
              <p className="pt-2">
                <a href="mailto:contact@alimahmudabad.com" className="hover:text-mahmudabad-gold transition-colors">
                  contact@alimahmudabad.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Dr. Ali Khan Mahmudabad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
