import { useState } from 'react'
import { useGetProductsQuery, useGetProductsByCategoryQuery, useGetCategoriesQuery, } from '../features/api/apiSlice'
import ProductCard from '../components/ProductCard'
import CategoryFilter from '../components/filters/CategoryFilter'
import PriceFilter from '../components/filters/PriceFilter'
import ColorFilter from '../components/filters/ColorFilter'
import SizeFilter from '../components/filters/SizeFilter'
import StyleFilter from '../components/filters/StyleFilter'
import "./CategoryPage.css"

const CategoryPage = () => {
    const [page, setPage] = useState(1)
    const [priceRange, setPriceRange] = useState([0, 500])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [appliedCategory, setAppliedCategory] = useState(null)
    const [appliedPriceRange, setAppliedPriceRange] = useState([0, 500])
    const [sortBy, setSortBy] = useState('popular')

    const limit = 9
    const skip = (page - 1) * limit
    const shouldUseCategory = Boolean(appliedCategory)

    const productsQuery = useGetProductsQuery(
        shouldUseCategory ? undefined : { limit, skip },
        {
            skip: shouldUseCategory,
        }
    )

    const categoryQuery = useGetProductsByCategoryQuery(
        shouldUseCategory
            ? {
                category: appliedCategory,
                limit,
                skip,
            }
            : undefined,
        {
            skip: !shouldUseCategory,
        }
    )

    const activeQuery = shouldUseCategory ? categoryQuery : productsQuery

    const { data, isLoading, error } = activeQuery
    const { data: categories = [] } = useGetCategoriesQuery()
    const rawProducts = data?.products || []

    const filteredProducts = rawProducts.filter((product) => {
        const discountedPrice =
            product.price * (1 - product.discountPercentage / 100)

        return (
            discountedPrice >= appliedPriceRange[0] &&
            discountedPrice <= appliedPriceRange[1]
        )
    })

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return new Date(b.meta.createdAt) - new Date(a.meta.createdAt)

            case 'price-low':
                return a.price - b.price

            case 'price-high':
                return b.price - a.price

            case 'popular':
            default:
                return b.rating - a.rating
        }
    })

    const total = data?.total || 0
    const totalPages = Math.ceil(total / limit)

    function handleApplyFilters() {
        setAppliedCategory(selectedCategory)
        setAppliedPriceRange(priceRange)
        setPage(1)
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error loading products.</p>
    }

    return (
        <div className="mx-auto max-w-[1240px] px-4 py-8">
            <div className="mb-5 text-sm text-gray-400">
                Home <span className="mx-2">›</span> {selectedCategory || 'Casual'}
            </div>

            {/*<h1 className="mb-6 text-[32px] font-bold">*/}
            {/*    {selectedCategory || 'Casual'}*/}
            {/*</h1>*/}

            <div className="flex gap-5">
                <aside className="aside w-[295px] shrink-0 self-start h-fit rounded-[20px] border border-gray-200 bg-white p-6">
                    <div className="mb-2 flex items-center justify-between border-b pb-4">
                        <h3 className="text-[20px] font-bold text-black">Filters</h3>
                    </div>

                    <div className="flex flex-col">
                        <div className="pb-6">
                            <CategoryFilter
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onChange={setSelectedCategory}
                            />
                        </div>

                        <div className="border-t border-border py-6">
                            <PriceFilter
                                priceRange={priceRange}
                                onChange={setPriceRange}
                            />
                        </div>

                        <div className="border-t border-border py-6">
                            <ColorFilter />
                        </div>

                        <div className="border-t border-border py-6">
                            <SizeFilter />
                        </div>

                        <div className="border-t border-border pt-6">
                            <StyleFilter />
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleApplyFilters}
                        className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-black text-sm font-medium text-white"
                    >
                        Apply Filter
                    </button>
                </aside>

                <section className="flex-1">
                    <h1 className="mb-6 text-[32px] font-bold">
                        {selectedCategory || 'Casual'}
                    </h1>
                    <div className="mb-7 flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Showing {skip + 1}-{Math.min(skip + limit, total)} of {total} products
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Sort by:</span>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="rounded-md border border-gray-200 px-2 py-1 text-sm text-black"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-x-5 gap-y-9">
                        {sortedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((prev) => prev - 1)}
                            className="rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-600 disabled:opacity-40"
                        >
                            Previous
                        </button>

                        <div className="flex items-center gap-2">
                            {Array.from(
                                { length: Math.min(totalPages, 5) },
                                (_, index) => {
                                    const pageNumber = index + 1

                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => setPage(pageNumber)}
                                            className={`h-9 w-9 rounded-md text-sm ${
                                                page === pageNumber
                                                    ? 'bg-gray-100 font-medium text-black'
                                                    : 'text-gray-500 hover:bg-gray-50'
                                            }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    )
                                }
                            )}

                            {totalPages > 5 && (
                                <>
                                    <span className="px-1 text-gray-400">...</span>

                                    <button
                                        onClick={() => setPage(totalPages)}
                                        className="h-9 w-9 rounded-md text-sm text-gray-500 hover:bg-gray-50"
                                    >
                                        {totalPages}
                                    </button>
                                </>
                            )}
                        </div>

                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((prev) => prev + 1)}
                            className="rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-600 disabled:opacity-40"
                        >
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default CategoryPage;