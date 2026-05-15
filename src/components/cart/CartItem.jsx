import { Minus, Plus, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'

import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from '../../features/cart/cartSlice'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <div className="flex gap-4 border-b pb-6 last:border-none">

            <div className="w-[124px] h-[124px] bg-muted rounded-2xl overflow-hidden shrink-0">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">

                <div className="flex items-start justify-between gap-4">

                    <div>
                        <h3 className="font-bold text-xl line-clamp-1">
                            {item.title}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            ${item.price}
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            dispatch(removeFromCart({ id: item.id }))
                        }
                    >
                        <Trash2 className="text-red-500 w-5 h-5" />
                    </button>

                </div>

                <div className="flex items-center justify-end">

                    <div className="flex items-center gap-5 bg-muted px-5 py-3 rounded-full">

                        <button
                            onClick={() =>
                                dispatch(decreaseQuantity({ id: item.id }))
                            }
                        >
                            <Minus className="w-4 h-4" />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                            onClick={() =>
                                dispatch(increaseQuantity({ id: item.id }))
                            }
                        >
                            <Plus className="w-4 h-4" />
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CartItem