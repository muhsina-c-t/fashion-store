import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "mycart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // console.log("state", state, action.payload);

            const existingProduct = state.find(pro => pro.id == action.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalprice = existingProduct.quantity * existingProduct.price

            }
            else {
                state.push({ ...action.payload, quantity: 1, totalprice: action.payload.price })
            }
        },
        incrementQuantity: (state, action) => {
            const existingProduct = state.find(pro => pro.id == action.payload)

            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalprice = existingProduct.quantity * existingProduct.price

            }
        },
        decrementQuantity: (state, action) => {
            const existingProduct = state.find(pro => pro.id == action.payload)

            if (existingProduct) {
                existingProduct.quantity--
                existingProduct.totalprice = existingProduct.quantity * existingProduct.price
            }
        },
        removeCartItem:(state,action)=>{
            return state.filter(pro=>pro.id!=action.payload)
        },
        emptyCart:(state,action)=>{
            return []
        }
    }
})
export const { addToCart, incrementQuantity, decrementQuantity ,removeCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer