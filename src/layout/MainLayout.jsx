import { Outlet } from "react-router-dom"
import Header from "../components/layout/header/Header"
import TopBanner from "../components/layout/header/TopBanner"
import Footer from "../components/layout/footer/Footer.jsx";
import Newsletter from "../components/layout/newslatter/Newsletter.jsx";

export default function MainLayout() {
    return (
        <div className="layout">
            <TopBanner />
            <Header />
            <main className="content container">
                <Outlet />
            </main>

            <Newsletter />

            <footer>
                <Footer />
            </footer>
        </div>
    )
}