"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'

const navLinks = [
  {
    title: 'Sobre',
    path: '#sobre'
  },
  {
    title: 'Planos de viagem',
    path: '#planos'
  },
  {
    title: 'Contato',
    path: '#contato'
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-10 ${navbarOpen ? 'bg-cyan-700 bg-opacity-50' : 'bg-cyan-50'}`}>
      <div className='flex flex-wrap items-center justify-between px-8 py-4'>
        <Link className='text-2xl md:text-5xl text-white font-semibold ' href={'/'}>
          < img className='w-10' src="/images/logo.png" alt="Viaje.com logo" />
        </Link>
        <div className='mobile-menu ml-auto block md:hidden'>
          {
            !navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white bg-cyan-700 bg-opacity-50' 
              >
                <Image src="/images/bars-icon.png" alt="Open Menu" width={20} height={20} />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className='text-slate-200 flex items-center px-3 py-2 border rounded border-cyan-900 hover:text-white hover:border-white bg-cyan-800 '
              >
                <Image src="/images/xmark-icon.png" alt="Close Menu" width={20} height={20} />
              </button>
            )
          }
        </div>
        <div className='menu md:w-auto' id='navbar'>
          <ul className="hidden md:flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {
        navbarOpen && <MenuOverlay links={navLinks} />
      }
    </nav>
  )
}

export default Navbar
