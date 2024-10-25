import { useState } from "react"


function Projectcard() {
     const projects =[
          {    
               img:'./WhatsApp Image 2024-05-19 at 11.50.52 PM.jpeg'

          },
          {    
               img:'screencapture-lawfullondon-2024-05-19-23_05_45.png'

          },
          {    
               img:'./WhatsApp Image 2024-05-19 at 11.50.52 PM.jpeg'

          },
          {    
               img:'./WhatsApp Image 2024-05-19 at 11.50.52 PM.jpeg'

          },
     ];
     const[project] = useState(0);
  return (
    <div>
 <div className="bg-[#3c3c3c] w-full ">
        <div className="container flex justify-between items-center gap-3">
          <div className="card rounded-3xl w-[30%] h-[25em] truncate my-6 relative">
            <img src={projects[project].img} alt="" className="w-full"/>
            <div className="bottom  w-full flex justify-between absolute left-0  bottom-0">
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-transparent px-5 pt-2 text-white" >Live Link</button>
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-transparent px-5 pt-2 text-white" >Githu Link</button>
            </div>
          </div>
          <div className="card rounded-3xl w-[30%] h-[25em] truncate my-6 relative">
            <img src={projects[project].img} alt="" className="w-full"/>
            <div className="bottom  w-full flex justify-between absolute left-0  bottom-0">
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-transparent px-5 pt-2 text-white" >Live Link</button>
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-transparent px-5 pt-2 text-white" >Githu Link</button>
            </div>
          </div>
          <div className="card rounded-3xl w-[30%] h-[25em] truncate my-6 relative">
            <img src={projects[project].img} alt="" className="w-full"/>
            <div className="bottom  w-full flex justify-between absolute left-0  bottom-0">
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-transparent px-5 pt-2 text-white" >Live Link</button>
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-transparent px-5 pt-2 text-white" >Githu Link</button>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Projectcard