import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ limit = 9, skip = 0 }) =>
                `products?limit=${limit}&skip=${skip}`,
        }),

        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),

        getCategories: builder.query({
            query: () => 'products/categories',
        }),

        searchProducts: builder.query({
            query: (searchTerm) => `products/search?q=${searchTerm}`,
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetCategoriesQuery,
    useSearchProductsQuery,
} = apiSlice