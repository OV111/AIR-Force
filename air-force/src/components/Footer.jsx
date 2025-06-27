export const Footer  = () => {
    return (
        <footer className="footer">

            <div className="footer-header">
                <div className="footer-h1">
                    <a href="/"><img src="icons8-us-air-force.svg" alt="logo-air-force" width={70} height={70}/></a>
                    <h1>AIR FORCE</h1>
                </div>

                <address className="footer-contact">
                    <p>info@airforce.mail</p>
                    <p>+12125551212</p>
                    <p>Location, Location, LC</p>
                </address>
            </div>
            <div className="footer-main">
                {/* <nav className="footer-nav">
                    <h3>Company</h3>
                    <a href="/about">About</a>
                    <a href="/news">News & Press</a>
                    <a href="/products">Products</a>
                    <a href="/investors">Investors</a>
                </nav> */}

                <nav className="footer-nav">
                    <h3>AIRCRAFT</h3>
                    <a href="/aircraft/fighters">Fighter Aircraft</a>
                    <a href="/aircraft/bombers">Bombers</a>
                    <a href="/aircraft/transport">Transport</a>
                    <a href="/aircraft/helicopters">Helicopters</a>
                </nav>

                <nav className="footer-nav">
                    <h3>TECHNOLOGY</h3>
                    <a href="/tech/weapons">Weapons Systems</a>
                    <a href="/tech/radar">Radar & Sensors</a>
                    <a href="/tech/communications">Communications</a>
                    <a href="/tech/research">Research & Development</a>
                </nav>

                <nav className="footer-nav">
                    <h3>HISTORY</h3>
                    <a href="/history/timeline">Timeline</a>
                    <a href="/history/wars">Major Conflicts</a>
                    <a href="/history/heroes">Heroes & Legends</a>
                    <a href="/history/museums">Museums</a>
                </nav>

                <nav className="footer-nav">
                    <h3>ABOUT</h3>
                    <a href="/about/mission">Our Mission</a>
                    <a href="/about/leadership">Leadership</a>
                    <a href="/about/careers">Careers</a>
                    <a href="/about/contact">Contact Us</a>
                </nav>

            

            
            </div>

            <section className="footer-bottom">     
                <p>© {new Date().getFullYear()} Air Force. Official A.F. Interanational Website.</p>
                <nav className="legal-nav">
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/accessibility">Accessibility</a>
                    <a href="/foia">FOIA</a>
                    <a href="/no-fear">No FEAR Act</a>
                </nav>
            </section>
        </footer>
    )
}