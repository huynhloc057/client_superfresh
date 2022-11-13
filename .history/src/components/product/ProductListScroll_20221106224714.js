import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from './ProductCard'

const ProductListScroll = ({products}) => {
  return (
    <div className='movie-list'>
      <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
        {products.length > 0 &&
          products.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default ProductListScroll
