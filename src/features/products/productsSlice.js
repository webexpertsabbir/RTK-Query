import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fatchProducts } from "./productsApi";


const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    // const res = await fetch("products.json");
    // const data = await res.json();
    const products = fatchProducts()
    // console.log(data)
    return products;
})


export const porductsSlice = createSlice({
    name: "products",
    initialState,
    // reducers: {}
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

export default porductsSlice.reducer;