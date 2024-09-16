import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
        <nav className="bg-white text-black p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
            <img src="https://static.epagine.fr/mediaweb3/6/logo_epagine_hexa.png" alt="logo epagine" className=' h-20' />
          <div className="space-x-6">
            <Link href="/livres">Livres</Link>
            <Link href="/auteurs">Auteurs</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/a-propos">À propos</Link>
          </div>
          <div className="flex items-center">
            <input type="text" placeholder="Je cherche un livre..." className="mr-4 p-2 border rounded" />
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Contact</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
