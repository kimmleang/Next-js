import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white text-green-800">
      <div className="text-2xl font-bold">
        <Link href="/">
          Logo
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/product">
            Product
          </Link>
        </li>
        <li>
          <Link href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="text-lg">
        <Link href="/login">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar