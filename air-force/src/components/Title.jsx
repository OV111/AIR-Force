import { Link } from 'react-router-dom'

export const Title = () => {
    return (
        <header className="site-header">
            <Link to="/" className="header-left">
                <img src="icons8-us-air-force.svg" alt="logo-air-force" width={54} height={54}/>
                <h1>AIR FORCE</h1>
            </Link>
            
            <nav className="header-right">
                <Link to="/aircraft">Aircraft</Link>
                <Link to="/tech">Tech</Link>
                <Link to="/history">History</Link>
                <Link to="/about">About</Link>
                 <Link to="/register">Get Started</Link>
            </nav>
        </header>
    )
}
