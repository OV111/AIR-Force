import { useRef, useState, useCallback } from "react"
import AircraftCard from "./AircraftCard"

const SCROLL_DISTANCE = 370

export const AircraftShowcase = () => {
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = useCallback(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }, [])

    const scrollLeft = useCallback(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -SCROLL_DISTANCE,
                behavior: "smooth",
            })
        }
    }, [])

    const scrollRight = useCallback(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: SCROLL_DISTANCE,
                behavior: "smooth",
            })
        }
    }, [])

    return (
        <section className="AirCraftShowCase">
            <div className="text_of_Aircraft">
                <h1>The Best of the Best</h1>
                <p>These are not just machines — they are legends in flight.
                   The aircraft in this section represent the pinnacle of aviation
                   engineering, combat performance, and historical impact.
                   Chosen for their unmatched speed, agility, durability,
                   and mission success, each has earned its place among the elite.
                   They have redefined what air dominance means.
                </p>
            </div>

            <AircraftCard
                scrollContainerRef={scrollContainerRef}
                canScrollLeft={canScrollLeft}
                canScrollRight={canScrollRight}
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
                checkScrollButtons={checkScrollButtons}
            />
        </section>
    )
}
