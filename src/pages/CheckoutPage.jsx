import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { useState } from 'react'
import {Button} from "@/components/ui/button.tsx";
import { useCreateOrderMutation } from '../features/order/orderApi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

const CheckoutPage = () => {
    const items = useSelector(state => state.cart.items)
    const user = useSelector(state => state.auth.user)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
    })
    const [createOrder, { isLoading }] = useCreateOrderMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = e => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const orderData = {
                userId: user.id,
                products: items.map(item => ({
                    id: item.id,
                    quantity: item.quantity,
                })),
            }

            const response = await createOrder(orderData).unwrap()
            dispatch(clearCart())
            navigate('/order-success')
            console.log(response)

        } catch (error) {
            console.error(error)
        }
    }



    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    if (!user) {
        return <Navigate to="/login" replace />
    }

    if (items.length === 0) {
        return <Navigate to="/cart" replace />
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <Breadcrumbs />

            <h1 className="text-4xl font-black uppercase mt-6 mb-8">
                Checkout
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6">

                <div className="border rounded-3xl p-6">

                    <h2 className="text-2xl font-bold mb-6">
                        Billing Details
                    </h2>

                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="border rounded-xl px-4 h-12"
                            />

                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border rounded-xl px-4 h-12"
                            />

                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-xl px-4 h-12 w-full"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border rounded-xl px-4 h-12 w-full"
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border rounded-xl px-4 h-12 w-full"
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="border rounded-xl px-4 h-12 w-full"
                        />

                        <Button
                            type="submit"
                            onSubmit={handleSubmit}
                            disabled={isLoading}
                            className="w-full rounded-full h-14 text-lg mt-6"
                        >
                            {isLoading ? 'Processing...' : 'Place Order'}
                        </Button>

                    </form>

                </div>

                <div className="border rounded-3xl p-6 h-fit">

                    <h2 className="text-2xl font-bold mb-6">
                        Your Order
                    </h2>

                    <div className="space-y-4 mb-6">
                        {items.map(item => (
                            <div
                                key={item.id}
                                className="flex justify-between gap-4"
                            >
                                <span>
                                    {item.title} x{item.quantity}
                                </span>

                                <span>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t pt-4 flex justify-between text-xl font-bold">
                        <span>Total</span>

                        <span>
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default CheckoutPage