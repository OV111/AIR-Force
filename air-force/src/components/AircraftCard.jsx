import { useRef, useEffect } from "react"
import aircrafts from "../data/aircraft.json"

// Only plays when the card enters the viewport — avoids 8 simultaneous streams
const VideoCard = ({ aircraft }) => {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video || !aircraft.video) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {})
                } else {
                    video.pause()
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(video)
        return () => observer.disconnect()
    }, [aircraft.video])

    return (
        <article className="aircraftCard">
            {aircraft.video ? (
                <video
                    ref={videoRef}
                    className="card-background-video"
                    muted
                    playsInline
                    loop
                    preload="none"
                >
                    <source src={aircraft.video} type="video/mp4" />
                </video>
            ) : (
                <div className="card-no-video" aria-hidden="true">✈</div>
            )}

            <div className="card-gradient" />

            <div className="card-content">
                <h2 className="card-name">{aircraft.name}</h2>
                <div className="d-flex flex-wrap gap-1">
                    <span className="card-tag">{aircraft.speed}</span>
                    <span className="card-tag">{aircraft.range}</span>
                    <span className="card-tag muted">{aircraft.role}</span>
                    <span className="card-tag muted">{aircraft.note}</span>
                </div>
            </div>
        </article>
    )
}

const AircraftCard = ({ scrollContainerRef, checkScrollButtons }) => {
    return (
        <div
            ref={scrollContainerRef}
            className="aircraftCards"
            onScroll={checkScrollButtons}
        >
            {aircrafts.map((aircraft) => (
                <VideoCard key={aircraft.id} aircraft={aircraft} />
            ))}
        </div>
    )
}

export default AircraftCard
