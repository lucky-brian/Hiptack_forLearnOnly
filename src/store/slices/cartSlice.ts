import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Carts } from "../../data/Products";

interface CartItem extends Carts {
    quantity: number;
    size: string;
}

interface CartState extends Array<CartItem> { }

const initialState: CartState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Carts>) => {
            const foundItem = state.find((item) => item.id === action.payload.id && item.size === action.payload.size);
            if (!foundItem) {
                // console.log('if')
                state.push({ ...action.payload, quantity: action.payload.quantity });
                //   state.push({ ...action.payload, quantity: action.payload.quantity , size: action.payload.size});
            } else {
                state.map((item) => {
                    if (item.id === foundItem.id && item.size === foundItem.size) {
                        item.quantity += action.payload.quantity;
                    }
                    return item;
                });
            }
        },
        deleteCartItem: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    }
})

export const { addToCart, deleteCartItem } = cartSlice.actions

export default cartSlice.reducer