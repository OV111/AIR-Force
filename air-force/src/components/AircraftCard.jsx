import { ChevronLeft, ChevronRight } from "./Icons"
import aircrafts from "../data/aircraft.json"

const AircraftCard = ({ scrollContainerRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight, checkScrollButtons }) => {
    return (
        <div className="cards-container">
            <button
                className={`nav-button nav-button-left ${!canScrollLeft ? "disabled" : ""}`}
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                type="button"
                aria-label="Scroll left"
            >
                <ChevronLeft />
            </button>
            <button
                className={`nav-button nav-button-right ${!canScrollRight ? "disabled" : ""}`}
                onClick={scrollRight}
                disabled={!canScrollRight}
                type="button"
                aria-label="Scroll right"
            >
                <ChevronRight />
            </button>

            <div ref={scrollContainerRef} className="aircraftCards" onScroll={checkScrollButtons}>
                {aircrafts.map((aircraft) => (
                    <div className="aircraftCard" key={aircraft.id}>
                        <video className="card-background-video" autoPlay muted playsInline loop>
                            {aircraft.video && <source src={aircraft.video} />}
                        </video>
                        <div className="card-content">
                            <div className="card-content-h2">
                                <h2>{aircraft.name}</h2>
                            </div>
                            <div className="card-content-part1">
                                <h1>Speed - {aircraft.speed}</h1>
                                <h1>Range - {aircraft.range}</h1>
                            </div>
                            <div className="card-content-part2">
                                <h1>Role - {aircraft.role}</h1>
                                <h1>Note - {aircraft.note}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AircraftCard
