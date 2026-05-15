const brands = [
    'VERSACE',
    'ZARA',
    'GUCCI',
    'PRADA',
    'Calvin Klein',
]

const BrandsSection = () => {
    return (
        <section className="w-full bg-black">
            <div className="mx-auto flex h-[122px] max-w-[1240px] items-center justify-between px-4">
                {brands.map((brand) => (
                    <span
                        key={brand}
                        className="text-2xl font-semibold tracking-wide text-white"
                    >
                        {brand}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default BrandsSection