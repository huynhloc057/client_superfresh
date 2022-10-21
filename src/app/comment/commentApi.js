import { axiosClient, baseURL } from "../axiosClient";

export const commentApi = {
  createComment(comment) {
    const url = `${baseURL.product}/addProductReview`;
    return axiosClient.post(url, comment);
  },

  getCommentsByProduct(productId) {
    const url = `${baseURL.product}/comments?productId=${productId}`;
    return axiosClient.get(url);
  },
  getCommentsById(cmtId) {
    const url = `${baseURL.product}/comments?_id=${cmtId}`;
    return axiosClient.get(url);
  },

  deleteComment(cmtId) {
    const url = `${baseURL.product}/comments/${cmtId}`;
    return axiosClient.delete(url);
  },

  updateComment(updatedCommentData) {
    const url = `${baseURL.product}/comments/${updatedCommentData.id}`;
    return axiosClient.put(url, updatedCommentData);
  },
};
