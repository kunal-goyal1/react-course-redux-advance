import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            let found = false;
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === item.id) {
                    state.items[i].quantity++;
                    found = true;
                }
            }
            if (!found) {
                state.items.push({ ...item, quantity: 1 });
            }
            state.totalQuantity++;
        },
        removeItem(state, action) {
            const id = action.payload;
            const newItems = [];
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === id && state.items[i].quantity > 1) {
                    newItems.push({ ...state.items[i] });
                    newItems[i].quantity--;
                } else if (
                    state.items[i].id !== id &&
                    state.items[i].quantity > 1
                ) {
                    newItems.push({ ...state.items[i] });
                }
            }
            state.totalQuantity--;
            state.items = [...newItems];
        },
    },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
