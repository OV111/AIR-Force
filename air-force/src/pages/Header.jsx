import BlurText from "../components/BlurText"

export const Header = () => {
    return (
        <header className="header-section">
            {/* Background video */}
            <video className="background-video" autoPlay muted loop playsInline>
                <source src="/videos/Header-2-fight-jets.mp4" type="video/mp4"/>
            </video>

            {/* Overlays */}
            <div className="header-overlay" />
            <div className="header-overlay-bottom" />

            {/* Main content */}
            <div className="header-content">
                <div className="header-badge">
                    <span className="header-badge-dot" />
                    CLASSIFIED &nbsp;·&nbsp; AIR SUPERIORITY
                </div>

                <BlurText
                    text="WELCOME TO AIR FORCE"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="header-title"
                />

                <p className="header-subtitle">
                    Commanding the skies with next-generation aircraft, cutting-edge systems,
                    and elite pilots. Unmatched precision. Relentless innovation.
                    Air superiority is not a strategy — it is a reality.
                </p>

                <div className="header-buttons">
                    <button className="btn-primary" aria-label="Explore Aircraft">
                        <span>Explore Aircraft</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                    <button className="btn-ghost" aria-label="About Tech">
                        About Tech
                    </button>
                </div>
            </div>

            {/* Stats bar */}
            <div className="header-stats">
                <div className="stats">
                    <div className="number">5,000+</div>
                    <div className="label">Aircraft</div>
                </div>
                <div className="stats-divider" />
                <div className="stats">
                    <div className="number">2M+</div>
                    <div className="label">Flight Hours</div>
                </div>
                <div className="stats-divider" />
                <div className="stats">
                    <div className="number">500K+</div>
                    <div className="label">Missions</div>
                </div>
                <div className="stats-divider" />
                <div className="stats">
                    <div className="number">60+</div>
                    <div className="label">Nations</div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
            </div>
        </header>
    )
}
