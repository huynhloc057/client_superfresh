import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getProductByCategory } from '../../app/features/productSlice'
import ProductCard from './ProductCard'

const ProductListScroll = ({ category }) => {
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductByCategory(category._id))
  }, [category._id, dispatch])
  console.log(products)
  return (
    <div className='product-list'>
      <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
        {products?.length > 0 &&
          products.map((item) => (
            <SwiperSlide key={item._id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default ProductListScroll
