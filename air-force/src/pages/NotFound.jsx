import { Link } from "react-router-dom"
import { Title } from "../components/Title"

export default function NotFound() {
    return (
        <div>
            <Title />
            <main className="page-placeholder">
                <h1>404</h1>
                <p>Page not found.</p>
                <Link to="/">← Back to Home</Link>
            </main>
        </div>
    )
}
