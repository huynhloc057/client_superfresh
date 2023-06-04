import axios from "axios";

// export const baseURL = {
//   user: "http://localhost:5000/api/auth",
//   auth: "http://localhost:5000/api/user",
//   product: "http://localhost:5000/api/product",
//   category: "http://localhost:5000/api/category",
//   order: "http://localhost:5000/api/order",
//   address: "http://localhost:5000/api/deliveryInfo",
// };

export const baseURL = {
  user: "https://superfreshdemoforbackend.vercel.app/api/auth",
  auth: "https://superfreshdemoforbackend.vercel.app/api/user",
  product: "https://superfreshdemoforbackend.vercel.app/api/product",
  category: "https://superfreshdemoforbackend.vercel.app/api/category",
  order: "https://superfreshdemoforbackend.vercel.app/api/order",
  address: "https://superfreshdemoforbackend.vercel.app/api/deliveryInfo",
};

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).accessToken
          ? JSON.parse(localStorage.getItem("profile")).accessToken
          : JSON.parse(localStorage.getItem("profile")).token
      }`;
    }

    return req;
  },
  function error() {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async (error) => {
    const code = error.response.status;
    const msg = error.response.data?.msg;
    if (code && code === 401) {
      if (msg && msg === "jwt expired") {
        // console.log('this is case expired token case')
        // this is expired token case
        const config = error.response.config;
        //step 1 : retrieve new token from refresh token
        const newAccessToken = await refreshToken();
        if (newAccessToken) {
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          //step 2 : store in local storage
          await window.localStorage.setItem("accessToken", newAccessToken);
          //step 3 : resend the request
          return axiosClient(config);
        } else {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  const refreshToken = window.localStorage.getItem("refreshToken");
  if (!refreshToken) {
    return false;
  }
  const res = await axiosClient.post(
    `${axiosClient.baseURL}/auth/refreshToken`,
    {
      refreshToken,
    }
  );
  const data = res.data;
  const { newAccessToken } = data;
  return newAccessToken;
};

export { axiosClient };
