import React from "react";
import { NavLink } from "react-router-dom";
import { IconUser } from "../../components/icons";

const IconNavBarLogin = () => {
  return (
    <div className="w-[162px] text-white flex text-xs items-center justify-end cursor-pointer">
      <IconUser></IconUser>
      <span className="flex flex-col">
        <span className="text-[11px]">
          {" "}
          <NavLink to="/sign-in">Đăng nhập</NavLink> /{" "}
          <NavLink to="sign-up">Đăng ký</NavLink>
        </span>
        <span className="text-xs">Tài khoản</span>
      </span>
    </div>
  );
};

export default IconNavBarLogin;
