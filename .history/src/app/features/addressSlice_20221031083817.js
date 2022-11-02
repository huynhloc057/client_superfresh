import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addressApi } from '../address/addressApi'

export const addDeliveryInfo = createAsyncThunk(
  'address/add',
  async (address, { rejectWithValue }) => {
    try {
      const response = await addressApi.addAddress({ address })
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const deleteDeliveryInfo = createAsyncThunk(
  'address/delete',
  async (addressId, { rejectWithValue }) => {
    try {
      const response = await addressApi.deleteAddress({ addressId })
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getDeliveryInfo = createAsyncThunk(
  'address/get',
  async (rejectWithValue) => {
    try {
      const response = await addressApi.getAddress()
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const setDefaultDeliveryInfo = createAsyncThunk(
  'address/setDefaultDeliveryInfo',
  async (addressId, rejectWithValue) => {
    try {
      const response = await addressApi.setDefaultDeliveryInfo({ addressId })
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    deliveryInfo: {},
    isLoading: false,
    errorMessage: '',
    success: false,
    successDelete: false,
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload
    },
    resetSuccessAddress: (state, action) => {
      state.success = false
      state.isLoading = false
      state.errorMessage = ''
      state.successDelete = false
    },
  },
  extraReducers: {
    [addDeliveryInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [addDeliveryInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.success = true
    },
    [addDeliveryInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.errorMessage = action.payload
    },
    [deleteDeliveryInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [deleteDeliveryInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.successDelete = true
    },
    [deleteDeliveryInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.errorMessage = action.payload
    },
    [getDeliveryInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [getDeliveryInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.deliveryInfo = action.payload.deliveryInfo
    },
    [getDeliveryInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.errorMessage = action.payload
    },
    [setDefaultDeliveryInfo.pending]: (state) => {
      state.isLoading = true
    },
    [setDefaultDeliveryInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    [setDefaultDeliveryInfo.fulfilled]: (state) => {
      state.isLoading = false
      state.success = true
    },
  },
})

export const { setAddress, resetSuccessAddress } = addressSlice.actions
export default addressSlice.reducer
