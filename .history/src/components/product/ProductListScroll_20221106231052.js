import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
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
            <NavLink
      key={item._id}
      to={`/product/${item._slug}`}
      className="flex-1 p-4 m-4 bg-white cursor-pointer rounded-xl shadow-sdproduct hover:shadow-sdproduct hover:scale-105"
    >
      <img src={`${thumbnailUrl}`} alt="" className="object-cover h-[70%] w-full" />
      <h3 className="mt-3 mb-1 text-xs leading-5 line-clamp-2 text-textProduct">
        {name}
      </h3>

      <div className="flex items-center gap-x-1">
      <div className="flex">
          <IconStar></IconStar>
          <IconStar></IconStar>
          <IconStar></IconStar>
          <IconStar></IconStar>
          <IconStar></IconStar>
        </div>
        <div className="w-[1px] h-2 bg-slag"></div>
        <span className="text-xs text-textSell">Đã bán {quantitySell}</span>
      </div>
      <div className="flex items-center mt-1 text-textProduct">
        <span className="text-base font-semibold"> {nf.format(price)}đ</span>
      </div>
    </NavLink>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default ProductListScroll
