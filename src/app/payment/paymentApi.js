import { axiosClient, baseURL } from "../axiosClient";

export const paymentApi = {
  addOrder(order) {
    const url = `${baseURL.order}/add`;
    return axiosClient.post(url, order);
  },
  paymentWithMomo(order) {
    const url = `${baseURL.order}/paymentWithMomo`;
    return axiosClient.post(url, order);
  },
  getOrdersByUserId() {
    const url = `${baseURL.order}/getOrders`;
    return axiosClient.post(url);
  },

  getAllOrder() {
    const url = `${baseURL.order}/getOrders`;
    return axiosClient.post(url);
  },

  getOrderById(orderId) {
    const url = `${baseURL.order}/orders?id=${orderId}`;
    return axiosClient.get(url);
  },
  cancelOrder: (payload) => {
    const url = `${baseURL.order}/updateType`;
    return axiosClient.post(url, payload);
  },
};
