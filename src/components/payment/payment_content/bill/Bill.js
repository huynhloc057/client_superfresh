import clsx from "clsx";
import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { WrapperBill, WrappedItem } from "./wrapper";
import { CURRENCY } from "../constraint";
import { BillDetail } from "./bill_detail";
import { ComputeBill } from "./compute_bill";
import { addOrderShipping } from "../../../../app/features/paymentSlice";
import { setResetCart } from "../../../../app/features/cartSlice";
import useRazorpay from "react-razorpay";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

function Bill() {
  const { items, voucher, checkedPayment, currentTotal } = useSelector(
    (state) => state.cart
  );
  console.log(items)
  const { address } = useSelector((state) => state.address);
  const { userInfo } = useSelector((state) => state.auth);
  const [paymentType, setPaymentType] = useState("cod");
  const [toggleBillDetail, setToggleBillDetail] = useState(false);
  const TOTAL = useMemo(
    () =>
      items.reduce((total, product) => {
        return total + product.price * product.quantityChoose;
      }, 0),
    [items]
  );

  const Razorpay = useRazorpay();

  const handlePaymentByCard = async (sumPrice) => {
    // const order = await createOrder(params); //  Create order on your backend

    const options = {
      key: "rzp_test_r0WpHb8FkOAzfD", // Enter the Key ID generated from the Dashboard
      amount: Math.floor((sumPrice / 23000) * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "USD",
      name: "Huynh Loc",
      description: "Payment Tiki By Credit Card",
      image: "https://example.com/your_logo",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        const data = {
          items,
          sumPrice,
          address,
          userId: userInfo.user._id,
          createdAt: new Date().toLocaleString(),
          status: "Đã thanh toán",
        };
        dispatch(addOrderShipping(data));
        dispatch(setResetCart());
        navigate("/");
        toast.success("Thanh toán thành công");
      },
      prefill: {
        name: "Piyush Garg",
        email: "huynhtanloc912016@gmail.com",
        contact: "0964371127",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitPayment = () => {
    Swal.fire({
      title: "Thanh toán đơn hàng",
      text: "Bạn chắc chắn muốn thanh toán các sản phẩm đang lựa chọn?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận!",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        if (checkedPayment === 0) {
          setPaymentType("cod");
          const sumPrice = currentTotal + Number(voucher) + Number(40000);
          const data = {
            items,
            sumPrice,
            address,
            userId: userInfo.user._id,
            createdAt: new Date().toLocaleString(),
            status: "Chưa thanh toán",
          };
          dispatch(addOrderShipping(data));
          dispatch(setResetCart());
          navigate("/");
          Swal.fire("Đã đặt hàng thành công", "", "success");
        } else if (checkedPayment === 1) {
          const sumPrice = currentTotal + Number(voucher) + Number(40000);
          debugger;
          handlePaymentByCard(sumPrice);
        }
      }
    });
  };
  return (
    <div
      className={clsx(
        "bg-white",
        "p-4",
        "rounded",
        "mb-4",
        "border",
        "border-dashed",
        "border-[#dcdcdc]"
      )}
    >
      {/* start: info person */}
      <div className={clsx("flex", "justify-between")}>
        <span
          className={clsx(
            "not-italic",
            "font-semibold",
            "text-[1.125rem]",
            "leading-5",
            "text-[#38383d]",
            "mb-3"
          )}
        >
          Đơn hàng
        </span>
        {/* <button> to <Link> */}
        <Link to={"/cart"} className={clsx("text-sm", "text-[#0b74e5]")}>
          Thay đổi
        </Link>
      </div>
      <div className="flex items-center mb-4">
        <span
          className={clsx("text-sm", "font-semibold", "text-[#808089]", "mr-1")}
        >
          {items.length} Sản phẩm
        </span>
        <button
          className={clsx(
            "text-sm",
            "font-semibold",
            "text-[#0b74e5]",
            "flex",
            "items-center"
          )}
          onClick={() => setToggleBillDetail(!toggleBillDetail)}
        >
          <span>{toggleBillDetail ? "Thu gọn" : "Xem thông tin"}</span>
          <svg
            className={clsx("rotate-90", {
              "-rotate-90": toggleBillDetail,
            })}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.96967 8.46967C10.2626 8.17678 10.7374 
          8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 
          11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 
          15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 
          15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 
          14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 
          9.67678 8.76256 9.96967 8.46967Z"
              fill="#0B74E5"
            />
          </svg>
        </button>
      </div>
      {/* end: info person */}
      {/* start: bill detail */}
      {toggleBillDetail && (
        <WrapperBill>
          {items.map((item, index) => (
            <BillDetail key={index} data={item} />
          ))}
        </WrapperBill>
      )}
      {/* end: bill detail */}
      {/* start: compute bill */}
      <WrapperBill>
        <WrappedItem>
          <ComputeBill context={"Tạm tính"} />
          <ComputeBill
            context={(TOTAL + voucher).toLocaleString(CURRENCY) + "đ"}
          />
        </WrappedItem>
        <WrappedItem>
          <ComputeBill context={"Phí vận chuyển"} />
          <ComputeBill context={"40.000đ"} />
        </WrappedItem>
      </WrapperBill>
      {/* end: compute bill */}
      {/* start: result bill */}
      <div
        className={clsx(
          "border-t",
          "border-[#dcdcdc]",
          "border-dashed",
          "px-2",
          "py-4",
          "flex justify-between"
        )}
      >
        <span className={clsx("text-sm", "font-normal", "text-[#38383d]")}>
          Tổng tiền
        </span>
        <div className={clsx("flex", "flex-col", "items-end")}>
          <div
            className={clsx(
              "text-[1.25rem]",
              "leading-8",
              "font-medium",
              "text-[#ff424e]"
            )}
          >
            {(TOTAL + voucher + 40000).toLocaleString(CURRENCY)}₫
          </div>
          <div className={clsx("text-xs", "text-[#808089]")}>
            (Đã bao gồm VAT nếu có)
          </div>
        </div>
      </div>
      <button
        className={clsx(
          "w-full",
          "py-[0.625rem]",
          "text-base",
          "font-medium",
          "text-white",
          "bg-[#008641]",
          "rounded"
        )}
        onClick={handleSubmitPayment}
      >
        Đặt hàng
      </button>
      {/* end: result bill */}
    </div>
  );
}

export default Bill;
