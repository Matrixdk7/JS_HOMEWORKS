import { Link } from 'react-router-dom'

const CategorySection = ({ categories = [] }) => {
    const visible = categories.slice(0, 4)

    const layouts = [
        'md:col-span-1',
        'md:col-span-2',
        'md:col-span-2',
        'md:col-span-1',
    ]

    return (
        <section className="py-14">
            <div className="rounded-[40px] bg-[#F0F0F0] px-6 py-10 md:px-16">
                <h2 className="mb-10 text-center text-[34px] font-bold uppercase">
                    Browse by Dress Style
                </h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {visible.map((category, index) => (
                        <Link
                            key={category.slug || category.name || category}
                            to={`/category?category=${category.slug || category.name || category}`}
                            className={`relative h-[220px] overflow-hidden rounded-[20px] bg-white p-6 ${layouts[index]}`}
                        >
                            <img
                                src={`https://picsum.photos/600/400?random=${index + 1}`}
                                alt={category.name || category}
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/10" />

                            <span className="relative z-10 text-[28px] font-bold capitalize text-black">
                                {category.name || category}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategorySection