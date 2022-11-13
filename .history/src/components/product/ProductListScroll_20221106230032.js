import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getProductByCategory } from '../../app/features/productSlice'
import ProductCard from './ProductCard'

const ProductListScroll = ({category}) => {
  return (
    <div className='movie-list'>
      <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
        {category?.length > 0 &&
          category.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default ProductListScroll
