import { Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import HomePage from "../pages/HomePage"
import CategoryPage from "../pages/CategoryPage"
import ProductDetailsPage from "../pages/ProductDetailsPage"
import CartPage from "../pages/CartPage"
import LoginPage from "../pages/LoginPage"
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import ProfilePage from "@/pages/ProfilePage.jsx";
import CheckoutPage from "@/pages/CheckoutPage.jsx";
import OrderSuccessPage from "@/pages/OrderSuccessPage.jsx";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="category" element={<CategoryPage />} />
                <Route path="product/:id" element={<ProductDetailsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Route>
                <Route path="/order-success" element={<OrderSuccessPage />}/>
            </Route>
        </Routes>
    )
}