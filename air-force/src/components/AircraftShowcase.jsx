export const AirCraftCards = () => {
    const Aircrafts = [
        {id:1, name: "F-22 Raptor", video: "src/assets/F-22-Raptor.mp4", speed: "2414km/h", range: "3000km", role: "Air Fighter", note: "U.S. only"},
        {id:2, name: "B-2 Spirit", video: "src/assets/B-2-Spirit.mp4", speed: "1010km/h", range: "11000km", role: "Stealth Bomber", note: "Invisible to radar"},
        {id:3, name: "SR-71 Blackbird", video: "src/assets/F-22-Raptor.mp4", speed: "3510km/h", range: "5400km", role: "Strategic Recon",note: "Never Hit"},
        
        
        // {id:4, name: "F-35 Lightning II", video: "src/asC:\Users\Default\Documents\GitHub\AIR-Force\air-force\src\assets\Untitled-video-Made-with-Clipchamp.mp4sets/B-2-Spirit.mp4", info: ""},
    ]
    return (
         <div className="aircraftCards">
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
    )

}

export const AirCraftShowCases = () => {
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

            <div>
                <AirCraftCards />
            </div>
        </section>
    )
}