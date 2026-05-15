import FilterSection from './FilterSection'
import { ChevronRight } from 'lucide-react'

function CategoryFilter({ categories = [], selectedCategory, onChange, }) {
    return (
        <FilterSection
            title="Categories"
            value="categories"
        >
            <div className="space-y-3">
                {categories.slice(0, 5).map((category) => {
                    const name = category.name || category
                    const active = selectedCategory === name

                    return (
                        <button
                            key={category.slug || category}
                            onClick={() => onChange(name)}
                            className={`flex w-full items-center justify-between text-sm transition-colors ${
                                active
                                    ? 'font-medium text-black'
                                    : 'text-gray-500 hover:text-black'
                            }`}
                        >
                            <span>{name}</span>

                            <ChevronRight
                                size={14}
                                className="text-gray-400"
                            />
                        </button>
                    )
                })}
            </div>
        </FilterSection>
    )
}

export default CategoryFilter