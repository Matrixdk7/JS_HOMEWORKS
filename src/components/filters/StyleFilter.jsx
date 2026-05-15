import FilterSection from './FilterSection'
import { ChevronRight } from 'lucide-react'

const styles = [
    'Casual',
    'Formal',
    'Party',
    'Gym',
]

function StyleFilter() {
    return (
        <FilterSection
            title="Dress Style"
            value="style"
        >
            <div className="space-y-3">
                {styles.map((style) => (
                    <button
                        key={style}
                        className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-black"
                    >
                        <span>{style}</span>

                        <ChevronRight
                            size={14}
                            className="text-gray-400"
                        />
                    </button>
                ))}
            </div>
        </FilterSection>
    )
}

export default StyleFilter