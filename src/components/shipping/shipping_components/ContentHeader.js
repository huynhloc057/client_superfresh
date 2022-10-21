import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ContentHeader() {
  return (
    <div>
        <div className="max-w-[79rem] m-auto mt-6 mb-6">
            <span className="font-bold text-black">
                2. Địa chỉ giao hàng
            </span>
            <br />
            <span>
                Bạn muốn giao hàng đến địa chỉ khác?
                <NavLink
                    to="shipping-address"
                    className="text-sky-500">
                        <span> Thêm địa chỉ giao hàng mới</span>
                </NavLink>
            </span>
        </div>
    </div>
  )
}
