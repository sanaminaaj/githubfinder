// src/components/AboutUs.jsx
import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center text-primary">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        GitHub Finder is a React-based web application built to help users search for GitHub profiles easily and get quick access to detailed developer stats.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        This project uses the GitHub REST API and provides a clean user experience using ReactJS and Tailwind CSS. It's designed for developers to practice and demonstrate frontend skills, API integration, and modern web development practices.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Built with ❤️ by a passionate developer aiming to simplify developer networking and exploration on GitHub.
      </p>
    </div>
  );
}
