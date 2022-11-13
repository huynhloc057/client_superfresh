import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../app/features/productSlice'
import ProductList from '../product/ProductList'

const ListProduct = () => {
  const dispatch = useDispatch()
  const { products, isLoading } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <ProductList products={products} isLoading={isLoading}></ProductList>
    </>
  )
}

export default ListProduct
