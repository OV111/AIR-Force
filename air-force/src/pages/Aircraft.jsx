import { Title } from "../components/Title"
import { Footer } from "../components/Footer"
import aircrafts from "../data/aircraft.json"

export default function Aircraft() {
    return (
        <div className="inner-page">
            <Title />

            <section className="page-hero">
                <h1>Aircraft Fleet</h1>
                <p>The finest combat and strategic aircraft in aviation history</p>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {aircrafts.map(a => (
                            <div className="col" key={a.id}>
                                <div className="card h-100 p-3">
                                    <div className="d-flex justify-content-between align-items-start mb-3 gap-2">
                                        <h2 className="h6 mb-0 fw-bold text-white"
                                            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 22, letterSpacing: 2 }}>
                                            {a.name}
                                        </h2>
                                        <span className="agc-role">{a.role}</span>
                                    </div>

                                    <div className="row g-2 mb-3">
                                        <div className="col">
                                            <div className="p-2 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}>
                                                <span className="agc-stat-label">Speed</span>
                                                <span className="agc-stat-value">{a.speed}</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-2 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}>
                                                <span className="agc-stat-label">Range</span>
                                                <span className="agc-stat-value">{a.range}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mb-0 small fst-italic" style={{ color: 'var(--text-muted)' }}>
                                        {a.note}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
