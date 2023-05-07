import { axiosClient, baseURL } from "../axiosClient";

export const productApi = {
  getAllProduct() {
    const url = `${baseURL.product}/getProducts`;
    return axiosClient.get(url);
  },
  getProductBySlug(slug) {
    const url = `${baseURL.product}/${slug}`;
    return axiosClient.get(url);
  },
  getNewestProductList() {
    const url = `${baseURL.product}/getNewestProducts`;
    return axiosClient.get(url);
  },
  getAllCategory() {
    const url = `${baseURL.category}/getCategories`;
    return axiosClient.get(url);
  },
  getProductByCategoryId(categoryId) {
    const url = `${baseURL.product}/getProductsByCategory/${categoryId}`;
    return axiosClient.get(url);
  },
  getCategoryById(categoryId) {
    const url = `${baseURL.product}/categories?id=${categoryId}`;
    return axiosClient.get(url);
  },
  addProductReview(review) {
    const url = `${baseURL.product}/addProductReview`;
    return axiosClient.post(url, review);
  },
};
