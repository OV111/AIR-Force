import { Link } from "react-router-dom"
import { Title } from "../components/Title"

export default function NotFound() {
    return (
        <>
            <Title />
            <main className="d-flex flex-column align-items-center justify-content-center text-center"
                  style={{ minHeight: '100vh', padding: '0 24px' }}>
                <h1 className="display-1 fw-bold mb-3" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: 4, color: 'var(--primary-light)' }}>
                    404
                </h1>
                <p className="fs-5 mb-4" style={{ color: 'var(--text-muted)' }}>Page not found.</p>
                <Link to="/" className="btn btn-primary px-4">← Back to Home</Link>
            </main>
        </>
    )
}
