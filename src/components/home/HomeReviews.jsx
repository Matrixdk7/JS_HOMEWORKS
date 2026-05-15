import {useRef} from "react";

const HomeReviews = ({ reviews }) => {
    const trackRef = useRef(null)

    const scroll = (direction) => {
        if (!trackRef.current) return
        trackRef.current.scrollBy({
            left: direction === 'next' ? 360 : -360,
            behavior: 'smooth',
        })
    }

    return (
        <section className="py-12">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-[34px] font-bold uppercase">Our Happy Customers</h2>

                <div className="flex gap-2">
                    <button onClick={() => scroll('prev')} className="px-2 text-xl">←</button>
                    <button onClick={() => scroll('next')} className="px-2 text-xl">→</button>
                </div>
            </div>

            <div
                ref={trackRef}
                className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
            >
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="min-w-[360px] rounded-[20px] border border-gray-200 p-6"
                    >
                        <p className="mb-3 text-sm text-yellow-500">{'★'.repeat(review.rating)}</p>
                        <p className="mb-3 font-semibold">{review.reviewerName}</p>
                        <p className="text-sm leading-6 text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeReviews