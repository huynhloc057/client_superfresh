import clsx from "clsx";
import { CURRENCY, NAME } from "../constraint";
import Field from "./Field";

function PaymentProduct({ data }) {
  return (
    <li
      className={clsx(
        "px-4",
        "pt-5",
        "pb-4",
        "border",
        "border-dashed",
        "border-[#dcdcdc]",
        "rounded-xl",
        "relative",
        "flex",
        "cursor-default"
      )}
    >
      <div className={clsx("min-w-[25rem]", "mr-[3.875rem]", "w-[440px]")}>
        <div className={clsx("flex", "py-3")}>
          <img
            className={clsx("mr-2")}
            src={data.productPictures[0].img}
            alt={data.name}
            width="48"
            heigth="48"
          />
          <div className={clsx("w-full")}>
            <Field data={data.name} type={NAME} />
            <div className="flex justify-between">
              <Field data={`SL: x${data.quantity}`} />
              <Field data={data.price.toLocaleString(CURRENCY)}>
                <span className={clsx("text-lg", "text-red-500")}>₫</span>
              </Field>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx("flex-1", "w-full", "border-l", "border-dashed", "border-[#dcdcdc]", "pl-[30px]")}
        style={{ borderColor: "rgb(221 221 227 / var(--tw-border-opacity))" }}
      >
        <div
          className={clsx("flex", "items-start", "rounded-lg", "py-2", "px-4")}
        >
          <div className="block text-sm max-w-sm font-medium tracking-widest text-[#808089] truncate">
            {`Thành tiền: ${(data.price * data.quantityChoose).toLocaleString(
              CURRENCY
            )}`}
            <span className={clsx("text-lg", "text-red-500")}>₫</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PaymentProduct;
