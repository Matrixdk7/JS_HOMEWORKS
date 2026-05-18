import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

store.subscribe(() => {
    localStorage.setItem(
        'cart',
        JSON.stringify(store.getState().cart.items)
    )
})