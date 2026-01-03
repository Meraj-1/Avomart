import Hero from "./components/Hero"
import Header from "./components/Header"
import OurStory from "./components/OurStory"
import Avocados from "./components/Avacados"
import WorkInProgress from "./components/WorkInprogress"
import QualityProcess from "./components/QualityProcess"
import Testimonials from "./components/Testimonials"
import ContactSection from "./components/ContactSection"

function App() {

  return (
    <>
    <Header/>
            <OurStory/>
      <Avocados/>
{/* <WorkInProgress/> */}
<QualityProcess/>
<Testimonials/>
<ContactSection/>
    </>
  )
}

export default App
