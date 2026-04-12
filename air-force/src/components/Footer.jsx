import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="border-top py-5" style={{ borderColor: 'var(--border) !important' }}>
            <div className="container">

                {/* Top row: logo + contact */}
                <div className="row justify-content-between align-items-start pb-4 mb-4 border-bottom"
                     style={{ borderColor: 'var(--border)' }}>
                    <div className="col-auto">
                        <Link to="/" className="d-flex align-items-center gap-3 text-decoration-none">
                            <img src="/icons8-us-air-force.svg" alt="Air Force logo" width={52} height={52} />
                            <span className="footer-brand-text">AIR FORCE</span>
                        </Link>
                    </div>
                    <div className="col-auto text-end">
                        <address style={{ fontStyle: 'normal' }}>
                            <p className="mb-1 small" style={{ color: 'var(--text-muted)' }}>info@airforce.mil</p>
                            <p className="mb-1 small" style={{ color: 'var(--text-muted)' }}>+1 (703) 697-5737</p>
                            <p className="mb-0 small" style={{ color: 'var(--text-muted)' }}>Pentagon, Arlington, VA 22201</p>
                        </address>
                    </div>
                </div>

                {/* Nav columns */}
                <div className="row row-cols-2 row-cols-md-4 g-4 mb-4">
                    <div className="col">
                        <p className="footer-nav-heading">Aircraft</p>
                        <Link to="/aircraft" className="footer-link">Fighter Aircraft</Link>
                        <Link to="/aircraft" className="footer-link">Bombers</Link>
                        <Link to="/aircraft" className="footer-link">Transport</Link>
                        <Link to="/aircraft" className="footer-link">Helicopters</Link>
                    </div>
                    <div className="col">
                        <p className="footer-nav-heading">Technology</p>
                        <Link to="/tech" className="footer-link">Weapons Systems</Link>
                        <Link to="/tech" className="footer-link">Radar &amp; Sensors</Link>
                        <Link to="/tech" className="footer-link">Communications</Link>
                        <Link to="/tech" className="footer-link">Research &amp; Dev</Link>
                    </div>
                    <div className="col">
                        <p className="footer-nav-heading">History</p>
                        <Link to="/history" className="footer-link">Timeline</Link>
                        <Link to="/history" className="footer-link">Major Conflicts</Link>
                        <Link to="/history" className="footer-link">Heroes &amp; Legends</Link>
                        <Link to="/history" className="footer-link">Museums</Link>
                    </div>
                    <div className="col">
                        <p className="footer-nav-heading">About</p>
                        <Link to="/about" className="footer-link">Our Mission</Link>
                        <Link to="/about" className="footer-link">Leadership</Link>
                        <Link to="/about" className="footer-link">Careers</Link>
                        <Link to="/about" className="footer-link">Contact Us</Link>
                    </div>
                </div>

                {/* Bottom row: copyright + legal */}
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 pt-3 border-top"
                     style={{ borderColor: 'var(--border)' }}>
                    <p className="mb-0 small" style={{ color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} Air Force. Official A.F. International Website.
                    </p>
                    <div className="d-flex gap-4 flex-wrap">
                        {['Privacy Policy', 'Accessibility', 'FOIA', 'No FEAR Act'].map(label => (
                            <a key={label} href={`/${label.toLowerCase().replace(/\s+/g, '-')}`}
                               className="small text-decoration-none footer-link" style={{ marginBottom: 0 }}>
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}
