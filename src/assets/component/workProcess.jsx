import { Element } from "react-scroll"
function WorkProcess() {
     const work =[
          {
           number:1,
           titel:"Research" ,
           des:"This is how everything starts. Gathering information about the project to understand the problem space and identifying the pain points to outline the scope and better identify the requirements. Finding the problem." , 
          },
          {
           number:2,
           titel:"Strategy" ,
           des:"Planning in the right direction after the identification of the problem space and stitching the right solution according to that is very crucial. Strategizing and exploring possible solutions." , 
          },
          {
           number:3,
           titel:"Design" ,
           des:"After the end of this phase, you will have pixel perfect designs for your mobile/ web application. Stimulating interactions, robust design systems, I have done it all for my various freelance clients before. Design to awe your audience." , 
          },
          {
           number:4,
           titel:"Development" ,
           des:"At this point, I will convert all pages UI designed files into HTML, CSS, JavaScript, Tailwind, React, depending on the complexity of the designs. Crafting an optimized clean code structured website development is my objective at this stage." , 
          },
          {
           number:5,
           titel:"Testing" ,
           des:"Conducting usability tests to ensure the credibility of the solution designed according to the problem statements discovered. Aligning the target audiences feedback with the proposed solution for pragmatic & feedback oriented results." , 
          },
          {
           number:6,
           titel:"Launch" ,
           des:"After confirmation a final approval, I will upload all files on the server to go live. This step includes SEO optimization for search engines plays a vital role because it ensures that the created website is visible to people and they can easily find it." , 
          },
     ];
  return (
     <Element name="process-section">
    <div className="w-full  bg-[#3c3c3c] py-5">
     <div className="container mx-auto">
          <p className="text-[#ea4343] py-3 text-xl">Work PROCESS</p>
          <h2 className="text-white my-3 text-2xl font-medium">Reach your business goals with excellent user experience </h2>
          <p className="text-[#d9d9d9]">Let’s start working on your awesome website</p>
          <div className="work grid grid-cols-3 gap-6 mt-5">
               {work.map((work, process)=>(
                    <div className="card bg-[#d9d9d9] rounded-xl p-3" key={process}>
                         <div className="flex items-center">
                             <p className="text-[2.5em] pr-2 text-[#a2a1a1]">{work.number}</p> 
                             <p className="text-2xl font-medium text-[#3c3c3c]">{work.titel} </p>
                         </div>
                             <p>{work.des}</p>
                    </div>
               ))}

          </div>
     </div>
    </div>
     </Element>
  )
}

export default WorkProcess