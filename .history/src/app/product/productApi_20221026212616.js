import { axiosClient, baseURL } from "../axiosClient";

export const productApi = {
  getAllProduct() {
    const url = `${baseURL.product}/getProducts`;
    return axiosClient.post(url);
  },
  getProductBySlug(slug) {
    const url = `${baseURL.product}/${slug}`;
    return axiosClient.get(url);
  },
  getAllCategory() {
    const url = `${baseURL.category}/getCategories`;
    return axiosClient.get(url);
  },
  getProductByCategoryId(categoryId) {
    console.log(categoryId);
    const url = `${baseURL.product}/getProductsByCategory/${categoryId}`;
    return axiosClient.post(url);
  },
  getCategoryById(categoryId) {
    const url = `${baseURL.product}/categories?id=${categoryId}`;
    return axiosClient.get(url);
  },

  getComments() {
    const url = `${baseURL.product}/comments`;
    return axiosClient.get(url);
  },
};
