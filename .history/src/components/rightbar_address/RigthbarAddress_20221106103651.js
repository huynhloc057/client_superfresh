import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  deleteDeliveryInfo,
  getDeliveryInfo,
  resetSuccessAddress,
  setDefaultDeliveryInfo,
} from '../../app/features/addressSlice'
import IconAddAddress from '../icons/IconAddAddress'

export default function RigthbarAddress() {
  const { userInfo } = useSelector((state) => state.auth)
  const { deliveryInfo, success, successDelete } = useSelector(
    (state) => state?.address
  )
  const dispatch = useDispatch()
  const deleteHandler = (addressId) => {
    dispatch(deleteDeliveryInfo(addressId))
  }
  const setDefauldHandler = (addressId) => {
    dispatch(setDefaultDeliveryInfo(addressId))
  }
  useEffect(() => {
    if (successDelete) {
      toast.success('Xoá địa chỉ thành công!')
      dispatch(resetSuccessAddress())
    }
    if (success) {
      toast.success('Đặt địa chỉ mặc định thành công!')
      dispatch(resetSuccessAddress())
    }
    dispatch(getDeliveryInfo())
  }, [dispatch, success, successDelete])
  return (
    <div className='mr-32 basis-10/12 ' style={{ height: '700px' }}>
      <div className='mt-2 mb-3 text-xl'>Sổ địa chỉ</div>
      <NavLink to='/edit-address'>
        <div className='my-5 border border-dashed flex justify-center items-center p-3 bg-white h-fit border-slate-400'>
          <IconAddAddress></IconAddAddress>
          <p className='text-blue-500 text-[15px]'>Thêm địa chỉ mới</p>
        </div>
      </NavLink>
      {deliveryInfo.address?.map((adr) => (
        <div className='p-[17px] bg-white mb-[15px] flex justify-between border border-dashed border-[#dcdcdc]'>
          <div>
            <div className='mb-[10px] w-full'>{userInfo?.user?.name}</div>
            <div
              className={`mt-3 w-full ${adr.isDefault ? 'bg-slate-200' : ''}`}
            >
              <div className='text-[13px] text-slate-400'>
                <div>
                  {`Địa chỉ: `}
                  <span className='text-black'>{adr.address}</span>
                </div>
                <div className=''>
                  Điện thoại:
                  <span className='text-black'> {` ${adr.phoneNumber}`}</span>
                </div>
              </div>

              <NavLink
                to={`/edit-address`}
                className='text-blue-500 text-[14px]'
              >
                Chỉnh sửa
              </NavLink>

              <button
                className='text-sm ml-3 text-orange-500'
                onClick={() => setDefauldHandler(adr._id)}
              >
                Mặc định
              </button>
              <button
                className='text-sm ml-3 text-blue-500'
                onClick={() => deleteHandler(adr._id)}
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
