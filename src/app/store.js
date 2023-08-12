import { productApi } from "../features/api/apiSlice";
import cartSlice from "../features/cart/cartSlice";
import filteSlice from "../features/filter/filteSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        cart: cartSlice,
        filter: filteSlice,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

export default store;