'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/DSC_1520.jpg"
          alt="Blake Morgan"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/60" />
      </div>
      
      {/* Content positioned on the right side on desktop, centered on mobile */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:items-end lg:flex-row lg:justify-end">
          <div className={`max-w-2xl text-center lg:text-right transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Name and Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-200 via-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                Blake Morgan
              </span>
            </h1>
            
            <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-8 font-light drop-shadow-lg">
              <p className="mb-2">Performer • Musician</p>
              <p className="mb-4">Music Director</p>
              <p className="text-lg sm:text-xl text-blue-100 font-medium">Member AEA</p>
            </div>

            {/* Key Skills */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 mb-10">
              {['Theatre', 'Music Direction', 'Piano','Percussion'].map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    index % 3 === 0 
                      ? 'bg-red-600/20 border-red-400/50 text-red-200' 
                      : index % 3 === 1 
                      ? 'bg-blue-600/20 border-blue-400/50 text-blue-200'
                      : 'bg-purple-600/20 border-purple-400/50 text-purple-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center lg:items-end">
              <a
                href="#contact"
                className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-2xl hover:shadow-teal-600/25 text-lg"
              >
                Get In Touch
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-teal-400 text-teal-300 bg-black/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-all duration-200 shadow-xl text-lg"
              >
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex justify-center lg:justify-end space-x-4">
              <a
                href="https://blakemorgan.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal-300 transition-colors duration-200 backdrop-blur-sm bg-black/20 p-3 rounded-full hover:scale-110"
                aria-label="Website"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/blakemorgan.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal-300 transition-colors duration-200 backdrop-blur-sm bg-black/20 p-3 rounded-full hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@blakemorgan.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal-300 transition-colors duration-200 backdrop-blur-sm bg-black/20 p-3 rounded-full hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.263-1.895-1.374-2.927-.02-.197-.03-.396-.03-.595V.5h-3.942v11.541c0 1.717-1.394 3.111-3.111 3.111s-3.111-1.394-3.111-3.111 1.394-3.111 3.111-3.111c.344 0 .677.056.989.159V5.348a7.057 7.057 0 0 0-.989-.07C4.382 5.278.5 9.16.5 13.859s3.882 8.581 8.581 8.581 8.581-3.882 8.581-8.581V9.325a9.46 9.46 0 0 0 5.338 1.644V7.027a5.618 5.618 0 0 1-3.679-1.465z"/>
                </svg>
              </a>
              <a
                href="https://resumes.actorsaccess.com/blakemorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal-300 transition-colors duration-200 backdrop-blur-sm bg-black/20 p-3 rounded-full hover:scale-110"
                aria-label="Actors Access"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </a>
              <a
                href="mailto:blake@blakemorgan.me"
                className="text-white/70 hover:text-teal-300 transition-colors duration-200 backdrop-blur-sm bg-black/20 p-3 rounded-full hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll indicator - positioned under content on mobile, bottom center on desktop */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 animate-bounce-gentle">
            <a href="#about" className="flex items-center justify-center w-12 h-12 text-white/60 hover:text-teal-300 transition-colors bg-black/40 backdrop-blur-sm rounded-full shadow-lg border border-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;