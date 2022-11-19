import { axiosClient, baseURL } from '../axiosClient'

export const userApi = {
  signUp(formValue) {
    const url = `${baseURL.user}/signup`
    return axiosClient.post(url, formValue)
  },
  signIn(formValue) {
    const url = `${baseURL.user}/signin`
    return axiosClient.post(url, formValue)
  },
  loginByGoogle: (token) =>
    axiosClient.post(`${baseURL.user}/signin/google`, token),
  updateUserInfo(form) {
    const url = `${baseURL.auth}/updateUserInfo`
    console.log(form)
    return axiosClient.post(url, form)
  },
  getUser() {
    const url = `${baseURL.user}/isUserLoggedIn`
    return axiosClient.post(url)
  },
}
