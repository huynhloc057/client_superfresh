import { axiosClient, baseURL } from "../axiosClient";

export const userApi = {
  signUp(formValue) {
    const url = `${baseURL.user}/signup`;
    return axiosClient.post(url, formValue);
  },
  signIn(formValue) {
    const url = `${baseURL.user}/signin`;
    return axiosClient.post(url, formValue);
  },
  loginByGoogle: (token) =>
    axiosClient.post(`${baseURL.user}/signin/google`, token),
  updateUser(user) {
    const url = `${baseURL.user}/user/update`;
    return axiosClient.post(url, user);
  },
  getUser() {
    const url = `${baseURL.user}/isUserLoggedIn`;
    return axiosClient.post(url);
  },
};
