import ProductCard from '../ProductCard'

function RelatedProducts({ products }) {
    if (!products.length) return null

    return (
        <div className="mt-16">
            <h2 className="mb-8 text-3xl font-bold">
                You might also like
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts