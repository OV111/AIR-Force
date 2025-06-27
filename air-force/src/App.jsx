import './index.css'
import {Title} from "./components/Title" 
import {Header} from "./components/Header"
import {PartnerMarquee} from "./components/Partners"
import {AirCraftShowCases} from "./components/AircraftShowcase"
import { Footer } from './components/Footer'
function App() {
  return (
    <div>
      <Title></Title>
      <Header></Header>
      <PartnerMarquee></PartnerMarquee>
      <AirCraftShowCases></AirCraftShowCases>
      <Footer></Footer>
    </div>
  )
}

export default App
