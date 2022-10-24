import clsx from "clsx";
import PaymentProducts from "./PaymentProducts";
import { ChoosePays } from "./choose_pay";
import { ShipTo } from "./shipto";
import { Bill } from "./bill";
import { useSelector } from "react-redux";

function PaymentContent() {
  const { items } = useSelector((state) => state.cart);
  return (
    <div
      className={clsx(
        "max-w-[79.375rem]",
        "mx-auto",
        "pt-5",
        "pb-20",
        "px-4",
        "flex"
      )}
    >
      <div className="mr-5 bg-white">
        <div
          className={clsx("w-[54.25rem]", "bg-white", "p-4", "rounded", "mb-4")}
        >
          <div
            className={clsx(
              "not-italic",
              "font-bold",
              "text-[1.125rem]",
              "leading-[1.375rem]",
              "mb-4"
            )}
          >
            Danh sách hàng đã chọn
          </div>
          <PaymentProducts datas={items} />
        </div>
        <ChoosePays />
      </div>
      <div className="sticky top-0 w-full h-full mr-5 bg-white">
        <ShipTo />
        <Bill />
      </div>
    </div>
  );
}

export default PaymentContent;
