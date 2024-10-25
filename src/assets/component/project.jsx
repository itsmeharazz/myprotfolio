import { Element } from "react-scroll"
import ProjectHeader from "./project/projectHeader"
import Projectcard from "./project/projectcard"
function Project() {
  return (
     <Element name="project-section">
    <div>
     <div className="projectTop w-full pt-5 bg-[#ea4343]">
     <div className="container w-full h-[10em] mx-auto ">
          <p>My Project</p>
          <h2 className="text-3xl my-4 font-semibold">Some of the projects that I have works in</h2>
          <ProjectHeader/>
     </div>
          <Projectcard />
     </div>
    </div>
     </Element>
  )
}

export default Project