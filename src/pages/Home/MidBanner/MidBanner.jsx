import React from 'react'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
const midBannerImg = "https://cdni.iconscout.com/illustration/premium/thumb/delivery-man-giving-delivery-box-to-woman-5968967-4929802.png"

const MidBanner = () => {
  return (
    <section className='bg-green-200 mt-20'>
      <div className='flex lg:flex-row-reverse flex-col items-center gap-8 max-w-7xl mx-auto px-4 lg:py-24 py-5'>
        <div className='lg:w-1/2'>
          <div className='max-w-[560px]'>
            <span className='text-error text-lg flex items-center gap-2'><PiShoppingCartSimpleBold/>Summer Deal</span>
            <h1 className='lg:text-4xl text-3xl font-bold leading-24 mt-4'>The Mega-Madness Extravaganza: Unleashing Unbelievable <span className='text-primary'>Discounts!</span></h1>
            <p className='mt-10 text-lg leading-6'>Prepare yourself for an unprecedented shopping frenzy! Our Mega-Madness Extravaganza is here, bringing you jaw-dropping discounts on a colossal selection of products.</p>
          </div>
        </div>
        <div className='lg:w-1/2'>
          <img src={midBannerImg} className='' alt='midbanner repliq shop' />
        </div>
      </div>
    </section>
  )
}

export default MidBanner