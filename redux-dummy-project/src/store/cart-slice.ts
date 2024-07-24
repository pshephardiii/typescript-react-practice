import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // reducer methods
    reducers: {
        addToCart(state, action: PayloadAction<{ id: string; title: string; price: number}>) {
            const itemIndex = state.items.findIndex( 
                (item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        // only need string type since we just need id to remove
        removeFromCart(state, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex( 
                (item) => item.id === action.payload
            )

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1)
            } else {
                state.items[itemIndex].quantity--
            }
        }
    }
})