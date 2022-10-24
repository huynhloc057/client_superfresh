import { axiosClient, baseURL } from "../axiosClient";

export const addressApi = {
  addAddress(address) {
    const url = `${baseURL.address}/add`;
    return axiosClient.post(url, address);
  },
  getAddress() {
    const url = `${baseURL.address}/get`;
    return axiosClient.get(url);
  },
  setDefaultDeliveryInfo: (payload) => {
    const url = `${baseURL.address}/setDefaultDeliveryInfo`;
    return axiosClient.post(url, payload);
  },
};
