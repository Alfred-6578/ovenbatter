import Navbar from '@/components/common/Navbar'
import CategoryMarquee from '@/components/homepage/CategoryMarquee'
import Hero from '@/components/homepage/Hero'
import React from 'react'


const HomePage = () => {
  return (
    <div className=''>
        <Navbar />
        <div className="h-30"></div>
        <main className=''>
            <Hero />
            <CategoryMarquee />
        </main>
    </div>
  )
}

export default HomePage