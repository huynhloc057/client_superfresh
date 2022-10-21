import clsx from "clsx";
import { WrappedItem } from "../wrapper";
import { CURRENCY } from "../../constraint";

function BillDetail({ data }) {
  return (
    <WrappedItem>
      <div className={clsx("flex", "items-center", "justify-between")}>
        <span className={clsx("text-sm", "font-semibold", "mr-2")}>
          x{data?.quantity}
        </span>
        <span
          className={clsx(
            "text-xs",
            "font-normal",
            "truncate",
            "max-w-[9.625rem]",
            "mr-2"
          )}
        >
          {data?.name}
        </span>
      </div>
      <span className={clsx("text-sm", "font-normal")}>
        {(data?.price * data?.quantity).toLocaleString(CURRENCY)}₫
      </span>
    </WrappedItem>
  );
}

export default BillDetail;
