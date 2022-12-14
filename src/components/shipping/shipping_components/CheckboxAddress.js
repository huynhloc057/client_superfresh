import React from 'react'

export default function CheckboxAddress() {
  return (
    <div className="flex justify-center ml-11">
        <div>
            <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                    Sử dụng địa chỉ này làm mặc định
                </label>
            </div>
        </div>
    </div>
  )
}
