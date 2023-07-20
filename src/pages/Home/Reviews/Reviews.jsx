import React, { useState } from 'react'
import Slider from 'react-slick'
import ReviewCard from '../../../components/Cards/ReviewCard'
// import { settings } from '../../../utiles/slider'
import { sectionTitle, sectionWide } from '../../../utiles/tailwindClasses'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section className={`${sectionWide} mt-20`}>
      <h2 className={sectionTitle}>From Our Customer</h2>
      <Slider {...settings}>
        {
          reviews?.map((item, index) => <ReviewCard key={index} data={item} />)
        }
      </Slider>
    </section>
  )
}

export default Reviews
