import styles from "./header.module.css"
import { Link } from "react-router-dom"

export default function TopBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerInner}>
                <p>
                    Sign up and get 20% off to your first order.{" "}
                    <Link to="/signup" className={styles.bannerLink}>
                        Sign Up Now
                    </Link>
                </p>
            </div>
        </div>
    )
}