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

export const getOrdersByUser = createAsyncThunk(
  "product/orderofuser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await paymentApi.getOrdersByUserId(userId);
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

export const updateOrder = createAsyncThunk(
  "order/orderPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await paymentApi.updateOrder(data);
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
      state.itemsOrder = action.payload;
    },
    [getOrdersByUser.rejected]: (state, action) => {
      state.loading = false;
      state.isError = true;
    },
    [updateOrder.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.itemsOrder = action.payload;
    },
    [updateOrder.rejected]: (state, action) => {
      state.loading = false;
      state.isError = true;
    },
  },
});

export default paymentSlice.reducer;
