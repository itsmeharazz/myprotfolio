import { FaFacebook, FaInstagram, FaLinkedin, FaMinus } from "react-icons/fa"
import Navbar from "./navbar/navbar"
import coverimage from "../image/my_image-removebg.png"
import { useTypewriter, Cursor } from "react-simple-typewriter"


function Herro() {
     const [typeEffect] = useTypewriter({
          words:["Front-end Developer", "React Developer", "Nodjs Developer", "Laravel Developer"],
          loop:{},
          typeSpeed:150,
          delaySpeed:60,
          
     })
  return (
    <div className="bg-[#3C3C3C] h-full pt-28">
     <Navbar />
     <div className="container flex justify-around items-start py-7">
          <div className="heroLeft justify-around flex  gap-28 w-[55%]"> 
            <div className="icon flex flex-col gap-4">
            <FaFacebook  className="text-[#fff] hover:text-[#EA4343] text-3xl transition-all"/>
            <FaLinkedin  className="text-[#fff] hover:text-[#EA4343] text-3xl transition-all"/>
            <FaInstagram className="text-[#fff] hover:text-[#EA4343] text-3xl transition-all" />
            
            </div>
            <div className="herocontent text-[#fff]">
              <p className="flex gap-3 align-bottom text-[#E2DCDC] text-[2em]"><FaMinus className="text-[1.2em] text-[#fff]"/> Hello I’m Meharazul Islam</p>
              <h1 className="text-5xl mt-8">I’m a freelance <br /> <span className="text-[#ea4343] font-bold">{typeEffect} <Cursor/></span></h1>
            </div>
          </div>
          <div className="heroRight w-[40%] border-spacing-2 border-white relative">
               <img src={coverimage} alt={coverimage} className="mb-[-1.8em]"/>
               <div className="absolute w-[7em] h-[7em] bg-[#ea4343] left-[6em] bottom-[3em] z-20"></div>
               <div className="absolute w-[4em] h-[6em] left-[3em] top-[2em] bg-[#ea4343]"></div>
               <div className="absolute w-[3em] h-[4em] bg-[#ea4343] right-[5em] bottom-[3em]"></div>
               <div className="color absolute w-[15em] h-[15em] bg-transparent border-white border-4 right-[8em] top-[1em]"></div>
               <div className="absolute w-[7em] h-[9em] bg-[#ea4343] right-[3em] top-0"></div>
          </div>
      </div>
      <div className="mouse bg-white w-7 h-14 rounded-full mx-auto">
         <span className="grid place-content-center font-bold text-xl">|</span>
      </div>
    </div>
  )
}

export default Herro