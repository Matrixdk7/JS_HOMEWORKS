import styles from "./footer.module.css"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay, FaApplePay } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                {/* LEFT */}
                <div className={styles.brand}>
                    <h2>SHOP.CO</h2>
                    <p>
                        We have clothes that suit your style and which you’re proud to wear.
                    </p>

                    <div className={styles.socials}>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram size={24} />
                        </a>

                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF size={24} />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter size={24} />
                        </a>

                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>

                {/* LINKS */}
                <div className={styles.column}>
                    <h4>Company</h4>
                    <Link to="#">About</Link>
                    <Link to="#">Features</Link>
                    <Link to="#">Works</Link>
                    <Link to="#">Career</Link>
                </div>

                <div className={styles.column}>
                    <h4>Help</h4>
                    <Link to="#">Customer Support</Link>
                    <Link to="#">Delivery Details</Link>
                    <Link to="#">Terms & Conditions</Link>
                    <Link to="#">Privacy Policy</Link>
                </div>

                <div className={styles.column}>
                    <h4>FAQ</h4>
                    <Link to="#">Account</Link>
                    <Link to="#">Manage Deliveries</Link>
                    <Link to="#">Orders</Link>
                    <Link to="#">Payments</Link>
                </div>

                <div className={styles.column}>
                    <h4>Resources</h4>
                    <Link to="#">Free eBooks</Link>
                    <Link to="#">Development Tutorial</Link>
                    <Link to="#">How to - Blog</Link>
                    <Link to="#">YouTube Playlist</Link>
                </div>

            </div>

            {/* BOTTOM */}
            <div className={styles.bottom}>

                <p className={styles.copy}>
                    Shop.co © 2026, All Rights Reserved
                </p>

                <div className={styles.payments}>
                    <div className={styles.iconBox}><FaCcVisa /></div>
                    <div className={styles.iconBox}><FaCcMastercard /></div>
                    <div className={styles.iconBox}><FaCcPaypal /></div>
                    <div className={styles.iconBox}><FaGooglePay /></div>
                    <div className={styles.iconBox}><FaApplePay /></div>
                </div>

            </div>

        </footer>
    )
}