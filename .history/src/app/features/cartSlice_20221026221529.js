import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    cartItems: [],
    totalAmount: 0,
    modalOpen: false,
    checkedItems: [],
    currentTotal: 0,
    items: [],
    voucher: 0,
    indexChoose: -1,
    checkedPayment: 0,
  },

  reducers: {
    addToCart: (state, { payload }) => {
      const isItemExist = state.cartItems.find(
        (item) => item._id === payload._id
      );
      if (!isItemExist) {
        state.cartItems = [
          ...state.cartItems,
          { ...payload, quantity: payload.quantity },
        ];
        state.checkedItems = [...state.checkedItems, false];
        state.quantityChoose += payload.quantity;
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item._id === payload._id) {
            state.quantityChoose += payload.quantity;
            return { ...item, quantity: item.quantity + payload.quantity };
          } else {
            return item;
          }
        });
      }
      state.modalOpen = true;
      state.totalAmount += Number(payload.price * payload.quantity);
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );

      state.quantityChoose -= payload.quantity;
      state.totalAmount -= payload.price * payload.quantity;
      const temp = [...state.checkedItems];
      temp.splice(payload.index, 1);
      state.checkedItems = [...temp];
    },

    addItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        // if (item._id === payload._id && item.quantity < payload.quantity) {
        if (item._id === payload._id) {
          state.quantityChoose++;
          state.totalAmount += Number(payload.price);
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },

    subtractItemQuantity: (state, { payload }) => {
      console.log(payload);
      const subItem = state.cartItems.find((item) => item._id === payload._id);
      if (subItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem.quantity -= 1;
      }
      state.quantityChoose--;
      state.totalAmount -= Number(subItem.price);
    },
    setResetCart: (state, action) => {
      localStorage.clear();
      state.quantity = 0;
      state.cartItems = [];
      state.totalAmount = 0;
      state.setModalOpen = false;
      state.checkedItems = [];
      state.currentTotal = 0;
      state.items = [];
      state.voucher = 0;
      state.indexChoose = -1;
      state.checkedPayment = 0;
    },
    setModalOpen: (state, { payload }) => {
      state.modalOpen = payload.modalOpen;
    },
    setCheckedItems: (state, { payload }) => {
      state.checkedItems = payload;
    },
    setCurrentTotal: (state, { payload }) => {
      state.currentTotal = payload;
    },
    setPaymentItems: (state, { payload }) => {
      state.items = payload;
    },
    setVoucher: (state, { payload }) => {
      state.voucher = payload;
    },
    setIndexChoose: (state, { payload }) => {
      state.indexChoose = payload;
    },
    setCheckedPayment: (state, { payload }) => {
      state.checkedPayment = payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
  setResetCart,
  setModalOpen,
  setCheckedItems,
  setCurrentTotal,
  setPaymentItems,
  setVoucher,
  setIndexChoose,
  setCheckedPayment,
} = cartSlice.actions;

export default cartSlice.reducer;
