import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "UI",
    initialState: { showCart: true },
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
    },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
