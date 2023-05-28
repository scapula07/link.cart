import React from 'react'
import HeroSection from './HeroSection'
import Featured from './featured'
import Product from './product'
import { RequestNetwork } from '@requestnetwork/request-client.js';

export default function Home() {
  return (
    <div className=''>
        <HeroSection />
        <div className='h-screen bg-white'>
          <Featured />
          <Product />
        </div>


    </div>
  )
}
