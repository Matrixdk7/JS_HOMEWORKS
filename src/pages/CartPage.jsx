import { useSelector } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import CartItem from '../components/cart/CartItem'
import OrderSummary from '../components/cart/OrderSummary'

const CartPage = () => {
    const items = useSelector(state => state.cart.items)

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <Breadcrumbs />
            <h1 className="text-4xl font-black uppercase mt-6 mb-8">
                Your Cart
            </h1>
            {
                items.length === 0 ? (
                    <div className="border rounded-3xl p-20 text-center">

                        <h2 className="text-3xl font-bold mb-4">
                            Your cart is empty
                        </h2>

                        <p className="text-muted-foreground">
                            Add some products to continue shopping
                        </p>

                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 border rounded-3xl p-6">
                            <div className="flex flex-col gap-6">
                                {items.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-[420px]">
                            <OrderSummary />
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default CartPage