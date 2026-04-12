import { Link } from 'react-router-dom'
import { Title } from '../components/Title'

const Register = () => {
    return (
        <>
            <Title />
            <div className="auth-page">
                <div className="auth-card">

                    <Link to="/" className="d-flex align-items-center justify-content-center gap-2 text-decoration-none mb-4">
                        <img src="/icons8-us-air-force.svg" alt="Air Force" width={36} height={36} />
                        <span className="auth-logo-text">AIR FORCE</span>
                    </Link>

                    <h1 className="h4 fw-bold text-white text-center mb-1">Get Started</h1>
                    <p className="text-center mb-4 small" style={{ color: 'var(--text-muted)' }}>
                        Create your Air Force account
                    </p>

                    <form onSubmit={e => e.preventDefault()}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="John Doe"
                                autoComplete="name"
                                required
                            />
                        </div>
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
                                autoComplete="new-password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirm" className="form-label">Confirm Password</label>
                            <input
                                id="confirm"
                                type="password"
                                className="form-control"
                                placeholder="••••••••"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mt-2">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center mt-4 small" style={{ color: 'var(--text-muted)' }}>
                        Already have an account?{' '}
                        <Link to="/login" className="text-decoration-none fw-semibold" style={{ color: 'var(--primary-light)' }}>
                            Sign In
                        </Link>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Register
