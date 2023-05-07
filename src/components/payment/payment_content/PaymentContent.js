import clsx from "clsx";
import PaymentProducts from "./PaymentProducts";
import { ChoosePays } from "./choose_pay";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  addOrderShipping,
  paymentWithMomo,
} from "../../../app/features/paymentSlice";
import { setResetCart } from "../../../app/features/cartSlice";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import BillDetail from "./bill/bill_detail/BillDetail";
import ComputeBill from "./bill/compute_bill/ComputeBill";
import { CURRENCY } from "./constraint";
import { WrappedItem, WrapperBill } from "./bill/wrapper";

function PaymentContent() {
  const { deliveryInfo } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const [address, setAddress] = useState(null);

  const setDefaultDeliveryInfo = () => {
    if (deliveryInfo.address) {
      const defaultAddress = deliveryInfo.address.find(
        (add) => add.isDefault === true
      );
      if (defaultAddress) {
        setAddress(defaultAddress);
      } else {
        setAddress(deliveryInfo.address[0]);
      }
    }
  };

  const { items, voucher, checkedPayment, currentTotal } = useSelector(
    (state) => state.cart
  );

  const [paymentType, setPaymentType] = useState("cod");
  const [toggleBillDetail, setToggleBillDetail] = useState(false);
  const TOTAL = useMemo(
    () =>
      items.reduce((total, product) => {
        return total + product.price * product.quantityChoose;
      }, 0),
    [items]
  );

  const getItemsToPay = () => {
    const orderItems = [];
    // eslint-disable-next-line array-callback-return
    items.map((item) => {
      orderItems.push({
        productId: item._id,
        payablePrice: item.price * item.quantityChoose,
        purchaseQty: item.quantityChoose,
      });
    });
    return orderItems;
  };

  // Set default address payment
  useEffect(() => {
    setDefaultDeliveryInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveryInfo]);

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
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (checkedPayment === 0) {
          setPaymentType("cod");
          const totalAmount = currentTotal + Number(voucher) + Number(40000);
          const data = {
            items: getItemsToPay(),
            totalAmount,
            addressId: address._id,
            paymentType,
            paymentStatus: "pending",
          };
          try {
            let { order } = await dispatch(addOrderShipping(data)).unwrap();
            if (order) {
              dispatch(setResetCart());
              navigate("/");
              Swal.fire("Đã đặt hàng thành công", "", "success");
            }
          } catch (error) {
            toast.error(
              "Số lượng sản phẩm trong kho không đủ ! Vui lòng chọn sản phẩm khác"
            );
            return;
          }
        } else if (checkedPayment === 1) {
          const totalAmount = currentTotal + Number(voucher) + Number(40000);
          const order = {
            items: getItemsToPay(),
            totalAmount,
            addressId: address._id,
            paymentType: "card",
            paymentStatus: "pending",
          };
          const res = await dispatch(paymentWithMomo({ order })).unwrap();
          const url = res.url;

          if (url) {
            dispatch(setResetCart());
            window.location.href = url;
          } else {
            alert("Hiện tại không thể thanh toán bằng hình thức này !");
          }
        }
      }
    });
  };

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
          <div className="flex justify-between">
            <span
              className={clsx(
                "not-italic",
                "font-normal",
                "text-[1.125rem]",
                "leading-5",
                "text-[#808089]",
                "mb-3"
              )}
            >
              Giao tới
            </span>
            {/* rename <button> to <Link> */}
            <Link to={"/shipping-address"} className="text-sm text-[#0b74e5]">
              Thay đổi
            </Link>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-semibold text-[#38383d]">
              {address?.name}
            </span>
            <div
              className={clsx("w-[0.063rem]", "h-5", "mx-2", "bg-[#ebebf0]")}
            ></div>
            <span className="text-sm font-semibold text-[#38383d]">
              {address?.phoneNumber}
            </span>
          </div>
          <div className="text-sm font-normal text-[#808089]">
            {address?.address}
          </div>
        </div>
        {/* <Bill /> */}
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
              className={clsx(
                "text-sm",
                "font-semibold",
                "text-[#808089]",
                "mr-1"
              )}
            >
              {items.length} Sản phẩm.
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
      </div>
    </div>
  );
}

export default PaymentContent;
