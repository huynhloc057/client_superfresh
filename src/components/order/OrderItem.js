import React from "react";
import { Link } from "react-router-dom";

const OrderItem = (props) => {
  const { orders, handleCancelOrder } = props;

  const lastOrderStatus = (order) => {
    var orderStatusObj = null;
    order.orderStatus.forEach((status) => {
      if (status.isCompleted) {
        orderStatusObj = status;
      }
    });
    return orderStatusObj.type;
  };
  const orderStatus = (order) => {
    const status =
      order.paymentStatus === "cancelled"
        ? "cancelled"
        : lastOrderStatus(order);
    switch (status) {
      case "ordered":
        return { status: "Đã đặt hàng", color: "blue" };
      case "packed":
        return { status: "Đã đóng gói", color: "orange" };
      case "shipped":
        return { status: "Đang giao hàng", color: "orange" };
      case "delivered":
        return { status: "Giao hàng thành công", color: "green" };
      case "cancelled":
        return { status: "Đã hủy", color: "red" };
      default:
        return "";
    }
  };

  return (
    <>
      {orders.map((order) => (
        <div className="order-item">
          <div className="order-item__heading">
            <h4 className="order-item__heading-id">
              Mã đơn hàng : {order._id}
            </h4>
            <h4
              className="order-item__heading-status"
              style={{ color: orderStatus(order).color }}
            >
              {orderStatus(order).status}
            </h4>
          </div>
          <div className="order-item__body">
            {/* Đây là danh sách các sản phẩm trong đơn hàng đó */}
            <ul className="order-item__body-list-item">
              {order.items.map((item) => (
                <li className="item">
                  <Link
                    to={`/product/${item.productId.slug}`}
                    className="item-link"
                  >
                    <div className="photo">
                      <img
                        src={item.productId.productPictures[0]?.img}
                        alt={item.productId.name}
                      />
                    </div>
                    <div className="content">
                      <h5 className="content__name">{item.productId.name}</h5>
                      {/* <p className="content__size">Size: {item.sizeId.size}</p> */}
                      <p className="content__quantity">
                        Số lượng : {item.purchaseQty}
                      </p>
                    </div>
                    <div className="price">
                      <p className="price__current">
                        ₫
                        {new Intl.NumberFormat("de-DE").format(
                          item.payablePrice
                        )}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {/* .................. */}
            <div className="summary">
              <div className="summary-payments">
                Hình thức thanh toán:{" "}
                <span>
                  {order.paymentType === "card" ? "MOMO" : order.paymentType}
                </span>
              </div>
              <div className="summary-money">
                <span className="summary-money__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                  </svg>
                </span>
                <p className="summary-money__content">Tổng số tiền:</p>
              </div>
              <p className="summary-price">
                ₫{new Intl.NumberFormat("de-DE").format(order.totalAmount)}
              </p>
            </div>
            {/* Button để hủy đơn nếu trong quá trình vận chuyển muốn hoàn lại */}
            {lastOrderStatus(order) === "ordered" &&
              order.paymentStatus !== "cancelled" &&
              order.paymentType !== "card" && (
                <div className="button">
                  <div
                    className="btn btn-cancel"
                    onClick={() => handleCancelOrder(order)}
                  >
                    Hủy
                  </div>
                </div>
              )}
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderItem;
