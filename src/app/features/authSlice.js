import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../user/userApi";

export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await userApi.signIn(formValue);
      toast.success("Login Successfully");
      navigate("/");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await userApi.signUp(formValue);
      toast.success("Register Successfully");
      navigate("/");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async ({ form, toast }, { rejectWithValue }) => {
    try {
      const response = await userApi.updateUserInfo(form);
      toast.success("Cập nhật thông tin thành công");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserById = createAsyncThunk(
  "auth/userDetail",
  async (params, { rejectWithValue }) => {
    try {
      const response = await userApi.getUser();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginByGoogle = createAsyncThunk(
  "auth/loginByGoogle",
  async (token, { rejectWithValue }) => {
    try {
      const response = await userApi.loginByGoogle(token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendOtpToEmail = createAsyncThunk(
  "auth/sendOtpToEmail",
  async (email) => {
    const response = await userApi.sendOtpToEmail(email);
    return response;
  }
);

export const updateForgetPassword = createAsyncThunk(
  "auth/updateForgetPassword",
  async (payload) => {
    const response = await userApi.updateForgetPassword(payload);
    return response;
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
    isLoading: false,
    isSuccess: false,
    message: "",
    errorMessage: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.userInfo = null;
      state.errorMessage = null;
      state.isError = false;
      state.userDetail = null;
      state.isLoading = false;
    },
    resetError: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.userInfo = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = action.payload.error;
    },
    [loginByGoogle.pending]: (state) => {
      state.isLoading = true;
    },
    [loginByGoogle.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.error;
    },
    [loginByGoogle.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.userInfo = action.payload;
    },
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userInfo = action.payload;
    },
    [getUserById.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.isSuccess = true;
    },
    [updateUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUserInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export const { setUser, setLogout, resetError, setPassword } =
  userSlice.actions;
export default userSlice.reducer;
