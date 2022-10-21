import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ButtonYes() {
  return (
    <div>
      <NavLink to="/payment">
        <button className="h-[2rem] border my-3 border-gray-200 rounded shadow-md px-6 bg-sky-500 bg-clip-padding">
              <span>
                  Giao đến địa chỉ này
              </span>
          </button>
      </NavLink>
    </div>
  )
}
