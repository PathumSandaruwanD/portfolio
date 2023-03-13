import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, FindMe } from './components'
const App = () => {


  return (

    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About></About>
        <Experience></Experience>
        <Works></Works>
        <Tech></Tech>
        <div>
          <Contact ></Contact>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
