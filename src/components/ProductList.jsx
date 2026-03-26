import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.scss";
import PropTypes from "prop-types";

const ProductList = ({ products, onDelete, onToggleActive }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onDelete={onDelete}
                    onToggleActive={onToggleActive}
                />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleActive: PropTypes.func.isRequired,
};

export default ProductList;