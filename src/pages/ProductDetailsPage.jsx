import './ProductDetailsPage.css'

import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery, useGetProductsQuery,} from '../features/api/apiSlice'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductGallery from '../components/product/ProductGallery'
import ProductInfo from '../components/product/ProductInfo'
import ProductTabs from '../components/product/ProductTabs'
import RelatedProducts from '../components/product/RelatedProducts'

function ProductDetailsPage() {
    const { id } = useParams()

    const {
        data: product,
        isLoading,
        isError,
    } = useGetProductByIdQuery(id)

    const { data: productsData } = useGetProductsQuery({
        limit: 20,
        skip: 0,
    })

    const [activeImage, setActiveImage] = useState(0)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        setActiveImage(0)
        setQuantity(1)
    }, [id])

    const relatedProducts = useMemo(() => {
        if (!productsData?.products || !product) return []

        return productsData.products
            .filter((item) => item.id !== product.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
    }, [productsData, product])

    if (isLoading) {
        return <p className="py-10">Loading...</p>
    }

    if (isError || !product) {
        return <p className="py-10">Failed to load product</p>
    }

    const images =
        product.images?.length > 0
            ? product.images
            : [product.thumbnail]

    return (
        <section className="py-8 product-container">
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Shop', href: '/' },
                    {
                        label: product.category,
                    },
                ]}
            />

            <div className="grid gap-10 lg:grid-cols-2">
                <ProductGallery
                    images={images}
                    activeImage={activeImage}
                    setActiveImage={setActiveImage}
                    title={product.title}
                />

                <ProductInfo
                    product={product}
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            </div>

            <ProductTabs reviews={product.reviews || []} />

            <RelatedProducts products={relatedProducts} />
        </section>
    )
}

export default ProductDetailsPage