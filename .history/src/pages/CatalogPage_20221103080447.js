import React, { useEffect, useLayoutEffect, useState } from 'react'
import { IconRight } from '../components/icons'
import Footer from '../modules/footer/Footer'
import Header from '../modules/header/Header'
import Banner from '../components/banner/Banner'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/css/hash-navigation'
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper'
import { events } from '../components/banner/Banner'
import ProductListCatalog from '../components/product/ProductListCatalog'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProductByCategory,
  getCategories,
  setCategoryTab,
} from '../app/features/productSlice'
// import ProductCardSkeleton from '../components/product/ProductCardSkeleton'
import ProductCardLoading from '../components/product/ProductCardLoading'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import banner1 from '../image/banner1.png'
import banner2 from '../image/banner2.png'
import banner3 from '../image/banner3.png'
import banner4 from '../image/banner4.png'
import banner5 from '../image/banner5.png'
import banner6 from '../image/banner6.png'

const data = [
  {
    id: 1,
    name: 'Phổ biến',
  },
  {
    id: 2,
    name: 'Giá thấp',
  },
  {
    id: 3,
    name: 'Giá cao',
  },
];

export const banners = [
  {
    id: 1,
    url: `${banner1}`,
  },
  {
    id: 2,
    url: `${banner2}`,
  },
  {
    id: 3,
    url: `${banner3}`,
  },
  {
    id: 4,
    url: `${banner4}`,
  },
  {
    id: 5,
    url: `${banner5}`,
  },
  {
    id: 6,
    url: `${banner6}`,
  },
]

const CataLogPage = () => {
  const [filterData, setFilterData] = useState({
    price_lte: 0,
    price_gte: 0,
  })

  const onChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value })
  }

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

  const handleFilterPrice = async (e) => {
    e.preventDefault()

    const filtered = await products.filter(
      (product) =>
        product.price >= parseInt(filterData.price_gte, 10) &&
        product.price <= parseInt(filterData.price_lte, 10)
    )
    setFilteredProducts(filtered)
    setFilterData({
      price_lte: 0,
      price_gte: 0,
    })
  }

  const [isActive, setIsActive] = useState(1)
  const navLinkClass =
    'flex flex-col items-center px-3 py-2 bg-white  rounded outline-none transition-all outline-none border-x-transparent border-t-transparent'
  const handleOnClickSort = (id) => {
    setIsActive(id)
    const arrayProducts = [...products]
    switch (id) {
      case 1:
        setFilteredProducts(arrayProducts)
        break
      case 2:
        arrayProducts.sort((a, b) => a.price - b.price)
        setFilteredProducts(arrayProducts)
        break
      case 3:
        arrayProducts.sort((a, b) => b.price - a.price)
        setFilteredProducts(arrayProducts)
        break
      default:
        setFilteredProducts(arrayProducts)
        break
    }
  }
  const handleSetCategory = (category) => {
    dispatch(setCategoryTab(category))
  }
  return (
    <div>
      <Header></Header>
      <div className='flex flex-col w-full bg-white'>
        <div className='flex items-center text-sm mx-[89px] text-textProduct border-b border-dashed border-[#dcdcdc]'>
          <NavLink
            to={'/'}
            className='flex items-center h-10 font-light hover:underline whitespace-nowrap'
          >
            Trang chủ{' '}
          </NavLink>
          <span className='mx-2'>
            <IconRight></IconRight>
          </span>
          {isLoading ? (
            <Skeleton width='96px' height='30px'></Skeleton>
          ) : (
            <span className='flex items-center h-10 font-light whitespace-nowrap'>
              {category?.name}
            </span>
          )}
        </div>
        <div className='flex overflow-hidden bg-white mx-[89px]'>
          <div className='flex flex-col w-1/5 bg-white border-r border-dashed border-[#dcdcdc] mr-8'>
            <div className='pb-4 border-b border-dashed border-[#dcdcdc]'>
              <h4 className='py-[14px] text-xs text-textTitle font-semibold uppercase'>
                danh mục sản phẩm
              </h4>
              {categories &&
                categories.map((item) => (
                  <NavLink
                    to={`/catalog/${item?.slug}`}
                    key={item._id}
                    className='flex pb-2 text-xs text-textTitle'
                    onClick={() => handleSetCategory(item)}
                  >
                    {item?.name}
                  </NavLink>
                ))}

              {/* <hr className='mt-4' /> */}
            </div>

            <div className='pb-4'>
              <h4 className='py-[14px] text-xs text-textTitle font-semibold uppercase'>
                giá
              </h4>
              <span className='pb-1 text-xs text-slate-400'>
                Chọn khoảng giá
              </span>
              <form onSubmit={handleFilterPrice}>
                <div className='flex items-center gap-x-1'>
                  <input
                    type='text'
                    name='price_gte'
                    value={filterData.price_gte}
                    onChange={onChange}
                    className='w-24 px-2 text-xs bg-white border rounded outline-none h-7 border-slate-400'
                  />
                  <span>-</span>
                  <input
                    type='text'
                    name='price_lte'
                    value={filterData.price_lte}
                    onChange={onChange}
                    className='w-24 px-2 text-xs bg-white border rounded outline-none h-7 border-slate-400'
                  />
                </div>
                <button
                  className='w-24 p-4 px-4 py-1 mt-2 text-xs text-blue-500 bg-transparent border border-blue-500 rounded'
                  type='submit'
                >
                  Áp dụng
                </button>
              </form>
              {/* <hr className='mt-4' /> */}
            </div>
          </div>
          <div className='flex flex-col w-4/5 bg-white'>
            {/* {isLoading ? (
              <Skeleton width='934px' height='64px'></Skeleton>
            ) : ( */}
            <h1 className='p-4 text-2xl font-thin text-textTitle'>
              {category?.name}
            </h1>
            {/* )} */}

            <section className='w-full h-auto rounded-lg select-none'>
              <Banner></Banner>
            </section>

            <div className='w-full mt-6'>
              <div className='grid grid-cols-8 gap-1 mt-5 mb-5'>
                {data &&
                  data.length > 0 &&
                  data.map((item) => (
                    <span
                      key={item.id}
                      isActive={isActive}
                      activeClassName='selected'
                      onClick={() => handleOnClickSort(item.id)}
                      className='cursor-pointer'
                    >
                      <div
                        className={`${navLinkClass} ${
                          isActive === item.id
                            ? ' border-b-4 border-blue-500 '
                            : ''
                        }`}
                      >
                        <img srcSet={`${item.url} 2x`} alt='' />
                        <span className='mx-2 text-xs text-text3'>
                          {item.name}
                        </span>
                      </div>
                    </span>
                  ))}
              </div>
              {isLoading ? (
                <div className='grid grid-cols-4 gap-2 pb-5'>
                  <ProductCardLoading></ProductCardLoading>
                  <ProductCardLoading></ProductCardLoading>
                  <ProductCardLoading></ProductCardLoading>
                  <ProductCardLoading></ProductCardLoading>
                </div>
              ) : (
                <ProductListCatalog
                  products={filteredProducts}
                ></ProductListCatalog>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CataLogPage
