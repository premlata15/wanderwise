import React from "react";
import { Heart, Github, Linkedin, Twitter, Mail, Code } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@premlta.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4 group">
              {/* Custom SVG Logo */}
              <div className="relative mr-3">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  {/* Outer circle with gradient */}
                  <defs>
                    <linearGradient
                      id="logoGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                      />
                    </linearGradient>
                    <linearGradient
                      id="logoGradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#06b6d4", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>

                  {/* Background circle */}
                  <circle
                    cx="25"
                    cy="25"
                    r="23"
                    fill="url(#logoGradient)"
                    opacity="0.2"
                  />
                  <circle
                    cx="25"
                    cy="25"
                    r="23"
                    fill="none"
                    stroke="url(#logoGradient)"
                    strokeWidth="2"
                  />

                  {/* Letter P with modern design */}
                  <path
                    d="M 18 15 L 18 35 M 18 15 L 28 15 Q 33 15 33 20 Q 33 25 28 25 L 18 25"
                    fill="none"
                    stroke="url(#logoGradient2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />

                  {/* Accent dot */}
                  <circle cx="35" cy="32" r="2.5" fill="url(#logoGradient)">
                    <animate
                      attributeName="opacity"
                      values="1;0.3;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  WANDERWISE
                </span>
                <span className="text-xs text-gray-500 font-mono tracking-wider">
                  CREATIVE DEVELOPER
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-gray-400 text-sm">
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#features"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#famous-trip"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Famous Trip
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0 flex items-center">
            &copy; 2026 premltaChaudhary. All rights reserved.
          </p>
          <p className="flex items-center">
            Made with{" "}
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> by
            premltaChaudhary
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
