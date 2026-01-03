import Hero from "./components/Hero"
import Header from "./components/Header"
import OurStory from "./components/OurStory"
import Avocados from "./components/Avacados"
import WorkInProgress from "./components/WorkInprogress"
import QualityProcess from "./components/QualityProcess"
import Testimonials from "./components/Testimonials"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

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
<Footer/>
    </>
  )
}

export default App
