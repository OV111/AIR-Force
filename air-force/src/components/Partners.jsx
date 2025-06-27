const logos = [ 
    // {name: "BlueOrigin.png",width: 160},
    {name: "Boeing.png",width: 120},
    {name: "Aws.png",width:110},
    {name: "SpaceX.png",width:120},
    {name: "Darpa.png",width: 120},
    {name: "Nasa.png",width: 110},
    {name: "Raytheon.png",width:130},
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
                        height={50}
                        className="marquee-logo"/>
                    )
                })}
            </div>
            </div>
        </div>
    )
}