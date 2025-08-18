import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name: "mywishlist",
    initialState: [],
    reducers: {
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
          return  state=state.filter(pro=>pro.id!=action.payload)
        }

    }
})

export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions

export default wishlistSlice.reducer