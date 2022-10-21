import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../components/input/Search";
import IconAccount from "../../components/icons/IconAccount";
import IconCart from "../../components/icons/IconCart";
import { useSelector } from "react-redux";
import { IconNavBarLogin } from "../../components/icons";
import logo from "../../image/logo_header.png";

const Header = () => {
  const { userInfo } = useSelector((state) => ({ ...state.auth }));
  return (
    <header id="main-header" className="relative bg-[#008641] z-[999] lg:p-3">
      {/* Start Top Header */}
      <div
        id="top-header"
        className="tracking-normal xl:w-[1270px] px-[15px] mr-auto ml-auto"
      >
        <div className="middle-wrap flex pt-3 pb-3 px-[0] h-auto relative z-[2] items-center">
          {/* Start Content Header */}
          <div className="flex items-center tracking-normal middle-left grow shrink-0">
            {/* Start Logo Header */}
            <div className="logo-menu flex items-start basis-[190px] shrink-0 mr-4">
              <div className="tracking-normal flex justify-between grow-[1] shrink-[1] basis-0">
                <NavLink
                  to="/"
                  className="w-[100x] h-[52px] block tracking-normal text-[#0b74e5] no-underline bg-transparent cursor-pointer"
                >
                  <img
                    className="absolute w-[190px] h-[190px] top-[-64px] left-[-50px]"
                    src={logo}
                    alt="super_fresh-logo"
                  />
                </NavLink>
              </div>
            </div>
            {/* End Logo Header */}

            {/* Start Search */}
            <Search></Search>
            {/* End Search */}
          </div>
          <div className="box-border flex items-center justify-end tracking-normal header-user">
            {userInfo?.user?.name ? (
              <IconAccount></IconAccount>
            ) : (
              <IconNavBarLogin></IconNavBarLogin>
            )}

            {/* End Account */}

            {/* Start Cart */}
            <IconCart></IconCart>
            {/* End Cart */}
          </div>
          {/* End Content Header */}
        </div>
      </div>
      {/* End Top Header */}
    </header>
  );
};

export default Header;
