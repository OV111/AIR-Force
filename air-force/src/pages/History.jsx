import { Title } from "../components/Title"
import { Footer } from "../components/Footer"

const TIMELINE = [
    { year: "1947",      title: "Air Force Established",         desc: "The United States Air Force becomes an independent military branch on September 18, 1947." },
    { year: "1950–1953", title: "Korean War",                    desc: "USAF pilots flew F-86 Sabres against MiG-15s in history's first large-scale jet-vs-jet aerial combat over MiG Alley." },
    { year: "1964",      title: "SR-71 Blackbird First Flight",  desc: "The fastest air-breathing manned aircraft ever built takes flight — capable of outrunning every missile fired at it." },
    { year: "1969",      title: "Moon Landing Support",          desc: "USAF astronauts and technology played a critical role in the Apollo 11 mission, landing humans on the Moon." },
    { year: "1991",      title: "Operation Desert Storm",        desc: "Air power dominance in the Gulf War demonstrated precision warfare, with stealth aircraft striking Baghdad undetected." },
    { year: "2005",      title: "F-22 Raptor Enters Service",    desc: "The world's first operational 5th-generation stealth fighter becomes the undisputed king of the skies." },
    { year: "2015",      title: "F-35 Declared Combat-Ready",    desc: "The most advanced multirole stealth fighter reaches initial operational capability across multiple branches." },
    { year: "2024",      title: "NGAD Program Advances",         desc: "The Next Generation Air Dominance program moves toward a 6th-generation fighter to replace the F-22 by the 2030s." },
]

export default function History() {
    return (
        <div className="inner-page">
            <Title />

            <section className="page-hero">
                <h1>History</h1>
                <p>Decades of air dominance, sacrifice, and innovation</p>
            </section>

            <section className="py-5">
                <div className="container" style={{ maxWidth: 760 }}>
                    <h2 className="h3 fw-bold text-white mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: 3 }}>
                        TIMELINE
                    </h2>
                    <p className="mb-5" style={{ color: 'var(--text-muted)' }}>
                        From the first jet combats of Korea to the stealth revolution of Desert Storm,
                        the Air Force has continuously redefined what it means to own the skies.
                    </p>

                    <div className="timeline">
                        {TIMELINE.map(item => (
                            <div className="timeline-item" key={item.year}>
                                <div className="timeline-year">{item.year}</div>
                                <h3 className="h6 fw-bold text-white mb-1">{item.title}</h3>
                                <p className="small mb-0" style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
