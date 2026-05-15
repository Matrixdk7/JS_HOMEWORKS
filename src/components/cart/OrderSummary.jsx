import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'

const OrderSummary = () => {

    const items = useSelector(state => state.cart.items)

    const subtotal = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    const discount = subtotal * 0.2

    const deliveryFee = 15

    const total = subtotal - discount + deliveryFee

    return (
        <div className="border rounded-3xl p-6 sticky top-24">

            <h2 className="text-3xl font-bold mb-6">
                Order Summary
            </h2>

            <div className="space-y-4">

                <div className="flex justify-between text-muted-foreground text-lg">
                    <span>Subtotal</span>
                    <span className="text-black font-semibold">
                        ${subtotal.toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">
                        Discount (-20%)
                    </span>

                    <span className="text-red-500 font-semibold">
                        -${discount.toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">
                        Delivery Fee
                    </span>

                    <span className="font-semibold">
                        ${deliveryFee}
                    </span>
                </div>

            </div>

            <div className="border-t my-6"></div>

            <div className="flex justify-between items-center mb-6">

                <span className="text-2xl">
                    Total
                </span>

                <span className="text-4xl font-bold">
                    ${total.toFixed(2)}
                </span>

            </div>

            <div className="flex gap-3 mb-6">

                <input
                    type="text"
                    placeholder="Add promo code"
                    className="flex-1 bg-muted rounded-full px-4"
                />

                <Button className="rounded-full px-8">
                    Apply
                </Button>

            </div>

            <Button className="w-full rounded-full h-14 text-lg">
                Go to Checkout
            </Button>

        </div>
    )
}

export default OrderSummary