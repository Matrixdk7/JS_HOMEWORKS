import versace from '@/assets/brands/versace.svg'
import kelvin from '@/assets/brands/kelvin.svg'
import gucci from '@/assets/brands/gucci.svg'
import prada from '@/assets/brands/prada.svg'
import zara from '@/assets/brands/zara.svg'

const brands = [
    { name: 'Versace', logo: versace },
    { name: 'Zara', logo: zara },
    { name: 'Gucci', logo: gucci },
    { name: 'Prada', logo: prada },
    { name: 'Kelvin Klein', logo: kelvin },
]

const BrandsSection = () => {
    return (
        <section className="w-full bg-black">
            <div className="mx-auto flex h-[122px] max-w-[1240px] items-center justify-between px-4">
                {brands.map((brand) => (
                    <img
                        key={brand.name}
                        src={brand.logo}
                        alt={brand.name}
                        className="h-8 w-auto object-contain"
                    />
                ))}
            </div>
        </section>
    )
}

export default BrandsSection