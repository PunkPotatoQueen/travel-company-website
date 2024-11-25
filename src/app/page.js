"use client"
import Home from '@/components/Home'
import Weather from '@/components/Weather'
import React from 'react'
import Navbar from '@/components/Navbar'


const page = () => {
  return (
    <>
      <>
        <main className="flex min-h-screen flex-col bg-gray-200">
          <Navbar />
          <div>
            <Home />
            <Weather />
          </div>
        </main>
      </>
    </>
  )
}

export default page