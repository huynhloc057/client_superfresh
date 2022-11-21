import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelOrder, getOrders } from "../app/features/paymentSlice";
import OrderItem from "../components/order/OrderItem";
// import Layout from "../components/layout/Layout";

const MyOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const [status, setStatus] = useState("all");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const lastOrderStatus = (order) => {
    var orderStatusObj = null;
    order.orderStatus.forEach((status) => {
      if (status.isCompleted) {
        orderStatusObj = status;
      }
    });
    return orderStatusObj.type;
  };

  const filteredOrders = (arr) => {
    if (status === "all") return arr;
    if (status === "cancelled") {
      return arr.filter((item) => item.paymentStatus === "cancelled");
    }
    const filteredArr = arr.filter((item) => {
      if (
        lastOrderStatus(item) === status &&
        item.paymentStatus !== "cancelled"
      )
        return true;
      return false;
    });
    return filteredArr;
  };

  const handleCancelOrder = async (order) => {
    if (window.confirm("Bạn có chắc muốn hủy đơn hàng này !")) {
      const payload = {
        orderId: order._id,
        type: "cancelled",
      };
      try {
        const res = await dispatch(cancelOrder(payload)).unwrap();
        if (res.order) {
          alert("Bạn đã hủy đơn hàng thành công !");
        } else {
          alert("Không thể hủy đơn hàng");
        }
      } catch (err) {
        alert("Đã có lỗi xảy ra");
      }
    }
  };
  if (!orders) {
    return null;
  }
  return (
    <div>
      <div className="account">
        <div className="container mgb-45">
          <div className="row">
            <div className="col-12">
              <div className="account-wrapper__order">
                <div className="account-wrapper__order__heading">
                  <h3>Đơn hàng</h3>
                  <div className="status-sort">
                    <span className="status-sort-label">Trạng thái: </span>
                    <select
                      name=""
                      id=""
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="all">Tất cả</option>
                      <option value="ordered">Đã đặt hàng</option>
                      <option value="packed">Đã đóng gói</option>
                      <option value="shipped">Đang giao hàng</option>
                      <option value="delivered">Giao hàng thành công</option>
                      <option value="cancelled">Đã hủy</option>
                    </select>
                  </div>
                </div>
                <div className="account-wrapper__order__body">
                  {/* 1 đơn hàng trong list các đơn hàng */}
                  {orders.length > 0 ? (
                    <OrderItem
                      orders={filteredOrders(orders)}
                      handleCancelOrder={handleCancelOrder}
                    />
                  ) : (
                    <h1
                      style={{
                        padding: "100px",
                        color: "green",
                        fontSize: "40px",
                      }}
                    >
                      {" "}
                      HIỆN TẠI CHƯA CÓ ĐƠN HÀNG NÀO ĐƯỢC MUA
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
