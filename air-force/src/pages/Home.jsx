import { Title } from "../components/Title"
import { Header } from "./Header"
import { PartnerMarquee } from "../components/Partners"
import { AircraftShowcase } from "../components/AircraftShowcase"
import { Footer } from "../components/Footer"

export default function Home() {
    return (
        <div>
            <Title />
            <Header />
            <PartnerMarquee />
            <AircraftShowcase />
            <Footer />
        </div>
    )
}
