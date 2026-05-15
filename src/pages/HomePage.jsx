import { useGetProductsQuery } from '../features/api/apiSlice'
import ProductSection from '../components/home/ProductSection'
import HeroSection from '../components/home/HeroSection'
import BrandsSection from '../components/home/BrandsSection'
import HomeReviews from '../components/home/HomeReviews.jsx'
import CategorySection from "@/components/home/CategorySection.jsx";
import {useMemo} from "react";

const HomePage = () => {
    const { data, isLoading, error } = useGetProductsQuery({ limit: 30, skip: 0 })

    const rawProducts = data?.products || []
    const categories = data?.products
        ? [...new Map(rawProducts.map((p) => [p.category, { name: p.category, slug: p.category }])).values()]
        : []

    const newArrivals = useMemo(
        () =>
            [...rawProducts]
                .sort((a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt))
                .slice(0, 4),
        [rawProducts]
    )

    const topSelling = useMemo(
        () => [...rawProducts].sort((a, b) => b.rating - a.rating).slice(0, 4),
        [rawProducts]
    )

    const reviews = useMemo(
        () => rawProducts.flatMap((product) => product.reviews || []).slice(0, 8),
        [rawProducts]
    )

    if (isLoading) return <p className="p-8">Loading...</p>
    if (error) return <p className="p-8">Error loading products.</p>

    return (
        <>
            <HeroSection />
            <BrandsSection />

            <div className="mx-auto max-w-[1240px] px-4">
                <ProductSection title="New Arrivals" products={newArrivals} />
                <ProductSection title="Top Selling" products={topSelling} />
                <CategorySection categories={categories} />
                <HomeReviews reviews={reviews} />
            </div>
        </>
    )
}

export default HomePage