import LogoLoop from './LogoLoop/LogoLoop';
import partners from '../data/partners.json';

const logos = partners.map(p => ({
    src: p.src,
    alt: p.alt,
    width: p.width,
}));

export const PartnerMarquee = () => {
    return (
        <div className="partner-section">
            <h2>Powered by Industry Leaders</h2>
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
    );
};
