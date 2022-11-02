import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { getProductDetail } from '../../app/features/productSlice'
import { IconStar } from '../icons'
import { addToCart } from '../../app/features/cartSlice'
import Swal from 'sweetalert2'

export default function ProductDetailContent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams()
  const { productDetail } = useSelector((state) => state.product)
  const { userInfo } = useSelector((state) => state.auth)
  const { cartItems } = useSelector((state) => state.cart)
  console.log(cartItems)
  console.log(productDetail)
  const productChoose = cartItems.find((item) => item._id === productDetail._id)
  // console.log(productTemp)
  const [T, setT] = useState(1)
  const showAlert = (quantity) => {
    Swal.fire({
      icon: 'error',
      text: `Số lượng còn lại của sản phẩm này là: ${quantity}`,
    })
  }
  function add() {
    if (
      T < productDetail.quantity &&
      productChoose.quantityChoose < productDetail.quantity
    ) {
      setT((T) => T + 1)
    } else if (productChoose.quantityChoose === productDetail.quantity) {
      showAlert(productDetail.quantity)
    }
  }
  function sub() {
    if (T > 1) {
      setT((T) => T - 1)
    }
  }
  function handleAlterImage(x) {
    let m = document.getElementById(x).src
    document.getElementById('Big picture').src = m
  }

  useEffect(() => {
    dispatch(getProductDetail(slug))
  }, [slug, dispatch])

  const handleAddToCart = () => {
    console.log(userInfo)
    if (!userInfo?.user?.name) {
      navigate('/sign-in')
    } else if (productChoose.quantityChoose < productDetail.quantity)
      dispatch(addToCart({ ...productDetail, quantityChoose: T }))
    else if (productChoose.quantityChoose === productDetail.quantity) {
      showAlert(productDetail.quantity)
    }
  }

  var nf = new Intl.NumberFormat()

  return (
    <div className='flex w-full bg-white'>
      <div className='flex flex-col w-full px-4 overflow-hidden bg-white select-none mx-[73px] border-b border-dashed border-[#dcdcdc]'>
        <div className='flex bg-white rounded w-full'>
          {/* left detail*/}
          <div className='relative p-6 bg-white border-r border-dashed border-[#dcdcdc] w-full'>
            {/* hình to */}
            <div className='relative flex flex-col'>
              <div className='relative text-center h-[300px]'>
                <img
                  id='Big picture'
                  src={productDetail.productPictures[0]?.img}
                  alt={productDetail.name}
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
            {/* hình chi tiết */}
            <div className='mt-4 mb-0 ml-0 mr-0 basis-full shrink-0 grow-0'>
              {/* list chi tiết */}
              <div className='flex '>
                {productDetail.productPictures?.map(
                  (product_detail_img, index) => (
                    <div
                      key={index}
                      className='relative w-16 h-16 mr-3 rounded cursor-pointer hover:border-2 hover:border-blue-500 '
                    >
                      <img
                        //id={product_detail_img.id}
                        //product_detail_img.id
                        id={index}
                        onClick={() => {
                          handleAlterImage(index)
                        }}
                        src={product_detail_img.img}
                        alt=''
                        className='object-cover'
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            {/* chia sẻ */}
            <div className='flex mt-6 '>
              <p className='text-sm font-medium capitalize label'>
                Chia sẻ :&nbsp;
              </p>
              <img
                src={
                  'https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg'
                }
                alt=''
                className='object-cover'
              />
              &nbsp;
              <img
                src={
                  'https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg'
                }
                alt=''
                className='object-cover'
              />
              &nbsp;
              <img
                src={
                  'https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg'
                }
                alt=''
                className='object-cover'
              />
              &nbsp;
              <img
                src={
                  'https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg'
                }
                alt=''
                className='object-cover'
              />
              &nbsp;
              <img
                src={
                  'https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg'
                }
                alt=''
                className='object-cover'
              />
            </div>
          </div>

          {/* right detail */}
          <div className='px-4 py-6 w-full'>
            {/* header */}
            <div className='pr-0 pl-7'>
              {/* title */}
              <h1 className='w-full mb-1 font-sans text-2xl font-bold leading-8'>
                {productDetail.name}
              </h1>
              {/* below title */}
              <div className='flex mt-2'>
                <div className='relative flex'>
                  <div className='flex'>
                    <IconStar></IconStar>
                    <IconStar></IconStar>
                    <IconStar></IconStar>
                    <IconStar></IconStar>
                    <IconStar></IconStar>
                  </div>
                </div>
                <div className='flex ml-4'>
                  <div className='self-center w-px h-4 bg-current'></div>

                  <p className='px-2 font-sans text-sm leading-4 whitespace-nowrap'>
                    Số lượng {productDetail?.quantity}
                  </p>
                </div>
              </div>
            </div>
            {/* body */}
            <div className='flex pt-0 pb-0 pl-6 pr-0 '>
              {/* left */}
              <div className='pr-3 mr-2 basis-0 shrink-1 grow-1'>
                {/* prize and icon        */}
                <div className='flex flex-col pt-3 '>
                  <div className='flex items-end pt-1 pb-1 pl-4 pr-4 mt-3 mb-0 font-sans rounded ml--4 mr--4 bg-bgPrice'>
                    <div className='flex justify-center ml-1 mr-2 text-4xl font-medium text-center w-36 whitespace-nowrap text-text1'>
                      {nf.format(productDetail?.price)}đ
                    </div>
                  </div>
                </div>

                <div>
                  <div className='qty-and-message'>
                    <div className='mt-2 '>
                      <p className='text-sm font-medium capitalize label'>
                        Số Lượng
                      </p>
                      <div className='flex mt-2 mb-2'>
                        <button
                          onClick={sub}
                          id='sub'
                          className='border-2 border-Descrip w-7 h-7 hover:border-red-500'
                        >
                          <img
                            src='https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg'
                            alt='remove-icon'
                            width='20'
                            height='20'
                          />
                        </button>

                        <input
                          id='input'
                          className='w-10 text-center border-2 border-Descrip h-7'
                          type='text'
                          value={T}
                        />

                        <button
                          onClick={add}
                          id='add'
                          className='border-2 border-Descrip w-7 h-7 hover:border-red-500'
                        >
                          <img
                            src='https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg'
                            alt='add-icon'
                            width='20'
                            height='20'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type='button'
                      className='w-full h-12 max-w-xs text-white bg-[#008641]'
                      onClick={() => handleAddToCart()}
                    >
                      Chọn mua
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='pl-6 mt-4'>
              <ul className='p-0 m-0 list-none'>
                <li className='relative pt-[7px] pr-0 py-5 pl-[45px] mb-[5px] text-[14px] list-none'>
                  <span className='block absolute top-0 left-0 max-w-[35px]'>
                    <img
                      src='https://theme.hstatic.net/200000271661/1000922438/14/img_product_service_1.png?v=112'
                      alt='Cửa hàng rau củ hữu cơ online'
                    ></img>
                  </span>
                  <p className='m-0 leading-[1.2]'>
                    Canh tác hướng hữu cơ không hóa chất
                  </p>
                </li>
                <li className='relative pt-[7px] pr-0 py-5 pl-[45px] mb-[5px] text-[14px] list-none'>
                  <span className='block absolute top-0 left-0 max-w-[35px]'>
                    <img
                      src='https://theme.hstatic.net/200000271661/1000922438/14/img_product_service_2.png?v=112'
                      alt='Cửa hàng rau củ hữu cơ online'
                    ></img>
                  </span>
                  <p className='m-0 leading-[1.2]'>
                    Bảo hành đến từng cọng rau
                  </p>
                </li>
                <li className='relative pt-[7px] pr-0 py-5 pl-[45px] mb-[5px] text-[14px] list-none'>
                  <span className='block absolute top-0 left-0 max-w-[35px]'>
                    <img
                      src='https://theme.hstatic.net/200000271661/1000922438/14/img_product_service_3.png?v=112'
                      alt='Cửa hàng rau củ hữu cơ online'
                    ></img>
                  </span>
                  <p className='m-0 leading-[1.2]'>
                    Freeship cho hóa đơn từ 250k trong 2h
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
