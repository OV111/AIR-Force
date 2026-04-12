import LogoLoop from './LogoLoop/LogoLoop'
import partners from '../data/partners.json'

const logos = partners.map(p => ({ src: p.src, alt: p.alt, width: p.width }))

export const PartnerMarquee = () => {
    return (
        <div className="partner-section text-center">
            <p className="section-label mb-4">Powered by Industry Leaders</p>
            <div className="marquee-container">
                <LogoLoop
                    logos={logos}
                    speed={80}
                    direction="left"
                    logoHeight={44}
                    gap={80}
                    hoverSpeed={0}
                    scaleOnHover
                    ariaLabel="Industry partners"
                />
            </div>
        </div>
    )
}
