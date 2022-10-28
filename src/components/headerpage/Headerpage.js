import React from "react";
import { NavLink } from "react-router-dom";
import IconNextProfile from "../icons/IconNextProfile";

export default function Headerpage({ headerpage }) {
  return (
    <div className="mx-32 py-2 flex text-sm ">
      <NavLink to="/" className="hover:underline text-slate-400">
        Trang chủ
      </NavLink>
      <IconNextProfile></IconNextProfile>
      <div className="text-slate-500">{headerpage}</div>
    </div>
  );
}
