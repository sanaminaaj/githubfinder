import React from 'react'
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export default function Navbar({ title }) {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <FaGithub className="text-2xl" />
          <Link to="/" className="text-xl font-semibold tracking-wide hover:text-gray-300">
            {title}
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium transition duration-200 rounded hover:bg-gray-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-sm font-medium transition duration-200 rounded hover:bg-gray-800"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: "GitHub Finder",
}
