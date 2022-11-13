import React, { useEffect } from 'react'
import Footer from '../modules/footer/Footer'
import ProductDetailTopBar from '../modules/categorytop/ProductDetailTopBar'
import ProductDetailContent from '../components/productdetail/ProductDetailContent'
import ProductDetailDescription from '../components/productdetail/ProductDetailDescription'
import ProductDetailShortDescription from '../components/productdetail/ProductDetailShortDescription'
import Header from '../modules/header/Header'
import Comments from '../modules/comment/Comments'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getProductDetail } from '../app/features/productSlice'

export default function ProductDetailPage() {
  const dispatch = useDispatch()
  const { slug } = useParams()
  useEffect(() => {
    dispatch(getProductDetail(slug))
    window.scrollTo(0, 0)
  }, [slug, dispatch])

  const { userInfo } = useSelector((state) => state.auth)
  return (
    <div>
      <Header></Header>
      <ProductDetailTopBar></ProductDetailTopBar>
      <ProductDetailContent></ProductDetailContent>
      {/* <ProductDetailDescription></ProductDetailDescription> */}
      <ProductDetailShortDescription></ProductDetailShortDescription>

      <Comments
        currentUserId={userInfo?.user._id}
        currentAvartar={userInfo?.user?.profilePicture}
      />
      <Footer></Footer>
    </div>
  )
}
