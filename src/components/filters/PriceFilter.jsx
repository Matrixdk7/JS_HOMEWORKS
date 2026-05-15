import { Slider } from '../ui/slider'
import FilterSection from './FilterSection'

const PriceFilter = ({ priceRange, onChange, }) => {
    return (
        <FilterSection
            title="Price"
            value="price"
        >
            <div className="space-y-4">
                <Slider
                    value={priceRange}
                    min={0}
                    max={500}
                    step={1}
                    onValueChange={onChange}
                />

                <div className="flex items-center justify-between text-sm text-black">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </FilterSection>
    )
};

export default PriceFilter;