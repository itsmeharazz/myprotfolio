import { Children, useState } from "react"
import mordenhome from "../../image/css.png"
import restaurant from "../../image/css_2.png"
import mkted from "../../image/css_3.png"
import hospital from "../../image/Laravel.png"
function ProjectHeader() {
  const projects = [
    {
      lable:'All',
      img:mordenhome,
    },
    {
      lable:'Vanila CSS',
      Children:[
        {
          img:mordenhome,
        },
        {

         img:restaurant,
        },
        {

           img:mkted,
        }
      ]
    },
    {
      lable:'React',
    img:"",
    },
    {
      lable:'Laravel',
     img:hospital
    },
  ];
  const[position, setPosition] = useState(0);
  return (
    <div className="project">
    <div className="flex flex-col gap-3 container max-w-md mb-12">
      <ul className="bg-[#ea4343] px-4 rounded-xl flex items-center text-white">
    {projects.map((tab, idx) =>(
      <li className={`flex-1 font-medium text-center text-white text-lg py-6 relative before:absolute before:left-0 before:bottom-0 before:h-1 before:w-full before:bg-[#FFF] before:transition cursor-pointer ${position == idx ?"before: scale100 text-[#3c3c3c]":"before:scale-0"}`}
        key={idx}
        onClick={() => setPosition(idx)}>
        {tab.lable}
      </li>
    ))}
      </ul>
    </div>
      {/* <div className="bg-[#3c3c3c] w-full ">
        <div className="container flex justify-between items-center gap-3 mx-auto">
          <div className="card rounded-3xl w-[30%] h-[25em]  truncate my-6 relative">
          <img src={projects[position].img} alt="" className="w-full"/>
            <div className="bottom  w-full flex justify-between absolute left-0  bottom-0">
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-transparent px-5 pt-2 text-white" >Live Link</button>
               <button className="bg-[#3c3c3c] w-[45%] hover:text-black hover:border hover:border-[#ea4343] hover:bg-transparent px-5 pt-2 text-white" >Githu Link</button>
            </div>
          </div>
         
          
          
        </div>
      </div> */}
     
    </div>
  )
}

export default ProjectHeader