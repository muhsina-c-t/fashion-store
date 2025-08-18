import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'
import wishlistSlice from './slices/wishlistSlice'
import cartSlice from './slices/cartSlice'

const shopyStore = configureStore({
    reducer: {
        productReducer: productReducer,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})
export default shopyStore