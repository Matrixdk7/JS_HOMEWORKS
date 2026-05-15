import { Star } from 'lucide-react'

function Rating({ value = 0, max = 5, size = 14, showValue = true }) {
    const stars = []

    for (let i = 1; i <= max; i++) {
        const fill =
            value >= i ? 100 : value >= i - 0.5 ? 50 : 0

        stars.push(
            <div
                key={i}
                className="relative"
                style={{ width: size, height: size }}
            >
                <Star
                    size={size}
                    className="absolute text-gray-300"
                />

                {fill > 0 && (
                    <div
                        className="absolute overflow-hidden"
                        style={{ width: `${fill}%` }}
                    >
                        <Star
                            size={size}
                            className="fill-yellow-400 text-yellow-400"
                        />
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
                {stars}
            </div>

            {showValue && (
                <span className="ml-1 text-xs text-gray-500">
          {value.toFixed(1)}/5
        </span>
            )}
        </div>
    )
}

export default Rating