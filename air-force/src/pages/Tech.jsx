import { Title } from "../components/Title"
import { Footer } from "../components/Footer"

const TECH_AREAS = [
    { icon: "🛡️", title: "Stealth Technology",    desc: "Radar-absorbing materials and low-observable airframe designs that make aircraft virtually invisible to enemy detection systems." },
    { icon: "🎯", title: "Precision Weapons",      desc: "GPS-guided munitions, air-to-air missiles, and hypersonic weapons capable of striking targets with meter-level accuracy." },
    { icon: "📡", title: "Radar & Sensors",        desc: "Active electronically scanned array (AESA) radars, infrared search & track systems, and electronic warfare suites." },
    { icon: "🔗", title: "Data Link Systems",      desc: "Real-time battlefield communication through Link 16, MADL, and advanced satellite uplinks for seamless multi-domain coordination." },
    { icon: "⚡", title: "Directed Energy",        desc: "High-energy laser and microwave weapon systems designed to disable enemy electronics and missiles at the speed of light." },
    { icon: "🤖", title: "AI & Autonomy",          desc: "Autonomous wingmen, AI-assisted targeting, and machine-learning systems that enhance pilot decision-making in combat." },
]

export default function Tech() {
    return (
        <div className="inner-page">
            <Title />

            <section className="page-hero">
                <h1>Technology</h1>
                <p>Cutting-edge systems that define air superiority</p>
            </section>

            <section className="py-5">
                <div className="container" style={{ maxWidth: 960 }}>
                    <h2 className="h3 fw-bold text-white mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: 3 }}>
                        CORE TECHNOLOGIES
                    </h2>
                    <p className="mb-5" style={{ color: 'var(--text-muted)' }}>
                        Air Force technology represents the leading edge of aerospace engineering,
                        electronic warfare, and autonomous systems. Every system is designed with
                        one goal: total dominance in any operational environment.
                    </p>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
                        {TECH_AREAS.map(item => (
                            <div className="col" key={item.title}>
                                <div className="card h-100 p-4">
                                    <span className="card-icon">{item.icon}</span>
                                    <h3 className="h6 fw-bold text-white mb-2">{item.title}</h3>
                                    <p className="small mb-0" style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-top pt-5" style={{ borderColor: 'var(--border)' }}>
                        <h2 className="h3 fw-bold text-white mb-3" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: 3 }}>
                            RESEARCH &amp; DEVELOPMENT
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                            Through partnerships with DARPA, NASA, and leading defense contractors,
                            Air Force R&amp;D continuously pushes the boundaries of what's possible —
                            from hypersonic propulsion to quantum-encrypted communications.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
