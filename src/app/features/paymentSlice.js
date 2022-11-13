import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { paymentApi } from "../../app/payment/paymentApi";

export const addOrderShipping = createAsyncThunk(
  "order/addOrderShipping",
  async (data, { rejectWithValue }) => {
    try {
      const response = await paymentApi.addOrder(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const paymentWithMomo = createAsyncThunk(
  "order/paymentWithMomo",
  async (order) => {
    const response = await paymentApi.paymentWithMomo(order);
    return response;
  }
);

export const getOrdersByUser = createAsyncThunk(
  "product/orderofuser",
  async (params, { rejectWithValue }) => {
    try {
      const response = await paymentApi.getOrdersByUserId();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (params, { rejectWithValue }) => {
    try {
      const response = await paymentApi.getAllOrder();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const paymentSlice = createSlice({
  name: "order",
  initialState: {
    order: {},
    orders: [],
    isLoading: false,
    isError: false,
    error: "",
  },
  extraReducers: {
    [addOrderShipping.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addOrderShipping.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    },
    [addOrderShipping.rejected]: (state, action) => {
      state.loading = false;
      state.isError = true;
    },
    [paymentWithMomo.pending]: (state) => {
      state.isLoading = true;
    },
    [paymentWithMomo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [paymentWithMomo.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [getOrders.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    [getOrders.rejected]: (state, action) => {
      state.loading = false;
      state.isError = true;
    },
    [getOrdersByUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getOrdersByUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.itemsOrder = action.payload.orders;
    },
    [getOrdersByUser.rejected]: (state, action) => {
      state.loading = false;
      state.isError = true;
    },
  },
});

export default paymentSlice.reducer;
