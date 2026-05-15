const HeroSection = () => {
    return (
        <section className="w-full bg-[#F2F0F1]">
            <div className="mx-auto flex h-[663px] max-w-[1240px] items-center px-4">
                <div className="w-1/2 pr-8">
                    <h1 className="max-w-[580px] text-[64px] font-bold uppercase leading-none">
                        Find clothes that matches your style
                    </h1>

                    <p className="mt-8 max-w-[540px] text-base text-gray-600">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <button
                        type="button"
                        className="mt-8 rounded-full bg-black px-14 py-4 text-sm font-medium text-white"
                    >
                        Shop Now
                    </button>

                    <div className="mt-12 flex gap-8">
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

                <div className="flex h-full w-1/2 items-end justify-center">
                    <div className="mb-10 h-[560px] w-[460px] rounded-[20px] border border-dashed border-gray-300 bg-white" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection