'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <nav className="bg-white text-black p-4 shadow-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <img src="https://static.epagine.fr/mediaweb3/6/logo_epagine_hexa.png" alt="logo epagine" className="h-16 md:h-20" />
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto md:space-x-6 mt-4 md:mt-0`}>
            <Link href="/livres" className="block md:inline-block hover:underline hover:text-blue-600 transition duration-300 mb-2 md:mb-0">Livres</Link>
            <Link href="/auteurs" className="block md:inline-block hover:underline hover:text-blue-600 transition duration-300 mb-2 md:mb-0">Auteurs</Link>
            <Link href="/articles" className="block md:inline-block hover:underline hover:text-blue-600 transition duration-300 mb-2 md:mb-0">Articles</Link>
            <Link href="/a-propos" className="block md:inline-block hover:underline hover:text-blue-600 transition duration-300 mb-2 md:mb-0">À propos</Link>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center w-full md:w-auto mt-4 md:mt-0`}>
            <input type="text" placeholder="Je cherche un livre..." className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 p-2 border rounded" />
            <button className="w-full md:w-auto bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded">Contact</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
