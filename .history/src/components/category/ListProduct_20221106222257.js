import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCategories,
  getProductByCategory,
  getProducts,
} from '../../app/features/productSlice'
import ProductList from '../product/ProductList'

const ListProduct = () => {
  const dispatch = useDispatch()
  const { isLoading, products, category, categories } = useSelector(
    (state) => state.product
  )
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getProductByCategory(category._id))
    dispatch(getCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])
  const [filteredProducts, setFilteredProducts] = useState()

  useLayoutEffect(() => {
    setFilteredProducts(products)
  }, [products])
  console.log(filteredProducts)
  return (
    <>
      <ProductList products={products} isLoading={isLoading}></ProductList>
    </>
  )
}

export default ListProduct
