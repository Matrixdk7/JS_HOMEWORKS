import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./header.module.css"
import { Menu, Search, ShoppingCart, User } from "lucide-react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>

                    {/* mobile burger */}
                    <button
                        className={styles.burger}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu size={24} />
                    </button>

                    <Link to="/" className={styles.logo}>
                        SHOP.CO
                    </Link>

                    <nav className={styles.nav}>
                        <Link to="/category">Shop</Link>
                        <Link to="/sale">On Sale</Link>
                        <Link to="/new">New Arrivals</Link>
                        <Link to="/brands">Brands</Link>
                    </nav>
                </div>

                {/* SEARCH */}
                <div className={styles.search}>
                    <Search size={20} />
                    <input placeholder="Search for products..." />
                </div>

                <div className={styles.right}>
                    <Link to="/search" className={styles.mobileSearchIcon}>
                        <Search size={24} />
                    </Link>

                    <Link to="/cart">
                        <ShoppingCart size={24} />
                    </Link>

                    <Link to="/account">
                        <User size={24} />
                    </Link>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <nav className={styles.mobileNav}>
                    <Link to="/category">Shop</Link>
                    <Link to="/sale">On Sale</Link>
                    <Link to="/new">New Arrivals</Link>
                    <Link to="/brands">Brands</Link>
                </nav>
            )}
        </header>
    )
}