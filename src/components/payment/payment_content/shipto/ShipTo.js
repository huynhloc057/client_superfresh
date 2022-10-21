import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ShipTo() {
  const { address } = useSelector((state) => state.address)
  return (
    <div
      className={clsx(
        'bg-white',
        'p-4',
        'rounded',
        'mb-4',
        'border',
        'border-dashed',
        'border-[#dcdcdc]'
      )}
    >
      <div className='flex justify-between'>
        <span
          className={clsx(
            'not-italic',
            'font-normal',
            'text-[1.125rem]',
            'leading-5',
            'text-[#808089]',
            'mb-3'
          )}
        >
          Giao tới
        </span>
        {/* rename <button> to <Link> */}
        <Link to={'/shipping-address'} className='text-sm text-[#0b74e5]'>
          Thay đổi
        </Link>
      </div>
      <div className='flex items-center'>
        <span className='text-sm font-semibold text-[#38383d]'>
          {address.name}
        </span>
        <div
          className={clsx('w-[0.063rem]', 'h-5', 'mx-2', 'bg-[#ebebf0]')}
        ></div>
        <span className='text-sm font-semibold text-[#38383d]'>
          {address.phoneNumber}
        </span>
      </div>
      <div className='text-sm font-normal text-[#808089]'>
        {`${address.address}, ${address.selectedWard}, ${address.selectedDistrict}, ${address.selectedCity}`}
      </div>
    </div>
  )
}

export default ShipTo
