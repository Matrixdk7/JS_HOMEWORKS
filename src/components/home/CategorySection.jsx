import { Link } from 'react-router-dom'

const CategorySection = ({ categories = [] }) => {
    const visible = categories.slice(0, 4)

    return (
        <section className="py-10">
            <div className="rounded-[40px] bg-[#F0F0F0] px-8 py-10">
                <h2 className="mb-8 text-center text-[34px] font-bold uppercase">
                    Browse by Dress Style
                </h2>

                <div className="grid grid-cols-3 gap-5">
                    {visible.map((category, index) => {
                        const large = index === 1 || index === 2

                        return (
                            <Link
                                key={category.slug || category.name || category}
                                to={`/category?category=${category.slug || category.name || category}`}
                                className={`relative overflow-hidden rounded-[20px] bg-white p-6 ${large ? 'col-span-2' : 'col-span-1'} h-[220px]`}
                            >
                <span className="relative z-10 text-[24px] font-bold capitalize">
                  {category.name || category}
                </span>

                                <div className="absolute bottom-0 right-0 h-[85%] w-[55%] bg-gray-100" />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CategorySection