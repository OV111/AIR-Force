// import
export const Header = () => {
    return (
        <header className="header-section">
            <video className="background-video"  autoPlay muted  playsInline> /**loop */
                {/* <source src="src\assets\Header-2-fighter-jets - Made with Clipchamp.mp4" type="video/mp4"/> */}
                <source src="src\assets\Header-2-fight-jets.mp4"/>
            </video>
            <div className="header-content">
                <h1>WELCOME TO AIR FORCE</h1>
                <p>Commanding the skies and beyond with next-generation aircraft cutting-edge
                   systems and Elite pilots.With unmatched precision and rolentless innovation,
                    the world's most advanced Air-Force turns air superiority into reality - not just strategy!</p>
            </div>

            <div className="header-stats">
                <div className="stats">
                    <div className="number">5000+</div>
                    <div className="label">Aircraft</div>
                </div>
                <div className="stats">
                    <div className="number">2M+</div>
                    <div className="label">Flight Hours</div>
                </div>
                <div className="stats">
                    <div className="number">500K+</div>
                    <div className="label">Missions</div>
                </div>
            </div>
                
            <div className="header-buttons">
                <button>Explore Aircraft</button>
                <button>About Tech</button>
            </div>
        </header>
    )
}