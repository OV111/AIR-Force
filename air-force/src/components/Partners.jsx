const logos = [ 
    // {name: "BlueOrigin.png",width: 160},
    {name: "Boeing.png",width: 150},
    {name: "Aws.png",width:130},
    {name: "SpaceX.png",width:140},
    {name: "Darpa.png",width: 150},
    {name: "Nasa.png",width: 120},
    {name: "Raytheon.png",width:150},
]
export const PartnerMarquee = () => {
    return (
        <div className="partner-section">
            <h2>Powered by Industry Leaders</h2>
            <div className="marquee-container">
            <div className="logo-marquee">
                {[...logos,...logos,...logos,...logos].map((logo,index) => {
                    return (
                        <img src={`/src/assets/logos/${logo.name}`}  
                        alt={logo.name.split('.')[0]} 
                        key={index}
                        width={logo.width}
                        height={60}
                        className="marquee-logo"/>
                    )
                })}
            </div>
            </div>
        </div>
    )
}
