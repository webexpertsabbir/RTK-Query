import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import filteSlice from "../features/filter/filteSlice";
import productsSlice from "../features/products/productsSlice";
const { configureStore} = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filteSlice,
        products: productsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;