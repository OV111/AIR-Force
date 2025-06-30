import { useRef, useState} from "react"

const Aircrafts = [
    {   id:1,
        name: "F-22 Raptor", 
        video: "src/assets/videos/F-22-Raptor.mp4", 
        speed: "2414km/h", 
        range: "3000km", 
        role: "Air Fighter", 
        note: "U.S. only",
    },
    {   id:2, 
        name: "B-2 Spirit", 
        video: "src/assets/videos/B-2-Spirit2.mp4", 
        speed: "1010km/h", 
        range: "11000km", 
        role: "Stealth Bomber", 
        note: "Invisible to radar",
    },
    {
        id: 3,
        name: "SU-57 Felon",
        video: "src/assets/videos/SU-57-Felon.mp4",
        speed: "2600km/h",
        range: "3500km",
        role: "Air Superior",
        note: "5th Gen",
    },
    {   id:4,
        name: "F-35 Lightning II",
        video: "src/assets/videos/F-35-Lightning-II.mp4",
        speed: "1935km/h",
        range: "2200km",
        role: "Stealth Fighter",
        note: "U.S. only",
    },
    {
        id: 5,
        name: "F-15 Eagle",
        video: "src/assets/videos/F-15-Eagle.mp4",
        speed: "3017km/h",
        range: "4200km",
        role: "Air Fighter",
        note: "Proven Record",
    },
    {
        id:6,
        name: "J-20 Dragon",
        video: "src/assets/videos/",
        speed: "2470km/h",
        range: "5500km",
        role: "Air Fighter",
        note: "Long-Range",
    },
    {
        id:7,
        name: "Eurofighter",
        video: "src/assets/videos/EuroFighter.mp4",
        speed: "2495km/h",
        range: "2900km",
        role: "Air Strike",
        note: "Europe Project",
    },
    {   
        id:8, 
        name: "SR-71 Blackbird", 
        video: "src/assets/videos/SR-71-BlackBird.mp4", 
        speed: "3510km/h", 
        range: "5400km", 
        role: "Strategic Recon",
        note: "Never Hit",
    },
]
const ChevronRight = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
    )
}
const ChevronLeft = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
    )
}
const AirCraftCard = ({scrollContainerRef,canScrollLeft,canScrollRight,scrollLeft,scrollRight,checkScrollButtons}) => {

    return (
        <div className="cards-container">
            <button className={`nav-button nav-button-left ${!canScrollLeft ? "disabled": ""}`} onClick={scrollLeft} disabled={!canScrollLeft} type="button"> 
                <ChevronLeft />
            </button>
            <button className={`nav-button nav-button-right ${!canScrollRight ? "disabled" : ""}`} onClick={scrollRight} disabled={!canScrollRight} type="button"> 
                <ChevronRight />
            </button>

            <div ref={scrollContainerRef} className="aircraftCards" onScroll={checkScrollButtons}>
                {Aircrafts.map((aircraft) => {
                    return (
                        <div className="aircraftCard" key={aircraft.id}>
                            <video className="card-background-video" autoPlay muted playsInline loop>
                                <source src={aircraft.video} />
                            </video>
                            <div className="card-content">
                                <div className="card-content-h2">
                                    <h2>{aircraft.name}</h2>
                                </div>
                                <div className="card-content-part1">
                                     <h1>Speed - {`${aircraft.speed}`}</h1>
                                     <h1>Range - {`${aircraft.range}`}</h1>    
                                </div>
                                <div className="card-content-part2">
                                    <h1>Role - {`${aircraft.role}`}</h1>
                                    <h1>Note - {`${aircraft.note}`}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export const AirCraftShowCases = () => {
     const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight,setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        if(scrollContainerRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }

    const scrollLeft = () => {
        if(scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -370,
                behavior: "smooth",
            })
        }
    }
    const scrollRight = () => {
        if(scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 370,
                behavior: "smooth",
            })
        }
    }

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

            <AirCraftCard 
                scrollContainerRef = {scrollContainerRef}
                canScrollLeft = {canScrollLeft}
                canScrollRight = {canScrollRight}
                scrollLeft = {scrollLeft}
                scrollRight={scrollRight}
                checkScrollButtons={checkScrollButtons}
            />
        </section>
    )
}