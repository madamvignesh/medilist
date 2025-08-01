import React from 'react';
import {
  BadgeCheck,
  Users,
  ClipboardCopy,
  BellRing,
  HeartHandshake,
} from 'lucide-react';

interface Feature {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: BadgeCheck,
    title: 'Wide Specialization Coverage',
    description: 'Experts across various medical fields, verified and trusted.',
  },
  {
    Icon: Users,
    title: 'Trusted Medical Professionals',
    description: 'A network of verified doctors you can rely on.',
  },
  {
    Icon: ClipboardCopy,
    title: 'Easy Appointment Booking',
    description: 'Schedule your appointment in just a few clicks.',
  },
  {
    Icon: BellRing,
    title: '24×7 Availability Notifications',
    description: 'Get real-time updates when a doctor is available.',
  },
  {
    Icon: HeartHandshake,
    title: 'Patient-Centric Interface',
    description: 'Designed with empathy and ease-of-use in mind.',
  },
];

const WhyOnlyMediList: React.FC = () => (
  <section className="py-12 bg-ebony-950">
    <h2 className="text-3xl font-bold text-center mb-8 text-ebony-50">
      Why Only MediList
    </h2>
    <div className="p-5 mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {features.map(({ Icon, title, description }) => (
        <div
          key={title}
          className="flex flex-col items-center text-center p-6 bg-ebony-400 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Icon className="w-12 h-12 text-ebony-800 mb-4 hover:w-16 hover:h-16 transition-all" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyOnlyMediList;
