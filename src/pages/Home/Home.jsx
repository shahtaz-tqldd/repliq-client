import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import HomeProducts from './HomeProducts/HomeProducts'
import MidBanner from './MidBanner/MidBanner'
import Reviews from './Reviews/Reviews'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HomeProducts />
      <MidBanner />
      <Reviews />
    </div>
  )
}

export default Home
