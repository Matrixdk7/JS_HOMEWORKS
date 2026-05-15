import { useState } from 'react'
import Rating from '../Rating'
import OptionPills from '../ui/OptionPills'
import ColorSwatches from '../ui/ColorSwatches'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'

function ProductInfo({ product, quantity, setQuantity,}) {
    const sizes = ['Small', 'Medium', 'Large', 'X-Large']

    const colors = [
        '#4B5320',
        '#4B5563',
        '#373F69',
    ]

    const [selectedSize, setSelectedSize] = useState('Large')
    const [selectedColor, setSelectedColor] = useState(colors[0])

    const discountedPrice = (
        product.price *
        (1 - product.discountPercentage / 100)
    ).toFixed(0)

    const dispatch = useDispatch()

    return (
        <div>
            <h1 className="text-4xl font-black uppercase leading-tight">
                {product.title}
            </h1>

            <div className="mt-3">
                <Rating value={product.rating} />
            </div>

            <div className="mt-4 flex items-center gap-3">
                <span className="text-3xl font-bold">
                    ${discountedPrice}
                </span>

                <span className="text-3xl font-bold text-gray-400 line-through">
                    ${product.price}
                </span>

                <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-500">
                    -{Math.round(product.discountPercentage)}%
                </span>
            </div>

            <p className="mt-5 border-b pb-6 text-gray-600">
                {product.description}
            </p>

            <div className="mt-6 border-b pb-6">
                <p className="mb-3 text-sm text-gray-500">
                    Select Colors
                </p>

                <ColorSwatches
                    options={colors}
                    selected={selectedColor}
                    onChange={setSelectedColor}
                />
            </div>

            <div className="mt-6 border-b pb-6">
                <p className="mb-3 text-sm text-gray-500">
                    Choose Size
                </p>

                <OptionPills
                    options={sizes}
                    selected={selectedSize}
                    onChange={setSelectedSize}
                />
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex h-[56px] items-center rounded-full bg-[#F0F0F0] px-4">
                    <button
                        type="button"
                        className="px-4 text-xl"
                        onClick={() =>
                            setQuantity((prev) =>
                                Math.max(1, prev - 1)
                            )
                        }
                    >
                        −
                    </button>

                    <span className="min-w-[36px] text-center font-medium">
                        {quantity}
                    </span>

                    <button
                        type="button"
                        className="px-4 text-xl"
                        onClick={() =>
                            setQuantity((prev) => prev + 1)
                        }
                    >
                        +
                    </button>
                </div>

                <button
                    onClick={() => dispatch(addToCart({
                        product,
                        quantity
                    }))}
                    type="button"
                    className="min-h-[56px] min-w-[220px] rounded-full bg-black px-8 text-sm font-medium text-white"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductInfo