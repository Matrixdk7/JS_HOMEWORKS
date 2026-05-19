import heroImage from '@/assets/home/hero.png'

const HeroSection = () => {
    return (
        <section className="w-full bg-[#F2F0F1]">
            <div
                className="mx-auto flex min-h-[660px] max-w-[1240px] items-center bg-right bg-no-repeat px-4"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center',
                }}
            >
                <div className="w-full max-w-[600px] py-16">
                    <h1 className="max-w-[580px] text-[64px] font-bold uppercase leading-none">
                        Find clothes that matches your style
                    </h1>

                    <p className="mt-8 max-w-[540px] text-base leading-7 text-gray-600">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <button
                        type="button"
                        className="mt-8 rounded-full bg-black px-14 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
                    >
                        Shop Now
                    </button>

                    <div className="mt-14 flex flex-wrap gap-8">
                        <div>
                            <p className="text-[40px] font-bold leading-none">200+</p>

                            <p className="mt-2 text-sm text-gray-600">
                                International Brands
                            </p>
                        </div>

                        <div className="border-l border-gray-300 pl-8">
                            <p className="text-[40px] font-bold leading-none">2,000+</p>

                            <p className="mt-2 text-sm text-gray-600">
                                High-Quality Products
                            </p>
                        </div>

                        <div className="border-l border-gray-300 pl-8">
                            <p className="text-[40px] font-bold leading-none">30,000+</p>

                            <p className="mt-2 text-sm text-gray-600">
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection