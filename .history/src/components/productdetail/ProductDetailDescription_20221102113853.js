import React from 'react'
import { useSelector } from 'react-redux'
export default function ProductDetailDescription() {
  const { productDetail } = useSelector((state) => state.product)
  if (Object.keys(productDetail).length === 0) {
    return null
  }
  return (
    <div className='flex w-full bg-white'>
      <div className='flex flex-col w-full p-4 mt-5 overflow-hidden bg-white select-none mx-[73px]  border-b border-dashed border-[#dcdcdc]'>
        <div>
          <h2 className='pt-2 pb-2 pl-4 pr-4 m-0 text-xl font-normal leading-8 capitalize'>
            Thông tin chi tiết
          </h2>
          <div className='pt-0 pb-2 pl-4 pr-4 leading-5'>
            <table className='w-full border-spacing-0'>
              <tbody className='table-row-group '>
                <tr className=' even:bg-Descrip_chirld'>
                  <td className='w-56 pt-3 pb-3 pl-4 pr-4 text-xs font-medium text-justify bg-Descrip'>
                    Thương hiệu
                  </td>
                  <td className='p-8'>{productDetail?.brandNews}</td>
                </tr>
                <tr className=' even:bg-Descrip_chirld'>
                  <td className='w-56 pt-3 pb-3 pl-4 pr-4 text-xs font-medium text-justify bg-Descrip'>
                    Xuất xứ thương hiệu
                  </td>
                  <td className='p-8'> {productDetail?.from}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
