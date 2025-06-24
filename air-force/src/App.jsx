import './index.css'
import {Title} from "./components/Title" 
import {Header} from "./components/Header"
import {AirCraftShowCases} from "./components/AircraftShowcase"
import {PartnerMarquee} from "./components/Partners"
function App() {
  return (
    <div>
      <Title></Title>
      <Header></Header>
      <PartnerMarquee></PartnerMarquee>
      <AirCraftShowCases></AirCraftShowCases>

    </div>
  )
}

export default App
