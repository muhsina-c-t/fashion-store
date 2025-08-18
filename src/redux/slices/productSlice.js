import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const result = await axios('https://dummyjson.com/products')
    localStorage.setItem('allProducts', JSON.stringify(result.data.products))
    return result.data.products

})


const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        dummyAllproduct:[],
        loading: false,
        error: ""

    },
    reducers: {
        searchProduct: (state, action) => {
         state.allProducts=state.dummyAllproduct.filter(pro=>pro.title.toLowerCase().includes(action.payload))
        }


    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload
            state.dummyAllproduct=action.payload
            state.loading = false
            state.error = ""
        })

        builder.addCase(fetchProducts.pending, (state, action) => {
            state.allProducts = []
            state.loading = true
            state.error = ""
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.allProducts = []
            state.loading = false
            state.error = 'API CALL FAILED... Please try after some times'
        })

    }

})
export default productSlice.reducer
export const {searchProduct}=productSlice.actions