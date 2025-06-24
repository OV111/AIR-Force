export const AirCraftCards = () => {
    const Aircrafts = [
        {id:1, name: "F-22 Raptor", video: ""},
        {id:2, name: "B-2 Spirit", video: "src/assets/B-2-Spirit.mp4"},
        {id:3, name: "SR-71 Blackbird", video: ""},
    ]
    return (
         <div className="aircraftCards">
                {Aircrafts.map((aircraft) => {
                    return (
                        <div className="aircraftCard" key={aircraft.id}>
                            <video className="card-background-video" autoPlay muted playsInline loop width={200} height={200}>
                                <source src={aircraft.video} />
                            </video>

                            <div className="card-content">
                                <h2>{aircraft.name}</h2>

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
            <div className="h1_of_Aircraft">
                <h1>The Best of the Best</h1>
            </div>

            <div>
                <AirCraftCards />
            </div>
        </section>
    )
}