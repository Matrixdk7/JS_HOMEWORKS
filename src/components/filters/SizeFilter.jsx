import FilterSection from './FilterSection'
import OptionPills from '../ui/OptionPills'

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
    return (
        <FilterSection
            title="Size"
            value="size"
        >
            <OptionPills options={sizes} />
        </FilterSection>
    )
}

export default SizeFilter