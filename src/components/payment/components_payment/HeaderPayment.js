import clsx from "clsx";
import { NavLink } from "react-router-dom";
import logo from "../../../image/logo.png";

function HeaderPayment() {
  return (
    <header className={clsx("bg-white")}>
      <div
        className={clsx(
          "max-w-[76.875rem]",
          "mx-auto",
          "h-[6.25rem]",
          "flex",
          "items-center",
          "justify-between"
        )}
      >
        <div className={clsx("flex", "items-end")}>
          <NavLink to="/">
            <img
              className={clsx("max-w-full", "object-contain", "w-[120px]", "relative", "top-[3px]")}
              src={logo}
              alt="icon"
              width="60"
              height="40"
            />
          </NavLink>
          <div
            className={clsx("w-[0.063rem]", "h-8", "mx-4", "bg-[#008641]")}
          ></div>
          <span
            className={clsx(
              "not-italic",
              "text-2xl",
              "font-normal",
              "text-[#008641]"
            )}
          >
            Thanh toán
          </span>
        </div>
        <div>
          <img
            src="https://salt.tikicdn.com/ts/upload/ae/b1/ea/65e64a529e4ff888c875129d3b11ff29.png"
            alt="hotline"
            width="185"
            height="56"
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderPayment;
