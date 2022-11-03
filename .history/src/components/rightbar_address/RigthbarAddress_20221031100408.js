import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import IconAddAddress from "../icons/IconAddAddress";

export default function RigthbarAddress() {
  const { userInfo } = useSelector((state) => state.auth);
  const { address } = useSelector((state) => state?.address);
const dispatch = useDispatch();
console.log(address)
  return (
    <div className="mr-32 basis-10/12 " style={{ height: "700px" }}>
      <div className="mt-2 mb-3 text-xl">Sổ địa chỉ</div>
      <NavLink to="/edit-address">
        <div className="my-5 border border-dashed flex justify-center items-center p-3 bg-white h-fit border-slate-400">
          <IconAddAddress></IconAddAddress>
          <p className="text-blue-500 text-[15px]">Thêm địa chỉ mới</p>
        </div>
      </NavLink>
      <div className="p-[17px] h-[100px] bg-white mb-[15px] flex justify-between border border-dashed border-[#dcdcdc]">
        <div>
          <div className="mb-[10px]">{userInfo?.user?.name}</div>
          <div className="text-[13px] text-slate-400">
            <div>
             {`Địa chỉ: `}
              <span className="text-black">{`${address.address}, ${address.selectedWard}, ${address.selectedDistrict}, ${address.selectedCity}`}</span>
            </div>
            <div className="">
              Điện thoại:<span className="text-black"> {` ${address.phoneNumber}`}</span>
            </div>
          </div>
        </div>
        <NavLink to="/edit-address" className="text-blue-500 text-[14px]">
          Chỉnh sửa
        </NavLink>
      </div>
    </div>
  );
}
