export const products = state => state.product.products;
export const productDetail = state => state.product.productDetail[0];
export const productDetailLoading = state => state.product.isLoading;
export const productLoading = state => state.product.isLoading;
export const productSuccess = state => state.product.isSuccess;