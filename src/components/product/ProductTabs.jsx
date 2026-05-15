import { useState } from 'react'
import Rating from '../Rating'

function ProductTabs({ reviews = [] }) {
    const [activeTab, setActiveTab] = useState('reviews')
    const [visibleReviews, setVisibleReviews] = useState(6)

    return (
        <section className="mt-16">
            <div className="border-b">
                <div className="flex justify-center gap-12">
                    {[
                        ['details', 'Product Details'],
                        ['reviews', 'Rating & Reviews'],
                        ['faq', 'FAQs'],
                    ].map(([value, label]) => (
                        <button
                            key={value}
                            type="button"
                            onClick={() => setActiveTab(value)}
                            className={`pb-4 text-sm ${
                                activeTab === value ? 'border-b-2 border-black font-medium text-black' : 'text-gray-400'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {activeTab === 'reviews' && (
                <>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                        <h3 className="text-2xl font-bold">
                            All Reviews ({reviews.length})
                        </h3>

                        <div className="flex items-center gap-3">
                            <button className="rounded-full bg-[#F0F0F0] px-4 py-2 text-sm">
                                Latest
                            </button>

                            <button className="rounded-full bg-black px-5 py-2 text-sm text-white">
                                Write a Review
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {reviews
                            .slice(0, visibleReviews)
                            .map((review, index) => (
                                <div
                                    key={index}
                                    className="product-review-card"
                                >
                                    <Rating value={review.rating} />

                                    <p className="mt-3 font-semibold">
                                        {review.reviewerName}
                                    </p>

                                    <p className="mt-3 text-gray-600">
                                        {review.comment}
                                    </p>

                                    <p className="product-review-date mt-4">
                                        Posted on{' '}
                                        {new Date(
                                            review.date
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            ))}
                    </div>

                    {visibleReviews < reviews.length && (
                        <div className="mt-8 text-center">
                            <button
                                type="button"
                                className="rounded-full border px-6 py-3"
                                onClick={() =>
                                    setVisibleReviews(
                                        (prev) => prev + 4
                                    )
                                }
                            >
                                Load More Reviews
                            </button>
                        </div>
                    )}
                </>
            )}

            {activeTab === 'details' && (
                <div className="mt-8 text-gray-600">
                    Product details placeholder.
                </div>
            )}

            {activeTab === 'faq' && (
                <div className="mt-8 text-gray-600">
                    FAQ placeholder.
                </div>
            )}
        </section>
    )
}

export default ProductTabs