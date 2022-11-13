import React from 'react'
import Headerpage from '../components/headerpage/Headerpage'
import Leftbar from '../components/leftbar/Leftbar'
import RightbarPaymentInfo from '../components/rightbar_payment_info/RightbarPaymentInfo'
import Footer from '../modules/footer/Footer'
import Header from '../modules/header/Header'

export default function PaymentInfo({ activeButton }) {
  return (
    <>
      <Header></Header>
      <div className='bg-white'>
        <Headerpage headerpage={'Quản lý đơn hàng'}></Headerpage>
        <div className='flex'>
          <Leftbar activeButton={activeButton}></Leftbar>

          <RightbarPaymentInfo></RightbarPaymentInfo>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
