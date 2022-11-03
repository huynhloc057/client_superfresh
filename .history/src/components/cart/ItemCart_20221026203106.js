import React from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CURRENCY } from '../payment/payment_content/constraint'
import { useDispatch, useSelector } from 'react-redux'

import {
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
  setResetCart,
} from '../../app/features/cartSlice'

const ItemCart = (props) => {
  const { quantity, _id } = props
  const dispatch = useDispatch()
  const showAlert1 = () => {
    Swal.fire({
      title: 'Xóa sản phẩm',
      text: 'Bạn có muốn xóa sản phẩm đang chọn?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xác nhận!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        if (props.cartItems.length === 1) {
          dispatch(setResetCart())
        } else {
          dispatch(removeFromCart(props))
        }
        Swal.fire('Đã xóa thành công', '', 'success')
      }
    })
  }
  const showAlert2 = () => {
    Swal.fire({
      icon: 'error',
      text: `Số lượng còn lại của sản phẩm này là: ${quantity}`,
    })
  }

  const handleChange = (e) => {
    console.log(typeof e.target.value)
    console.log(e.target.value)
    // setQty(e.target.vale);
    // if(e.target.vale ==="") return;
    // if(Number.isInteger(Number(e.target.value))){
    //   let num = Number(e.target.value);
    //   if(num<=0) {
    //     toast.warning('Số lượng được mua tối thiểu của sản phẩm này là 1', {
    //           position: "bottom-right",
    //           autoClose: 500,
    //           hideProgressBar: true,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //         });
    //         dispatch(changeItemQuantity({ num, props }));
    //   }
    // }
  }
  const { products } = useSelector((state) => state.products);
  return (
    <div>
      <div className='mb-10 item-product'>
        <div className='flex items-center justify-start mx-0 my-0 row'>
          {/* Start Col 1*/}
          <div className='col-1 w-[398px] py-0 px-[15px]'>
            <div className='flex list-none product-img'>
              {/* Start Product Checkbox */}
              <div className='product-checkbox relative top-[27px]'>
                <input
                  className='w-[18px] h-[18px] border border-solid border-[#c4c4cf] rounded inline-block align-middle my-0 mr-3 ml-0 relative z-[1] text-[#c4c4cf] bg-transparent cursor-pointer'
                  type='checkbox'
                  id={props._id}
                  name={props.name}
                  vale={props.name}
                  checked={props.checked[props.index]}
                  onChange={() => {
                    props.handleChange(props.index)
                  }}
                />
                <label htmlFor={props.id}></label>
              </div>
              {/* End Product Checkbox */}

              {/* Start Product Image */}
              <NavLink
                to={`/product/${_id}`}
                className='product-image inline-block text-[#0b74e5] no-underline bg-transparent'
              >
                <img
                  className='w-[80px] h-[80px] img-container object-contain max-w-full border-none'
                  src={props.productPictures[0].img}
                  alt={props.productPictures[0]._id}
                />
              </NavLink>

              {/* End Product Image */}

              {/* Start Product Content */}
              <div className='product-content width-[calc(100% - 100px)] pl-[10px] relative w-[260px]'>
                <NavLink
                  to={`/product/${_id}`}
                  className='product-name text-ellipsis overflow-hidden text-[13px] text-[#242424] mb-[5px] leading-5 no-underline bg-transparent box-border list-none line-clamp-2'
                >
                  {props.category === '2e8c479c-6ddc-455a-b870-8ecbc11b7cd4' ||
                  props.category === '1a174ce7-43b2-41d9-b29a-92b3566ab623' ||
                  props.category === '795f2955-34f4-4135-b51f-95c439bd4a0f' ||
                  props.category === 'ad200ea1-a71e-4e55-bfc6-c226554ce60e' ||
                  props.category === 'dc82207c-9b22-4ad2-a14e-a8fd07bdd561' ||
                  props.category === '522e1c02-fb80-4b1f-8635-063194e49c6a' ||
                  props.category === 'da3c04c5-3eef-41d2-9f5b-b3a9e3cbf4f8' ? (
                    <img
                      className='w-[56px] inline-block mr-[5px] mt-[-10px]'
                      src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/tikinow/tiki-now-15@2x.png'
                      alt='tiki-icon'
                    />
                  ) : (
                    <img
                      className='w-[56px] inline-block mr-[5px] mt-[-10px]'
                      src='https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png'
                      alt='tiki-icon'
                    />
                  )}

                  {props.name}
                </NavLink>
                {props.category === '2e8c479c-6ddc-455a-b870-8ecbc11b7cd4' ||
                props.category === '1a174ce7-43b2-41d9-b29a-92b3566ab623' ||
                props.category === '795f2955-34f4-4135-b51f-95c439bd4a0f' ||
                props.category === 'ad200ea1-a71e-4e55-bfc6-c226554ce60e' ||
                props.category === 'dc82207c-9b22-4ad2-a14e-a8fd07bdd561' ||
                props.category === '522e1c02-fb80-4b1f-8635-063194e49c6a' ||
                props.category === 'da3c04c5-3eef-41d2-9f5b-b3a9e3cbf4f8' ? (
                  <span className='block font-medium uppercase text-[#009900] text-[11px]'>
                    Giao Sáng Mai
                  </span>
                ) : (
                  <span></span>
                )}
                <span className='product-title block font-medium uppercase text-[#009900] text-[11px]'></span>
                {props.category === 'da3c04c5-3eef-41d2-9f5b-b3a9e3cbf4f8' ? (
                  <span class='product-bookcare block text-[#777777] text-[12px] my-[10px] mx-0'>
                    Sách có thể bọc bằng
                    <NavLink
                      to='/'
                      className='inline-block ml-[3px] text-[#0d5cb6]'
                    >
                      <img
                        className='max-w-full border-none w-[60px] h-[11px] aspect-[auto_60/11] text-[#0d5cb6] cursor-pointer text-[12px]'
                        src='https://salt.tikicdn.com/ts/upload/27/4d/9c/babbc888efcb183d0f76c2fd5b2f98dc.png'
                        alt='bookcare'
                      />
                    </NavLink>
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
              {/* Start Product Content */}
            </div>
          </div>
          {/* End Col 1*/}

          {/* Start Col 2*/}
          <div className='col-2 w-[190px] py-0 px-[15px]'>
            <span className='product-realprices font-medium text-[#242424] text-[13px] inline-block mr-[5px]'>
              {`${props.price?.toLocaleString(CURRENCY)} ₫`}
            </span>
            {/* <del className="product-discountprices text-[#999999] inline-block text-[11px]">
              {`${props.price} ₫`}
            </del> */}
          </div>
          {/* End Col 2*/}

          {/* Start Col 3 - Quantity*/}
          <div className='col-3 w-[130px] py-0 px-[15px] list-none box-border'>
            <div className='box-border list-none product-qty'>
              <div className='style-qty inline-flex flex-nowrap border border-solid border-[#c8c8c8] rounded-[3px] w-[84px] list-none box-border'>
                <button
                  className='qty-decrease inline-block border-r border-solid border-[#c8c8c8] text-[#999999] cursor-pointer w-6 h-6'
                  type='button'
                  onClick={
                    props.quantity === 1
                      ? showAlert1
                      : () => dispatch(subtractItemQuantity(props))
                  }
                >
                  <img
                    src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg'
                    alt='decrease'
                  />
                </button>
                <input
                  type='text'
                  className='qty-input border-none bg-transparent w-8 text-center text-[13px] appearance-none m-0 outline-none overflow-visible leading-[1.15] py-[1px] px-[2px] list-none'
                  value={quantity}
                  onChange={handleChange}
                />
                <button
                  className='qty-increase inline-block border-l border-solid border-[#c8c8c8] text-[#999999] cursor-pointer w-6 h-6'
                  type='button'
                  onClick={
                    props.quantity === products[props.index].quantity
                      ? showAlert2
                      : 
                      () => dispatch(addItemQuantity(props))
                    // () => console.log(props)
                    // () => console.log(products)
                  }
                >
                  <img
                    src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg'
                    alt='decrease'
                  />
                </button>
              </div>
            </div>
          </div>
          {/* End Col 3*/}

          {/* Start Col 4 - Thanh tien*/}
          <div className='w-[120px] py-0 px-[15px] list-none'>
            <span className='product-finalprices text-[#ff424e] text-[13px] font-medium leading-5 block list-none box-border'>
              {`${(props.price * props.quantity)?.toLocaleString(CURRENCY)} ₫`}
            </span>
          </div>
          {/* End Col 4*/}

          {/* Start Col 5*/}
          <div className='w-[50px] text-right box-border list-none'>
            <button
              className='box-border relative inline-block text-right list-none cursor-pointer product-delete'
              type='button'
              onClick={showAlert1}
            >
              <img
                className='w-[17px] h-[17px] max-w-full border-none box-border cursor-pointer'
                src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg'
                alt='deleted'
              />
            </button>
          </div>
          {/* End Col 5*/}
        </div>
      </div>
    </div>
  )
}

export default ItemCart
