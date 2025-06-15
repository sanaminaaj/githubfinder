import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">oops!</h1>
          <p className="text-5xl mb-8">404- Page not found</p>
          <Link
            to="/"
            className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-md hover:scale-105 transition-transform duration-200"
          >
            <FaHome />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
