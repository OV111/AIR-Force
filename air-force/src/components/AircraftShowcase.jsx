const Aircrafts = [
    {id:1, name: "F-22 Raptor"},
    {id:2, name: "B-2 Spirit"},
    {id:3, name: "SR-71 Blackbird"},
]
export const AirCraftShowCases = () => {
    return (
        <section className="AirCraftShowCase">
            <div>
                <h1>The Best of the Best</h1>
            </div>

            <div className="aircraftGrid">
                {Aircrafts.map((aircraft) => {
                    return (
                        <div className="aircraftCard" key={aircraft.id}>
                            <h2>{aircraft.name}</h2>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}