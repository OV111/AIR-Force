import { Link } from 'react-router-dom'
import { Title } from '../components/Title'

const Login = () => {
    return (
        <>
            <Title />
            <div className="auth-page">
                <div className="auth-card">

                    <Link to="/" className="d-flex align-items-center justify-content-center gap-2 text-decoration-none mb-4">
                        <img src="/icons8-us-air-force.svg" alt="Air Force" width={36} height={36} />
                        <span className="auth-logo-text">AIR FORCE</span>
                    </Link>

                    <h1 className="h4 fw-bold text-white text-center mb-1">Sign In</h1>
                    <p className="text-center mb-4 small" style={{ color: 'var(--text-muted)' }}>
                        Access your Air Force account
                    </p>

                    <form onSubmit={e => e.preventDefault()}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="your@email.mil"
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="••••••••"
                                autoComplete="current-password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mt-2">
                            Sign In
                        </button>
                    </form>

                    <p className="text-center mt-4 small" style={{ color: 'var(--text-muted)' }}>
                        Don't have an account?{' '}
                        <Link to="/register" className="text-decoration-none fw-semibold" style={{ color: 'var(--primary-light)' }}>
                            Get Started
                        </Link>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Login
