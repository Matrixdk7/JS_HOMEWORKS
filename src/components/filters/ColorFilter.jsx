import FilterSection from './FilterSection'
import ColorSwatches from '../ui/ColorSwatches'

const colors = [
    '#000000',
    '#1f2937',
    '#ef4444',
    '#f59e0b',
    '#22c55e',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#d1d5db',
    '#ffffff',
]

function ColorFilter() {
    return (
        <FilterSection
            title="Colors"
            value="colors"
        >
            <ColorSwatches options={colors} />
        </FilterSection>
    )
}

export default ColorFilter