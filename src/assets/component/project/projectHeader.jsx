import { useState } from "react"

function ProjectHeader() {
  const projects = [
    {
      lable:'All',
      img:'./WhatsApp Image 2024-05-19 at 11.50.52 PM.jpeg'
    },
    {
      lable:'Vanila CSS',
      img:'screencapture-behance-net-gallery-175939839-Portfolio-Website-Landing-Page-2023-08-10-23_25_32.png'
    },
    {
      lable:'React',
    img:'screencapture-lawfullondon-2024-05-19-23_05_45.png'
    },
    {
      lable:'Laravel',
     img:'./WhatsApp Image 2024-05-19 at 11.50.52 PM.jpeg'
    },
  ];
  const[position, setPosition] = useState(0);
  return (
    <div className="project">
    <div className="flex flex-col gap-3 container max-w-md mb-12">
      <ul className="bg-[#ea4343] px-4 rounded-xl flex items-center text-white">
    {projects.map((tab, idx) =>(
      <li className={`flex-1 font-medium text-center text-white text-lg py-6 relative before:absolute before:left-0 before:bottom-0 before:h-1 before:w-full before:bg-[#FFF] before:transition cursor-pointer ${position == idx ?"before:scale100 text-[#3c3c3c]":"before:scale-0"}`}
        key={idx}
        onClick={() => setPosition(idx)}>
        {tab.lable}
      </li>
    ))}
      </ul>
    </div>
     
    </div>
  )
}

export default ProjectHeader