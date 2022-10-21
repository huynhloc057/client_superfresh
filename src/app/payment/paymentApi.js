import { axiosClient, baseURL } from "../axiosClient";

export const paymentApi = {
  addOrder(order) {
    const url = `${baseURL.order}/add`;
    return axiosClient.post(url, order);
  },

  getOrdersByUserId(userId) {
    const url = `${baseURL.order}/orders?userId=${userId}`;
    return axiosClient.get(url);
  },

  getAllOrder() {
    const url = `${baseURL.product}/orders`;
    return axiosClient.get(url);
  },

  getOrderById(orderId) {
    const url = `${baseURL.product}/orders?id=${orderId}`;
    return axiosClient.get(url);
  },

  updateOrder(data) {
    const url = `${baseURL.product}/orders/${data.id}`;
    return axiosClient.put(url, data);
  },
};
