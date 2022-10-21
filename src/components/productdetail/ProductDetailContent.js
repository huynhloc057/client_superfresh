import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { getProductDetail } from '../../app/features/productSlice'
import { IconStar } from '../icons'
import { addToCart } from '../../app/features/cartSlice'

export default function ProductDetailContent() {
  const [T, setT] = useState(1)
  function add() {
    setT((T) => T + 1)
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

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams()
  const { productDetail } = useSelector((state) => state.product)
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getProductDetail(slug))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddToCart = () => {
    console.log(userInfo)
    if (!userInfo?.user?.name) {
      navigate('/sign-in')
    } else dispatch(addToCart({ ...productDetail, quantity: T }))
  }

  var nf = new Intl.NumberFormat()

  return (
    <div className='flex w-full bg-white'>
      <div className='flex flex-col w-full px-4 overflow-hidden bg-white select-none mx-[73px] border-b border-dashed border-[#dcdcdc]'>
        <div className='flex bg-white rounded select-text'>
          {/* left */}

          <div className='relative p-6 bg-white border-r border-dashed border-[#dcdcdc]'>
            {/* hình to */}
            <div className='relative flex flex-col'>
              <div className='relative text-center'>
                <img
                  id='Big picture'
                  height='444px'
                  width='444px'
                  z-index='0'
                  src={productDetail.productPictures[0]?.img}
                  alt='Combo 4 hộp cà phê hòa tan Nescafé 3in1 cà phê sữa đá (Hộp 10 gói x 24g) [Tặng túi du lịch]'
                  className='h-[444px] w-[444px]'
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
              <p className='label text-sm font-medium capitalize'>
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
          {/* Ngăn cách
          <div className='self-center w-px h-full bg-bgHome '></div> */}

          {/* right */}
          <div className='basis-0 shrink-1 grow-1 px-4 py-6'>
            {/* header */}
            <div className='pr-0 pl-7'>
              {/* brand */}
              <div className='flex mt-2'>
                <div className='flex'>
                  <span className='pr-2 whitespace-nowrap'>
                    <h6 className='text-xs'>
                      Thương hiệu
                      <NavLink
                        to={''}
                        className='text-blue-500'
                        href='/thuong-hieu/nescafe.html'
                      >
                        &nbsp; &nbsp;
                        {productDetail[0]?.brandNews}
                        {/* : NESCAFÉ */}
                      </NavLink>
                    </h6>
                  </span>
                </div>
              </div>
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
                    Đã bán {productDetail?.quantity}
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
                  <div className='flex items-center pt-1 pb-1 pl-2 pr-2 mt-2 border-2 border-blue-600 rounded bg-violet-400 w-fit'>
                    <img
                      height='16'
                      width='13'
                      src='https://salt.tikicdn.com/ts/upload/df/e2/b4/063c4d55ca380f818547f00f5175d39f.png'
                      alt=''
                    />
                    <span className='text-sm font-medium leading-5'>
                      Tặng tới 13,14 Astra trị giá 9.299đ
                    </span>
                  </div>
                </div>
                {/* mã giảm giá  */}
                <div className='flex flex-col items-start pt-4 mt-4 '>
                  <div className='text-sm font-medium capitalize'>
                    Mã giảm giá
                  </div>
                  <div className='flex '>
                    <div className='pt-1 pb-1 pl-3 pr-3 mt-2 mb-0 ml-0 mr-1 text-sm font-medium leading-5 capitalize border-2 border-blue-600 whitespace-nowrap'>
                      Hoàn 24k xu
                    </div>
                    <div className='pt-1 pb-1 pl-3 pr-3 mt-2 mb-0 ml-0 mr-1 text-sm font-medium leading-5 capitalize border-2 border-blue-600 whitespace-nowrap'>
                      giảm 200k
                    </div>
                    <div className='pt-1 pb-1 pl-3 pr-3 mt-2 mb-0 ml-0 mr-1 text-sm font-medium leading-5 capitalize border-2 border-blue-600 whitespace-nowrap'>
                      giảm 500k
                    </div>
                    <img
                      height='28'
                      width='28'
                      className='mt-2 mb-0 ml-0 mr-0'
                      src='https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png'
                      alt=''
                    ></img>
                  </div>
                </div>

                {/* số lượng  */}
                <div>
                  <div className='qty-and-message'>
                    <div className=' mt-2 '>
                      <p className='label text-sm font-medium capitalize'>
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

              {/* right */}
              <div className='flex flex-col '>
                {/* ------------ */}
                <div className='pt-1 border-2 border-Descrip '>
                  <div>
                    <NavLink to={''} className='flex flex-row ml-2' href=''>
                      <img
                        width='44'
                        src='https://vcdn.tikicdn.com/cache/w100/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png'
                        alt=''
                      />
                      <div className='ml-5'>
                        <span>saa</span>
                        <img
                          height='18'
                          width='74'
                          src='https://salt.tikicdn.com/cache/w100/ts/upload/58/00/b8/6c8ecad82adece328530e6f21971c309.png'
                          alt=''
                        />
                      </div>
                    </NavLink>
                  </div>
                  {/* ------------ */}
                  <div className='flex flex-row justify-around '>
                    <div className='flex items-center basis-0 shrink-1 grow-1'>
                      <div className='flex flex-col'>
                        <div className='flex'>
                          <span className='flex whitespace-nowrap'>
                            4.7 / 5
                          </span>
                          <div className='flex'>
                            {/* sao đen */}
                            <div className='relative flex'>
                              <div className='flex'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-5 w-5'
                                  color='#c7c7c7'
                                  viewBox='0 0 20 20'
                                  fill='currentColor'
                                >
                                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                </svg>
                              </div>
                            </div>
                            {/* sao vàng */}
                            <div className='absolute flex'>
                              <div className='flex'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-5 w-5'
                                  color='#fdd836'
                                  viewBox='0 0 20 20'
                                  fill='currentColor'
                                >
                                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='ml-4 text-xs whitespace-nowrap'>
                          4.8tr+
                        </div>
                      </div>
                    </div>
                    <div className='self-center w-px h-4 bg-current '></div>
                    <div className='flex items-center basis-0 shrink-1 grow-1'>
                      <div className='flex flex-col'>
                        <span className='flex ml-4'>419k</span>
                        <div className='ml-4 text-xs whitespace-nowrap'>
                          theo doi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ------------ */}

                <div className='pt-2 pb-2 pl-3 pr-3 mt-2 text-xs leading-5 border-2 border-Descrip '>
                  <div className='flex justify-between pt-3'>
                    <span className=''>Hướng dẫn bảo hành</span>
                    <NavLink to={''} className='text-blue-600' href=''>
                      Xem chi tiết
                    </NavLink>
                  </div>
                </div>
                {/* ------------ */}
                <div className='flex pt-2 pb-2 pl-2 pr-2 mt-2 border-2 border-Descrip '>
                  <div className='flex flex-col items-center bg-white basis-1/3 shrink-0 grow-1 '>
                    <img
                      alt='compensation-icon'
                      src='https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png'
                      height='32'
                      width='32'
                    />
                    <span className='text-xs text-center whitespace-nowrap'>
                      Hoàn tiền
                    </span>
                    <span className='text-xs text-center whitespace-nowrap'>
                      111%
                    </span>
                    <span className='text-xs text-center whitespace-nowrap'>
                      nếu hàng giả
                    </span>
                  </div>
                  <div className='flex flex-col items-center bg-white basis-1/3 shrink-0 grow-1 '>
                    <img
                      alt='compensation-icon'
                      src='https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png'
                      height='32'
                      width='32'
                    />
                    <span className='text-xs text-center whitespace-nowrap'>
                      Mở hộp
                    </span>
                    <span className='text-xs text-center whitespace-nowrap'>
                      Kiểm tra
                    </span>
                    <span className='text-xs text-center whitespace-nowrap'>
                      Nhận hàng
                    </span>
                  </div>
                  <div className='flex flex-col items-center bg-white basis-1/3 shrink-0 grow-1 '>
                    <img
                      alt='compensation-icon'
                      src='https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png'
                      height='32'
                      width='32'
                    />
                    <span className='text-xs text-center whitespace-nowrap'>
                      Đổi trả trong
                    </span>
                    <span className='text-xs text-center whitespace-nowrap'>
                      7 ngày
                    </span>
                    <span className='text-xs text-center whitespace-nowrap'>
                      nếu sp lỗi
                    </span>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className='pl-6 mt-4'>
              <ul className='m-0 list-none p-0'>
                <li className='relative pt-[7px] pr-0 py-5 pl-[45px] mb-[5px] text-[14px] list-none'>
                  <span className='block absolute top-0 left-0 max-w-[35px]'>
                    <img src='https://theme.hstatic.net/200000271661/1000922438/14/img_product_service_1.png?v=112' alt="Cửa hàng rau củ hữu cơ online">

                    </img>
                  </span>
                  <p className='m-0 leading-[1.2]'>Canh tác hướng hữu cơ không hóa chất</p>
                </li>
                <li className='relative pt-[7px] pr-0 py-5 pl-[45px] mb-[5px] text-[14px] list-none'>
                  <span className='block absolute top-0 left-0 max-w-[35px]'>
                    <img src='https://theme.hstatic.net/200000271661/1000922438/14/img_product_service_2.png?v=112' alt="Cửa hàng rau củ hữu cơ online">

                    </img>
                  </span>
                  <p className='m-0 leading-[1.2]'>Bảo hành đến từng cọng rau</p>
                </li>
                <li className='relative pt-[7px] pr-0 py-5 pl-[45px] mb-[5px] text-[14px] list-none'>
                  <span className='block absolute top-0 left-0 max-w-[35px]'>
                    <img src='https://theme.hstatic.net/200000271661/1000922438/14/img_product_service_3.png?v=112' alt="Cửa hàng rau củ hữu cơ online">

                    </img>
                  </span>
                  <p className='m-0 leading-[1.2]'>Freeship cho hóa đơn từ 250k trong 2h</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
