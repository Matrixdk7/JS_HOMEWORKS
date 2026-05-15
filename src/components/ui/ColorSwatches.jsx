function ColorSwatches({ options = [], selected, onChange, }) {
    return (
        <div className="flex flex-wrap gap-3">
            {options.map((color) => (
                <button
                    key={color}
                    type="button"
                    onClick={() => onChange?.(color)}
                    className={`product-color-swatch ${
                        selected === color ? 'product-color-swatch--active' : ''
                    }`}
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    )
}

export default ColorSwatches