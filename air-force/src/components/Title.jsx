import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
    { to: '/aircraft', label: 'Aircraft' },
    { to: '/tech',     label: 'Tech' },
    { to: '/history',  label: 'History' },
    { to: '/about',    label: 'About' },
]

export const Title = () => {
    const [scrolled,  setScrolled]  = useState(false)
    const [menuOpen,  setMenuOpen]  = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => { setMenuOpen(false) }, [pathname])

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top site-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid">

                {/* Brand */}
                <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                    <img src="/icons8-us-air-force.svg" alt="Air Force logo" width={42} height={42} />
                    <span className="brand-text">AIR FORCE</span>
                </Link>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={menuOpen}
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Nav links */}
                <div className={`navbar-collapse ${menuOpen ? 'show' : 'collapse'}`}>
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                        {NAV_LINKS.map(({ to, label }) => (
                            <li className="nav-item" key={to}>
                                <Link
                                    to={to}
                                    className={`nav-link ${pathname.startsWith(to) ? 'active' : ''}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                            <Link to="/register" className="btn btn-primary btn-sm px-3 fw-bold">
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}
