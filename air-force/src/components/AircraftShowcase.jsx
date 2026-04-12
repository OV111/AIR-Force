import { useRef, useCallback } from "react"
import AircraftCard from "./AircraftCard"

export const AircraftShowcase = () => {
    const scrollContainerRef = useRef(null)

    const checkScrollButtons = useCallback(() => {}, [])

    return (
        <section className="py-5">
            <div className="text-center px-3 mb-4" style={{ maxWidth: 900, margin: '0 auto' }}>
                <h1 className="showcase-title mb-3">The Best of the Best</h1>
                <p className="text-muted fs-6 lh-lg">
                    These are not just machines — they are legends in flight.
                    The aircraft in this section represent the pinnacle of aviation
                    engineering, combat performance, and historical impact.
                    Chosen for their unmatched speed, agility, durability,
                    and mission success, each has earned its place among the elite.
                </p>
            </div>

            <AircraftCard
                scrollContainerRef={scrollContainerRef}
                checkScrollButtons={checkScrollButtons}
            />
        </section>
    )
}
