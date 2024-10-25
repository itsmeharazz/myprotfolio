import { Element } from "react-scroll"
function Project() {
  return (
     <Element name="project-section">
    <div>
     <div className="projectTop w-full py-4 bg-[#ea4343]">
     <div className="container w-full h-[10em] mx-auto ">
          <p>My Project</p>
          <h2 className="text-3xl my-4 font-semibold">Some of the projects that I have works in</h2>
          <div className="projectnav">
               <ul className="flex gap-9 text-white">
                    <li>All </li>
                    <li>Vanilla CSS </li>
                    <li>React </li>
                    <li>Laravel </li>
               </ul>
          </div>
     </div>
     </div>
    </div>
     </Element>
  )
}

export default Project