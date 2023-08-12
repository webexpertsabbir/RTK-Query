import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteProduct, fatchProducts, postProduct } from "./productsApi";


const initialState = {
    products: [],
    isLoading: false,
    postSuccess: false,
    deleteSuccess: false,
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

export const addProduct = createAsyncThunk("products/addProducts", async (data) => {
    const products = postProduct(data);
    return products;
})

export const removeProduct = createAsyncThunk("products/removeProduct", async (id) => {
    const products = deleteProduct(id);
    return products;
})


export const porductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        togglePostSuccess: state => {
            state.postSuccess = false;
        },
        toggleDeleteSuccess: state => {
            state.postSuccess = false;
        }
    },
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
            .addCase(addProduct.pending, (state, action) => {
                state.isLoading = true;
                state.postSuccess = false;
                state.isError = false;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                // state.products = action.payload;
                state.postSuccess = true;
                state.isLoading = false;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.products = [];
                state.postSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })


            .addCase(removeProduct.pending, (state, action) => {
                state.isLoading = true;
                state.deleteSuccess = false;
                state.isError = false;
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                // state.products = action.payload;
                state.deleteSuccess = true;
                state.isLoading = false;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.products = [];
                state.deleteSuccess = false;
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

export const { togglePostSuccess } = porductsSlice.actions;

export default porductsSlice.reducer;