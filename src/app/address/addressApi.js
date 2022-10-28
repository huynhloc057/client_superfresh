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
  deleteAddress(addressId) {
    const url = `${baseURL.address}/delete`;
    return axiosClient.post(url, addressId);
  },
  setDefaultDeliveryInfo: (addressId) => {
    const url = `${baseURL.address}/setDefaultDeliveryInfo`;
    return axiosClient.post(url, addressId);
  },
};
