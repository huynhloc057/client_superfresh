import clsx from "clsx";
import { useEffect, useState } from "react";
import ChoosePay from "./ChoosePay";
import { PAY_METHODS } from "../constraint";
import { useDispatch } from "react-redux";
import { setCheckedPayment } from "../../../../app/features/cartSlice";
function ChoosePays() {
  const [indexMethod, setIndexMethod] = useState(0);
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(setCheckedPayment(indexMethod));

},[indexMethod])
  return (
    <div className={clsx("w-[54.25rem]", "bg-white", "p-4", "rounded", "border", "border-[#dcdcdc]", "border-dashed")}>
      <div
        className={clsx(
          "not-italic",
          "font-bold",
          "text-[1.125rem]",
          "leading-[1.375rem]",
          "mb-4"
        )}
      >
        Chọn hình thức thanh toán
      </div>
      <div>
        {PAY_METHODS.map((item, index) => (
          <ChoosePay
            key={index}
            data={item}
            index={index}
            indexMethod={indexMethod}
            setIndexMethod={setIndexMethod}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoosePays;
