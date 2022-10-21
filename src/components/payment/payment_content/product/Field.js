import clsx from "clsx";
import { NAME, SHIP_BY } from "../constraint";

function Field({ children, data, type }) {
  switch (type) {
    case NAME:
      return (
        <span
          className={clsx(
            "block",
            "text-sm",
            "max-w-sm",
            "font-medium",
            "tracking-widest",
            "text-[#808089]",
            "truncate",
            "pt-[2px]"
          )}
        >
          {data}
        </span>
      );
    case SHIP_BY:
      return (
        <span
          className={clsx(
            "text-sm",
            "font-normal",
            "tracking-widest",
            "text-[#808089]"
          )}
        >
          {/* Được giao bởi Nhà Sách Phương Nam */}
        </span>
      );
    default:
      return (
        <span
          className={clsx(
            "text-sm",
            "font-medium",
            "tracking-widest",
            "text-[#808089]"
          )}
        >
          {data}
          {children}
        </span>
      );
  }
}

export default Field;
