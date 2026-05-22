import { Link } from 'react-router-dom'
import BlurText from "../components/BlurText"

export const Header = () => {
    return (
        <header className="header-section">
            {/* Background video */}
            <video className="background-video" autoPlay muted loop playsInline preload="auto">
                <source src="/videos/Header-2-fight-jets.mp4" type="video/mp4" />
            </video>

            {/* Overlays */}
            <div className="header-overlay" />
            <div className="header-overlay-bottom" />

            {/* Main content */}
            <div className="header-content container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-10">

                        <div className="header-badge mb-3">
                            <span className="header-badge-dot" />
                            CLASSIFIED &nbsp;·&nbsp; AIR SUPERIORITY
                        </div>

                        <BlurText
                            text="WELCOME TO AIR FORCE"
                            as="h1"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="header-title mb-3"
                        />

                        <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto' }}>
                            Commanding the skies with next-generation aircraft, cutting-edge systems,
                            and elite pilots. Unmatched precision. Relentless innovation.
                            Air superiority is not a strategy — it is a reality.
                        </p>

                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Link to="/aircraft" className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2">
                                <span>Explore Aircraft</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/tech" className="btn btn-outline-light btn-lg">
                                About Tech
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div className="header-stats w-100">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-0">
                        <div className="text-center px-4 py-2">
                            <div className="stat-number">5,000+</div>
                            <div className="stat-label">Aircraft</div>
                        </div>
                        <div className="stat-divider d-none d-sm-block" />
                        <div className="text-center px-4 py-2">
                            <div className="stat-number">2M+</div>
                            <div className="stat-label">Flight Hours</div>
                        </div>
                        <div className="stat-divider d-none d-sm-block" />
                        <div className="text-center px-4 py-2">
                            <div className="stat-number">500K+</div>
                            <div className="stat-label">Missions</div>
                        </div>
                        <div className="stat-divider d-none d-sm-block" />
                        <div className="text-center px-4 py-2">
                            <div className="stat-number">60+</div>
                            <div className="stat-label">Nations</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </div>
        </header>
    )
}
