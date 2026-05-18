import FilterSection from './FilterSection'
import ColorSwatches from '../ui/ColorSwatches'
import {useState} from "react";

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
    const [selectedColor, setSelectedColor] = useState('')

    return (
        <FilterSection
            title="Colors"
            value="colors"
        >
            <ColorSwatches options={colors}
                           selected={selectedColor}
                           onChange={setSelectedColor} />
        </FilterSection>
    )
}

export default ColorFilter