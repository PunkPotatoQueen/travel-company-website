"use client"
import Home from '@/components/Home'
import Weather from '@/components/Weather'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'
import ClientOpinion from '@/components/ClientOpinion'


const page = () => {
  return (
    <>
      <>
        <main className="flex min-h-screen flex-col bg-gray-200">
          <Navbar />
          <div>
            <Home />
            <Weather />
            <ClientOpinion />
            <ContactUs />
          </div>
          <Footer />
        </main>
      </>
    </>
  )
}

export default page