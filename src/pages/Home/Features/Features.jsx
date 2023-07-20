import React, { useState } from 'react'
import { sectionWide } from '../../../utiles/tailwindClasses'

const Features = () => {
  const [features, setFeatures] = useState([])
  fetch('features.json')
    .then(res => res.json())
    .then(data => setFeatures(data))
  return (
    <section className={sectionWide}>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-4'>
        {features.map(({ id, name, details, img, bg }) => (
          <div
            key={id}
            className={`${bg} p-6 rounded-2xl hover:-translate-y-2 transform transition duration-300 my-12`}
          >
            <lord-icon
              src={img}
              target="div"
              trigger="hover"
              colors="primary:#1B9C85"
              style={{ width: "60px", height: "60px" }}
            ></lord-icon>
            <h2 className='mt-5 text-xl font-bold text-primary'>{name}</h2>
            <p className='mt-4 text-[#555]'>{details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
