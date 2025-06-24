export const AirCraftCards = () => {
    const Aircrafts = [
        {id:1, name: "F-22 Raptor", video: "src/assets/B-2-Spirit.mp4", info: "some text that will be printed"},
        {id:2, name: "B-2 Spirit", video: "src/assets/B-2-Spirit.mp4", info: "some text that will be printed"},
        {id:3, name: "SR-71 Blackbird", video: "src/assets/B-2-Spirit.mp4", info: "some text that will be printed"},
        // {id:4, name: "F-35 Lightning II", video: "src/assets/B-2-Spirit.mp4", info: ""},
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
                                <h2>{aircraft.name}</h2>
                                <p>{aircraft.info}</p>
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