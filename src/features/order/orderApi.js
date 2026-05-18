import { apiSlice } from '../api/apiSlice'

export const orderApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createOrder: builder.mutation({
            query: orderData => ({
                url: '/carts/add',
                method: 'POST',
                body: orderData,
            }),
        }),
    }),
})

export const {
    useCreateOrderMutation,
} = orderApi