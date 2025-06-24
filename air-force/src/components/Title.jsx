export const Title = () => {
    return (
        <header className="site-header">
            <div className="header-left">
                <a href="/"><img src="icons8-us-air-force.svg" alt="logo-air-force" width={70} height={70}/></a>
                <h1>AIR FORCE</h1>
            </div>
            
            <div className="header-right">
                <a href="/">Aircraft</a>
                <a href="/">Tech</a>
                <a href="/">History</a>
                <a href="/">About</a>
                <a href="/"><img src="src\assets\navigation-bar.png" alt="navigation toggle" width={35} height={35}/></a>
            </div>
        </header>
    )
}   