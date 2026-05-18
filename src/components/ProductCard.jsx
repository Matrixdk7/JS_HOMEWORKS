import Rating from './Rating'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
    const discountedPrice = (
        product.price *
        (1 - product.discountPercentage / 100)
    ).toFixed(0)

    const hasDiscount = product.discountPercentage > 0

    return (
        <Link to={`/product/${product.id}`}>
        <article className="group px-1">
            <div className="aspect-[295/298] overflow-hidden rounded-[18px] bg-[#F0EEED] p-4">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
            </div>

            <h3 className="mt-3 line-clamp-1 text-[16px] font-semibold text-black product-card-title">
                {product.title}
            </h3>

            <div className="mt-1">
                <Rating value={product.rating} />
            </div>

            <div className="mt-2 flex items-center gap-2">
        <span className="text-[20px] font-bold text-black">
          ${discountedPrice}
        </span>

                {hasDiscount && (
                    <>
            <span className="text-[20px] font-bold text-gray-400 line-through">
              ${product.price}
            </span>

                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-500">
              -{Math.round(product.discountPercentage)}%
            </span>
                    </>
                )}
            </div>
        </article>
        </Link>
    )
}

export default ProductCard