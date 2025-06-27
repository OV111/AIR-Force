import { useRef, useState} from "react"
// import { useEffect } from "react"
// import "/src/index.css"
const Aircrafts = [
    {id:1, name: "F-22 Raptor", video: "src/assets/F-22-Raptor.mp4", speed: "2414km/h", range: "3000km", role: "Air Fighter", note: "U.S. only"},
    {id:2, name: "B-2 Spirit", video: "src/assets/B-2-Spirit.mp4", speed: "1010km/h", range: "11000km", role: "Stealth Bomber", note: "Invisible to radar"},
    {id:3, name: "SR-71 Blackbird", video: "src/assets/F-22-Raptor.mp4", speed: "3510km/h", range: "5400km", role: "Strategic Recon",note: "Never Hit"},
    {id:4, name: "F-35 Lightning II", video: "src/assets/F-22-Raptor.mp4", speed: "3510km/h", range: "5400km", role: "Strategic Recon",note: "Never Hit"},
    {
        id: 5,
        name: "A-10 Thunderbolt",
        video: "src/assets/F-22-Raptor.mp4",
        speed: "",
        range: "",
        role: "",
        note: "",
    },
    {
        id: 6,
        name: "F-16 Falcon",
        video: "src/assets/F-22-Raptor.mp4",
        speed: "",
        range: "",
        role: "",
        note: "",
    },
    {
        id: 7,
        name: "SU-57 Felon",
        video: "src/assets/F-22-Raptor.mp4",
        speed: "",
        range: "",
        role: "",
        note: "",
    },
    {
        id:8,
        name: "Eurofighter",
        video: "src/assets/F-22-Raptor.mp4",
        speed: "",
        range: "",
        role: "",
        note: "",
    },
    {
        id:9,
        name: "J-20 Dragon",
        video: "src/assets/F-22-Raptor.mp4",
        speed: "",
        range: "",
        role: "",
        note: "",
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