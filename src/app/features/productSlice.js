import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productApi } from '../product/productApi'

export const getProducts = createAsyncThunk(
  'product/allProduct',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getAllProduct()
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (data, { rejectWithValue }) => {
    try {
      const response = await productApi.postProduct(data)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (options, { rejectWithValue }) => {
    try {
      await productApi.deleteProduct(options)
      return options
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (options, { rejectWithValue }) => {
    try {
      const res = await productApi.putProduct(options)
      return res
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const getAllProgramTiki = createAsyncThunk(
  'product/programs',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getProgramsTiki()
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getProductDetail = createAsyncThunk(
  'product/detail',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductBySlug(slug)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getCategories = createAsyncThunk(
  'product/categories',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getAllCategory()
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getProductByCategory = createAsyncThunk(
  'product/productofcategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductByCategoryId(categoryId)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getCategoryNameById = createAsyncThunk(
  'product/categoryName',
  async ({ categoryId }, { rejectWithValue }) => {
    try {
      const response = await productApi.getCategoryById(categoryId)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
export const deleteCategoryNameById = createAsyncThunk(
  'product/categoryDelete',
  async ({ id }, { rejectWithValue }) => {
    console.log(id)
    try {
      const response = await productApi.deleteCategoryById(id)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
export const createCategory = createAsyncThunk(
  'product/categoryPost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await productApi.createCategory(data)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
export const updateCategory = createAsyncThunk(
  'product/categoryPost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await productApi.updateCategory(data)
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getOutstandCategory = createAsyncThunk(
  'product/outstand',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getOutstandCategories()
      return response
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    productDetail: {},
    categories: [],
    category: [],
    programs: [],
    outstands: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    setCategoryTab: (state, action) => {
      state.category = action.payload
    },
  },
  extraReducers: {
    [getProductDetail.pending]: (state, action) => {
      state.isLoading = true
    },
    [getProductDetail.fulfilled]: (state, {payload}) => {
      state.isLoading = false
      state.productDetail = payload.product
    },
    [getProductDetail.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    [getProducts.pending]: (state, action) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, {payload}) => {
      state.isLoading = false
      state.products = payload.products
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    // start addProduct
    [addProduct.pending]: (state, action) => {
      state.isLoading = true
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.products.push(action.payload)
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    // end addProduct
    // start deleteProduct
    [deleteProduct.pending]: (state, action) => {
      state.isLoading = true
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.products.splice(payload.index, 1)
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    // end deleteProduct
    // start updateProduct
    [updateProduct.pending]: (state, action) => {
      state.isLoading = true
    },
    [updateProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false

      const product = state.products.filter(
        (product) => product.id === payload.id
      )

      product[0].name = payload.name
      product[0].description = payload.description
      product[0].price = payload.price
      product[0].quantitySell = payload.quantitySell
      product[0].thumbnailUrl = payload.thumbnailUrl

      product[0].images[0].thumbnailUrl = payload.images[0].thumbnailUrl
      product[0].images[1].thumbnailUrl = payload.images[1].thumbnailUrl
      product[0].images[2].thumbnailUrl = payload.images[2].thumbnailUrl
      product[0].images[3].thumbnailUrl = payload.images[3].thumbnailUrl
      product[0].images[4].thumbnailUrl = payload.images[4].thumbnailUrl
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    // end updateProduct
    [getCategories.pending]: (state, action) => {
      state.isLoading = true
    },
    [getCategories.fulfilled]: (state, {payload}) => {
      state.isLoading = false
      state.categories = payload.categories
    },
    [getCategories.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    [getProductByCategory.pending]: (state, action) => {
      state.isLoading = true
    },
    [getProductByCategory.fulfilled]: (state, {payload}) => {
      state.isLoading = false
      state.products = payload.product
    },
    [getProductByCategory.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    [getCategoryNameById.pending]: (state, action) => {
      state.isLoading = true
    },
    [getCategoryNameById.fulfilled]: (state, action) => {
      state.isLoading = false
      state.category = action.payload
    },
    [getCategoryNameById.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    [deleteCategoryNameById.pending]: (state, action) => {
      state.isLoading = true
    },
    [deleteCategoryNameById.fulfilled]: (state, action) => {
      state.isLoading = false
      state.category = action.payload
    },
    [deleteCategoryNameById.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    [createCategory.pending]: (state, action) => {
      state.isLoading = true
    },
    [createCategory.fulfilled]: (state, action) => {
      state.isLoading = false
      state.category = action.payload
    },
    [createCategory.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    [updateCategory.pending]: (state, action) => {
      state.isLoading = true
    },
    [updateCategory.fulfilled]: (state, action) => {
      state.isLoading = false
      state.category = action.payload
    },
    [updateCategory.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },

    [getAllProgramTiki.pending]: (state, action) => {
      state.isLoading = true
    },
    [getAllProgramTiki.fulfilled]: (state, action) => {
      state.isLoading = false
      state.programs = action.payload
    },
    [getAllProgramTiki.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
    [getOutstandCategory.pending]: (state, action) => {
      state.isLoading = true
    },
    [getOutstandCategory.fulfilled]: (state, action) => {
      state.isLoading = false
      state.outstands = action.payload
    },
    [getOutstandCategory.rejected]: (state, action) => {
      state.loading = false
      state.isError = true
      state.errorMessage = action.payload
    },
  },
})

export const { setCategoryTab } = productSlice.actions
export default productSlice.reducer
