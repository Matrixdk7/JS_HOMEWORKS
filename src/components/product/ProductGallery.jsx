function ProductGallery({images, activeImage, setActiveImage, title,}) {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-4">
                {images.slice(0, 3).map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        className={`product-gallery-thumb h-[152px] w-[152px] overflow-hidden rounded-[20px] bg-[#F0EEED] ${
                            activeImage === index ? 'active' : ''
                        }`}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="h-full w-full object-contain"
                        />
                    </button>
                ))}
            </div>

            <div className="h-[530px] flex-1 overflow-hidden rounded-[20px] bg-[#F0EEED] p-8">
                <img
                    src={images[activeImage]}
                    alt={title}
                    className="h-full w-full object-contain"
                />
            </div>
        </div>
    )
}

export default ProductGallery