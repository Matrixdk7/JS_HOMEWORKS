import { Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import HomePage from "../pages/HomePage"
import CategoryPage from "../pages/CategoryPage"
import ProductDetailsPage from "../pages/ProductDetailsPage"
import CartPage from "../pages/CartPage"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Route>
        </Routes>
    )
}