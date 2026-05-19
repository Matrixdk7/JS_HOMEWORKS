import FilterSection from './FilterSection'
import OptionPills from '../ui/OptionPills'
import {useState} from "react";

const sizes = [
    'XX-Small',
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    'XX-Large',
    '3X-Large',
    '4X-Large',
]

function SizeFilter() {
    const [selectedSize, setSelectedSize] = useState('')

    return (
        <FilterSection
            title="Size"
            value="size"
        >
            <OptionPills options={sizes}
                         selected={selectedSize}
                         onChange={setSelectedSize} />
        </FilterSection>
    )
}

export default SizeFilter