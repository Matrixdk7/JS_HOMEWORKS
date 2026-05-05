import React from 'react';
import {useGetProductsQuery} from "../features/api/apiSlice.js";

const CategoryPage = () => {
    const { data, isLoading, error } = useGetProductsQuery()

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <div>
            {data.products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    )
};

export default CategoryPage;