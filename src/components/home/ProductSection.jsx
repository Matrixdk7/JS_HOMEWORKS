import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'

const ProductSection = ({ title, products }) => {
    return (
        <section className="py-10">
            <h2 className="mb-8 text-center text-[34px] font-bold uppercase">{title}</h2>

            <div className="grid grid-cols-4 gap-5">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-8 flex justify-center border-b border-gray-200 pb-10">
                <Link
                    to="/category"
                    className="rounded-full border border-gray-200 px-10 py-3 text-sm font-medium"
                >
                    View All
                </Link>
            </div>
        </section>
    )
}

export default ProductSection