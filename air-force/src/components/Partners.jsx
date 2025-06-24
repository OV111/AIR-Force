const logos = [ 
    {name: "BlueOrigin.png",width: 160},
    {name: "Boeing.png",width: 140},
    {name: "Darpa.png",width: 140},
    {name: "Nasa.png",width: 120},
    {name: "SpaceX.png",width:140},
]
export const PartnerMarquee = () => {
    return (
        <div className="partner-section">
            <h2>Powered by Industry Leaders</h2>
            <div className="logo-marquee">
                {console.log(logos)}
                {[...logos,...logos].map((logo,index) => {
                    
                    return (
                        <img src={`/src/assets/logos/${logo.name}`}  alt={logo.name.split('.')[0]} key={index} width={logo.width} height={60}/>
                    )
                })}
            </div>
        </div>
    )
}
