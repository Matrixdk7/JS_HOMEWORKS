function ColorSwatches({ options = [], selected, onChange }) {
    return (
        <div className="flex flex-wrap gap-3">
            {options.map((color) => {
                const isSelected = selected === color
                const isWhite =
                    color.toLowerCase() === 'white' ||
                    color.toLowerCase() === '#fff' ||
                    color.toLowerCase() === '#ffffff'

                return (
                    <button
                        key={color}
                        type="button"
                        onClick={() => onChange?.(color)}
                        className={`
                            product-color-swatch
                            ${isSelected ? 'product-color-swatch--active' : ''}
                        `}
                        style={{
                            backgroundColor: color,
                            border: isWhite
                                ? '1px solid #d1d5db'
                                : 'none',
                        }}
                    >
                        {isSelected && (
                            <span
                                className={`text-sm font-bold leading-none ${
                                    isWhite ? 'text-black' : 'text-white'
                                }`}
                            >
                                ✓
                            </span>
                        )}
                    </button>
                )
            })}
        </div>
    )
}

export default ColorSwatches