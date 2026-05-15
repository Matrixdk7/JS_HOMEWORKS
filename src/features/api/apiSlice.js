import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ limit = 9, skip = 0 } = {}) =>
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
        getProductsByCategory: builder.query({
            query: ({ category, limit = 9, skip = 0 }) =>
                `products/category/${category}?limit=${limit}&skip=${skip}`,
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetCategoriesQuery,
    useSearchProductsQuery,
    useGetProductsByCategoryQuery,
} = apiSlice