// import { useState } from "react"
import mordenhome from "../../image/css.png"
import restaurant from "../../image/css_2.png"
import mkted from "../../image/css_3.png"
// import hospital from "../../image/Laravel.png"

function Projectcard() {
     const projects =[
          {    
               img:mordenhome,

          },
          {    
               img:restaurant,

          },
          {    
               img:mkted,

          },
          // {    
          //      img:hospital,

          // },
     ];
     // const[project] = useState(0);
  return (
    <div>

 <div className="bg-[#3c3c3c] w-full ">
        <div className="container flex justify-between items-center gap-3 mx-auto">
        {projects.map((imgproject, projectpic)=>(

          <div className="card rounded-3xl w-[27%] h-[25em]  truncate my-6 relative" key={projectpic}>
            <img src={imgproject.img} alt="" className="w-full"/>
            <div className="bottom  w-full flex justify-between absolute left-0  bottom-0">
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-[#ea4343] px-5 pt-2 text-white" >Live Link</button>
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-[#ea4343] px-5 pt-2 text-white" >Githu Link</button>
            </div>
          </div>
        ))}
         
          
          
        </div>
      </div>
    </div>
  )
}

export default Projectcard