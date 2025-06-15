import React from 'react'

export default function Footer() {
    const footerYear= new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <p>copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}
