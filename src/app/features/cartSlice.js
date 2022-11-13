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
      const isItemExist = state.cartItems.find((item) => {
        return item._id === payload._id;
      });
      if (!isItemExist) {
        state.cartItems = [
          ...state.cartItems,
          { ...payload, quantityChoose: payload.quantityChoose },
        ];
        state.checkedItems = [...state.checkedItems, false];
        state.quantity += payload.quantityChoose;
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item._id === payload._id) {
            state.quantity += payload.quantityChoose;
            return {
              ...item,
              quantityChoose: item.quantityChoose + payload.quantityChoose,
            };
          } else {
            return item;
          }
        });
      }
      state.modalOpen = true;
      state.totalAmount += Number(payload.price * payload.quantityChoose);
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== payload._id
      );

      state.quantity -= payload.quantityChoose;
      state.totalAmount -= payload.price * payload.quantityChoose;
      const temp = [...state.checkedItems];
      temp.splice(payload.index, 1);
      state.checkedItems = [...temp];
    },

    addItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        // if (item._id === payload._id && item.quantity < payload.quantityChoose) {
        if (item._id === payload._id) {
          state.quantity++;
          state.totalAmount += Number(payload.price);
          return { ...item, quantityChoose: item.quantityChoose + 1 };
        } else {
          return item;
        }
      });
    },

    subtractItemQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item._id === payload._id);
      if (subItem.quantityChoose === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem.quantityChoose -= 1;
      }
      state.quantity--;
      state.totalAmount -= Number(subItem.price);
    },
    setResetCart: (state, action) => {
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
