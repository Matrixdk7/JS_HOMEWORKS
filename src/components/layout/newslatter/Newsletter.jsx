import "./newslatter.css"

export default function Newsletter() {
    return (
        <section className="newsletter container">
            <div className="newsletter-content">
                <h2 className="newsletter-text">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>

                <div className="form">
                    <input placeholder="Enter your email address" />
                    <button>Subscribe to Newsletter</button>
                </div>
            </div>
        </section>
    )
}