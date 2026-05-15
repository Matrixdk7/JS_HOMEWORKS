import { Link } from 'react-router-dom'

function Breadcrumbs({ items = [] }) {
    return (
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            {items.map((item, index) => {
                const isLast = index === items.length - 1

                return (
                    <div
                        key={item.label}
                        className="flex items-center gap-2"
                    >
                        {isLast ? (
                            <span className="text-black">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                to={item.href}
                                className="transition-colors hover:text-black"
                            >
                                {item.label}
                            </Link>
                        )}

                        {!isLast && <span>›</span>}
                    </div>
                )
            })}
        </nav>
    )
}

export default Breadcrumbs