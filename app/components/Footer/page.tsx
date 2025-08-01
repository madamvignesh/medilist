import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-ebony-950 text-gray-200 py-10 border-t">
    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* About */}
      <div>
        <h3 className="text-xl font-semibold mb-2">MediList</h3>
        <p>Your trusted healthcare platform — connecting you to care, one click at a time.</p>
      </div>
      {/* Navigation Links */}
      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/doctors" className="hover:underline">Doctors</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      {/* Legal & Social */}
      <div>
        <h4 className="font-semibold mb-2">Legal & Social</h4>
        <ul className="mb-4">
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
        </ul>
        <div className="flex space-x-4">
          <a href="#"><Facebook className="w-6 h-6 hover:text-white"/></a>
          <a href="#"><Twitter className="w-6 h-6 hover:text-white"/></a>
          <a href="#"><Instagram className="w-6 h-6 hover:text-white"/></a>
        </div>
      </div>
    </div>
    <div className="mt-8 border-gray-700 pt-4 text-center text-sm">
      © {new Date().getFullYear()} MediList. All rights reserved.
    </div>
  </footer>
);

export default Footer;
