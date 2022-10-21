import { axiosClient, baseURL } from "../axiosClient";

export const productApi = {
  getAllProduct() {
    const url = `${baseURL.product}/getProducts`;
    return axiosClient.get(url);
  },
  getProductById(productId) {
    const url = `${baseURL.product}/products?id=${productId}`;
    return axiosClient.get(url, productId);
  },
  getProductBySlug(slug) {
    const url = `${baseURL.product}/${slug}`;
    return axiosClient.get(url, slug);
  },
  postProduct(options = {}) {
    const url = `${baseURL.product}/products`;
    return axiosClient.post(url, options);
  },
  // DELETE PRODUCT
  deleteProduct(options = {}) {
    const url = `${baseURL.product}/products/${options.id}`;
    return axiosClient.delete(url);
  },
  // UPDATA PRODUCT
  putProduct(options = {}) {
    const url = `${baseURL.product}/products/${options.id}`;
    return axiosClient.put(url, options);
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
  deleteCategoryById(categoryId) {
    const url = `${baseURL.product}/categories/${categoryId}`;
    return axiosClient.delete(url);
  },
  createCategory(data) {
    const url = `${baseURL.product}/categories`;
    return axiosClient.post(url, data);
  },
  updateCategory(data) {
    const url = `${baseURL.product}/categories/${data.id}`;
    return axiosClient.put(url, data);
  },
  getProgramsTiki() {
    const url = `${baseURL.product}/programs`;
    return axiosClient.get(url);
  },
  getOutstandCategories() {
    const url = `${baseURL.product}/featurecategories`;
    return axiosClient.get(url);
  },
  getComments() {
    const url = `${baseURL.product}/comments`;
    return axiosClient.get(url);
  }
};
