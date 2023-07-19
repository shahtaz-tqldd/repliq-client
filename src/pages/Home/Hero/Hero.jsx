import React from 'react'
const heroImg = "https://www.ordefy.com/wp-content/themes/ordefy-blog/main-assets/images/ordefy-banner.png"

const Hero = () => {
  return (
    <section className='flex lg:flex-row flex-col items-center gap-8 max-w-7xl mx-auto px-4 py-5'>
      <div className='lg:w-1/2'>
        <div className='max-w-[560px]'>
          <h1 className='text-4xl font-bold leading-16'>Discover Limitless Possibilities at <span className='text-primary'>Repliq shop</span></h1>
          <p className='mt-4 text-lg leading-6'>Welcome to our online store, where endless options await. Explore our vast collection of products, curated to cater to your unique needs and desires.</p>
          <div className='mt-8 flex gap-4'>
            <button className='btn btn-primary normal-case text-base-100'>Start Explore</button>
            <button className='btn btn-primary btn-outline normal-case text-base-100'>See Catelog</button>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2'>
        <img src={heroImg} className='' alt='hero section repliq shop' />
      </div>
    </section>
  )
}

export default Hero
