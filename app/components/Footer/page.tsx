import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import ScrollVelocity from '../scrollVelocity/pages';

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
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/doctors" className="hover:underline">Doctors</Link></li>
          <li><Link href="/appointments" className="hover:underline">Appointments</Link></li>
          <li><Link href="/management" className="hover:underline">Management</Link></li>
        </ul>
      </div>
      {/* Legal & Social */}
      <div>
        <h4 className="font-semibold mb-2">Legal & Social</h4>
        <ul className="mb-4">
          <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
        </ul>
        <div className="flex space-x-4">
          <Link href="#"><Facebook className="w-6 h-6 hover:text-white" /></Link>
          <Link href="#"><Twitter className="w-6 h-6 hover:text-white" /></Link>
          <Link href="#"><Instagram className="w-6 h-6 hover:text-white" /></Link>
        </div>
      </div>
    </div>
    <div className="mt-8 border-gray-700 pt-4 text-center text-sm">
      © {new Date().getFullYear()} MediList. All rights reserved.
    </div>
  </footer>
);

export default Footer;
