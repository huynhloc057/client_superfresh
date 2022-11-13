import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../product/productApi";

export const getProducts = createAsyncThunk(
  "product/allProduct",
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getAllProduct();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProductDetail = createAsyncThunk(
  "product/detail",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductBySlug(slug);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCategories = createAsyncThunk(
  "product/categories",
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getAllCategory();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProductByCategory = createAsyncThunk(
  "product/productofcategory",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductByCategoryId(categoryId);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCategoryNameById = createAsyncThunk(
  "product/categoryName",
  async ({ categoryId }, { rejectWithValue }) => {
    try {
      const response = await productApi.getCategoryById(categoryId);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addReviewProduct = createAsyncThunk(
  "product/addReview",
  async (review, { rejectWithValue }) => {
    try {
      const response = await productApi.addProductReview(review);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productDetail: {},
    categories: [],
    category: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    setCategoryTab: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: {
    [getProductDetail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductDetail.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.productDetail = payload.product;
    },
    [getProductDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.products;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },

    // end updateProduct
    [getCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload.categories;
    },
    [getCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [getProductByCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductByCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.product;
    },
    [getProductByCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [getCategoryNameById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategoryNameById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
    },
    [getCategoryNameById.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { setCategoryTab } = productSlice.actions;
export default productSlice.reducer;
