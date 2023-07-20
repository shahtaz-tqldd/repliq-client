import React, { useEffect, useState } from 'react'
import { sectionTitle, sectionWide } from '../../../utiles/tailwindClasses'
import { Link } from 'react-router-dom'
import ProductCard from '../../../components/Cards/ProductCard'
import '../../../assets/styles/primary.css'

const HomeProducts = () => {
  const [homeProducts, setHomeProducts] = useState(null)
  useEffect(() => {
    fetch('https://fashionista-server.vercel.app/products/')
      .then(res => res.json())
      .then(data => setHomeProducts(data))
  }, [])
  return (
    <section className={sectionWide}>
      <h1 className={sectionTitle}>Hot deals</h1>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
        {
          homeProducts?.slice(0, 8).map((item, index) => <ProductCard key={index} data={item} index={index} />)
        }
      </div>
      <div className='flex justify-center mt-16'>
        <Link to='/products'>
          <button className='btn btn-primary btn-outline normal-case text-white px-6 btn-icon'>
            See All Products
            <lord-icon
              target="button"
              src="https://cdn.lordicon.com/zmkotitn.json"
              trigger="hover"
              class="current-color"
              style={{ width: "20px", height: "20px" }}>
            </lord-icon>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default HomeProducts
