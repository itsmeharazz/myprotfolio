
import About from "./assets/component/abou"
import Footer from "./assets/component/footer"
import Herro from "./assets/component/Herro"
import Project from "./assets/component/project"
import Service from "./assets/component/service"
import Skill from "./assets/component/skill"
import WorkProcess from "./assets/component/workProcess"

function App() {
  return (
    <div>
     <Herro />
     <About />
     <Skill/>
     <Project/>
     <Service/>
     <WorkProcess/>
     <Footer/>
    </div>
  )
}

export default App