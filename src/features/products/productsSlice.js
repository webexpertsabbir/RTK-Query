import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const res = await fetch("products.json");
    const data = await res.json();
    // console.log(data)
    return data;
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