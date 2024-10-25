import htmlpic from '../image/html.png'
import csspic from '../image/css3.png'
import jspic from '../image/Js.png'
import reactjspic from '../image/react.png'
import bootstrappic from '../image/800px-Bootstrap_logo.svg.png'
import tailwind from '../image/tailwind-e5e18457.png'
import laravelpic from '../image/laravel-logo.png'
import gtihubpic from '../image/github.png'
import figmabpic from '../image/figma.png'
import skill from '../image/skill img.png'
import { Element } from 'react-scroll'
function Skill() {
  return (
     <Element name='skill-section'>
    <div className="w-full h-[48em] bg-[#3c3c3c] py-1">
     <div className="container mx-auto flex justify-between items-center my-8">
         <div className="left w-[65%]">
          <div className="lfetContent text-[#fff] w-[45%]">
          <p className="text-[#ea4343] py-4">Develop is Life</p>
          <h2 className="font-bold text-3xl pb-5">I Develop Skills Regularly
          to Keep Me Update </h2>
          <p className="text-[#d9d9d9]">Most common methods for developing website that work well on desktop is responsive adaptive design </p>
          </div>
          <div className="lftCard  w-full h-[10em] flex justify-between items-center flex-wrap">
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={htmlpic} alt="html" />
               <p className='text-center text-white text-2xl font-medium'>HTML</p>
          </div>
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={csspic} alt="html" />
               <p className='text-center text-white text-2xl font-medium'>CSS 3</p>
          </div>
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={jspic} alt="html" />
               <p className='text-center text-white text-2xl font-medium'>JavaScript</p>
          </div>
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={reactjspic} alt="html" />
               <p className='text-center text-white text-2xl font-medium'>Reactjs</p>
          </div>
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={tailwind} alt="html" />
               <p className='text-center text-white text-2xl font-medium'>Tailwind</p>
          </div>
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={bootstrappic} alt="html" />
               <p className='text-center text-white text-2xl font-medium'>Booststrap</p>
          </div>
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={laravelpic} alt="Laravel" />
               <p className='text-center text-white text-2xl font-medium'>Laravel</p>
          </div>
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={gtihubpic} alt="Github" />
               <p className='text-center text-white text-2xl font-medium'>Githum</p>
          </div>
          <div className="skill w-[18%] h-[12em] hover:bg-[#ea4343]  p-2 border-4 my-4  rounded-xl ">
               <img src={figmabpic} alt="figma" />
               <p className='text-center text-white text-2xl font-medium'>Figma</p>
          </div>
          
          </div>
          </div> 
           <div className="right w-[30%] h-[25em] pt-[8em]">
              <img src={skill} alt="my image" className='rounded-3xl border border-[#ea4343]'/> 
           </div>
     </div>
    </div>
     </Element>
  )
}

export default Skill