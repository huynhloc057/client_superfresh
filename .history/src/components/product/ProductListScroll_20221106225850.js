import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getProductByCategory } from '../../app/features/productSlice'
import ProductCard from './ProductCard'

const ProductListScroll = ({category}) => {
  const dispatch = useDispatch()
  const { isLoading, products, category, categories } = useSelector(
    (state) => state.product
  )
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getProductByCategory(category._id))
  }, [category, dispatch])

  const [filteredProducts, setFilteredProducts] = useState()

  useLayoutEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <div className='movie-list'>
      <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
        {products?.length > 0 &&
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
