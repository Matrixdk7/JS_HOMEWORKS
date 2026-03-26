import React from "react";
import "./ProductCard.scss";
import PropTypes from "prop-types";

const ProductCard = ({ product, onDelete, onToggleActive }) => {

    const {
        name,
        brand,
        price,
        discountPrice,
        description,
        mainImageUrl,
        active,
        inStock,
        onMainPage,
    } = product;

    return (
        <div className="product-card">
            <img src={mainImageUrl} alt={name} className="product-image" />

            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p className="product-brand">{brand}</p>
                <p className="product-description">{description}</p>

                <div className="product-prices">
                    {discountPrice ? (
                        <>
                            <span className="old-price">${price}</span>
                            <span className="discount-price">${discountPrice}</span>
                        </>
                    ) : (
                        <span className="price">${price}</span>
                        )}
                </div>

                <div className="product-status">
          <span className={`status ${active ? "active" : "inactive"}`}>
            {active ? "Active" : "Inactive"}
          </span>
                    {inStock && <span className="in-stock">In Stock</span>}
                    {onMainPage && <span className="on-main-page">On Main Page</span>}
                </div>
            </div>

            <div className="product-actions">
                <button
                    className="delete-btn"
                    onClick={() => onDelete(product.id)}
                >
                    Delete
                </button>
                <button
                    className="toggle-active-btn"
                    onClick={() => onToggleActive(product.id)}
                >
                    {product.active ? "Active" : "Inactive"}
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        discountPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        category: PropTypes.string,
        brand: PropTypes.string,
        article: PropTypes.string,
        count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        mainImageUrl: PropTypes.string,
        secondaryImageUrl: PropTypes.string,
        active: PropTypes.bool,
        inStock: PropTypes.bool,
        onMainPage: PropTypes.bool,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleActive: PropTypes.func.isRequired,
};

export default ProductCard;