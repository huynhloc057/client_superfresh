import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addressApi } from "../address/addressApi";

export const addDeliveryInfo = createAsyncThunk(
  "address/add",
  async (address, { rejectWithValue }) => {
    try {
      const response = await addressApi.addAddress({ address });
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDeliveryInfo = createAsyncThunk(
  "address/get",
  async (rejectWithValue) => {
    try {
      const response = await addressApi.getAddress();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const setDefaultDeliveryInfo = createAsyncThunk(
  "address/setDefaultDeliveryInfo",
  async (payload, thunkAPI) => {
    const response = await addressApi.setDefaultDeliveryInfo(payload);
    await thunkAPI.dispatch(getDeliveryInfo());
    return response;
  }
);
const addressSlice = createSlice({
  name: "address",
  initialState: {
    deliveryInfo: {},
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    setAddress: (state, action) => {
      console.log(action.payload);
      state.deliveryInfo = action.payload;
    },
  },
  extraReducers: {
    [addDeliveryInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addDeliveryInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
    },
    [addDeliveryInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [getDeliveryInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getDeliveryInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload.deliveryInfo)
      state.deliveryInfo = action.payload.deliveryInfo;
    },
    [getDeliveryInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [setDefaultDeliveryInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [setDefaultDeliveryInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [setDefaultDeliveryInfo.fulfilled]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;
