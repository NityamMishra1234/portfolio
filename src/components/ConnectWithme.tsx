import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    link: 'https://github.com/nityam1111',
    color: 'bg-gray-800',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/nityamkumar',
    color: 'bg-blue-600',
  },
  {
    icon: <FaInstagram />,
    label: 'Instagram',
    link: 'https://instagram.com/your_username',
    color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    link: 'mailto:nityam1111@gmail.com',
    color: 'bg-green-600',
  },
];

const ConnectWithMe = () => {
  const handleRedirect = (url: string | URL | undefined) => {
    window.open(url, '_blank'); // Opens in a new tab
  };

  return (
    <section className="py-20 px-4 bg-black text-white" id="connect">
      <h2 className="text-4xl font-bold text-center mb-12">🔗 Connect With Me</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {socials.map((social, index) => (
          <button
            key={index}
            onClick={() => handleRedirect(social.link)}
            className={`flex items-center gap-2 ${social.color} text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200`}
          >
            <span className="text-xl">{social.icon}</span>
            <span>{social.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ConnectWithMe;
