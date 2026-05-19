import { useRef } from 'react'

const HomeReviews = ({ reviews }) => {
    const trackRef = useRef(null)

    const scroll = (direction) => {
        if (!trackRef.current) return

        trackRef.current.scrollBy({
            left: direction === 'next' ? 420 : -420,
            behavior: 'smooth',
        })
    }

    return (
        <section className="w-full overflow-hidden py-12">
            <div className="mx-auto mb-8 flex max-w-[1240px] items-center justify-between px-4">
                <h2 className="text-[34px] font-bold uppercase">
                    Our Happy Customers
                </h2>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => scroll('prev')}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-xl transition hover:bg-black hover:text-white"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        onClick={() => scroll('next')}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-xl transition hover:bg-black hover:text-white"
                    >
                        →
                    </button>
                </div>
            </div>

            <div
                ref={trackRef}
                className="flex gap-5 overflow-x-auto scroll-smooth px-4 scrollbar-hide"
            >
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="min-w-[340px] max-w-[340px] rounded-[20px] border border-gray-200 bg-white p-6 md:min-w-[400px] md:max-w-[400px]"
                    >
                        <p className="mb-4 text-sm text-yellow-500">
                            {'★'.repeat(review.rating)}
                        </p>

                        <p className="mb-3 text-lg font-semibold">
                            {review.reviewerName}
                        </p>

                        <p className="text-sm leading-7 text-gray-600">
                            {review.comment}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeReviews