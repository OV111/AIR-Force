import { useRef, useCallback, useState } from "react"
import AircraftCard from "./AircraftCard"

export const AircraftShowcase = () => {
    const scrollContainerRef = useRef(null)
    const [showLeft, setShowLeft]   = useState(false)
    const [showRight, setShowRight] = useState(true)

    const checkScrollButtons = useCallback(() => {
        const el = scrollContainerRef.current
        if (!el) return
        setShowLeft(el.scrollLeft > 10)
        setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
    }, [])

    const scrollBy = useCallback((dir) => {
        const el = scrollContainerRef.current
        if (!el) return
        el.scrollBy({ left: dir * 440, behavior: 'smooth' })
        setTimeout(checkScrollButtons, 350)
    }, [checkScrollButtons])

    return (
        <section className="py-5">
            <div className="text-center px-3 mb-4" style={{ maxWidth: 900, margin: '0 auto' }}>
                <h2 className="showcase-title mb-3">The Best of the Best</h2>
                <p className="text-muted fs-6 lh-lg">
                    These are not just machines — they are legends in flight.
                    The aircraft in this section represent the pinnacle of aviation
                    engineering, combat performance, and historical impact.
                    Chosen for their unmatched speed, agility, durability,
                    and mission success, each has earned its place among the elite.
                </p>
            </div>

            <div className="showcase-scroll-wrapper">
                {showLeft && (
                    <button
                        className="showcase-scroll-btn showcase-scroll-btn--left"
                        onClick={() => scrollBy(-1)}
                        aria-label="Scroll left"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                )}

                <AircraftCard
                    scrollContainerRef={scrollContainerRef}
                    checkScrollButtons={checkScrollButtons}
                />

                {showRight && (
                    <button
                        className="showcase-scroll-btn showcase-scroll-btn--right"
                        onClick={() => scrollBy(1)}
                        aria-label="Scroll right"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                )}
            </div>
        </section>
    )
}
