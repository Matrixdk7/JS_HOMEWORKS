import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const OrderSuccessPage = () => {
    return (
        <section className="max-w-3xl mx-auto px-4 py-20 text-center">

            <div className="border rounded-3xl p-10">

                <h1 className="text-5xl font-black mb-6">
                    Order Successful
                </h1>

                <p className="text-muted-foreground text-lg mb-8">
                    Thank you for your purchase.
                    Your order has been placed successfully.
                </p>

                <Link to="/shop">
                    <Button className="rounded-full px-8 h-12">
                        Continue Shopping
                    </Button>
                </Link>

            </div>

        </section>
    )
}

export default OrderSuccessPage