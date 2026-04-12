import { Title } from "../components/Title"
import { Footer } from "../components/Footer"

const VALUES = [
    { icon: "🦅", title: "Integrity First",    desc: "Upholding the highest standards of honesty and ethical conduct in every action." },
    { icon: "⚔️", title: "Service Before Self", desc: "Placing the needs of the nation and the mission above personal interest." },
    { icon: "🏆", title: "Excellence in All",  desc: "Striving for superiority in every task — on the ground, in the air, and beyond." },
]

export default function About() {
    return (
        <div className="inner-page">
            <Title />

            <section className="page-hero">
                <h1>About</h1>
                <p>Who we are, what we stand for, and why we fly</p>
            </section>

            <section className="py-5 border-bottom" style={{ borderColor: 'var(--border)' }}>
                <div className="container" style={{ maxWidth: 820 }}>
                    <h2 className="h3 fw-bold text-white mb-3" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: 3 }}>
                        OUR MISSION
                    </h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                        To fly, fight, and win — airpower anytime, anywhere. The Air Force defends
                        America and its allies through air, space, and cyberspace superiority.
                        We project power, deter aggression, and provide global reach to ensure
                        freedom of action across all domains.
                    </p>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                        With over 5,000 aircraft, 330,000 active-duty airmen, and cutting-edge
                        technology, the Air Force remains the most capable aerospace force in the world.
                    </p>
                </div>
            </section>

            <section className="py-5 border-bottom" style={{ borderColor: 'var(--border)' }}>
                <div className="container" style={{ maxWidth: 820 }}>
                    <h2 className="h3 fw-bold text-white mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: 3 }}>
                        CORE VALUES
                    </h2>
                    <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                        Three values form the bedrock of every airman's character.
                    </p>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {VALUES.map(v => (
                            <div className="col" key={v.title}>
                                <div className="card h-100 p-4">
                                    <span className="card-icon">{v.icon}</span>
                                    <h3 className="h6 fw-bold text-white mb-2">{v.title}</h3>
                                    <p className="small mb-0" style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>
                                        {v.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container" style={{ maxWidth: 820 }}>
                    <h2 className="h3 fw-bold text-white mb-3" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: 3 }}>
                        CAREERS
                    </h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                        Whether you dream of flying a fighter jet, developing next-generation
                        weapons systems, or supporting operations around the globe, the Air Force
                        offers over 200 career fields for enlisted members and officers alike.
                    </p>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                        We invest in our people — with world-class training, education programs,
                        and leadership development that shapes the leaders of tomorrow.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}
