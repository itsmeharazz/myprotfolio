import { Element } from "react-scroll"
import contactpic from '../image/Contact.jpg'


function Footer() {
  return (
    <Element name="contact-section">
    <div className="w-full bg-[#d9d9d9]">
    <div className="container flex justify-between items-center mx-auto py-9 gap-4">
     <div className="left w-[50%]">
          <p className="text-xl">Are you planning a<span className="text-[#ea4343]"> new website</span>, or want to optimize your landing page?</p>
          <p className="mt-3 mb-5">I am always open to discuss your project, improve your online presence or help with your design challenges.</p>
          <img src={contactpic} alt="" />
     </div>
     <div className="right bg-[#BCBCBC] p-5 rounded-2xl w-[45%] ">
          <from className="flex flex-col">
               <input type="text" placeholder="Trype your name here" />
               <input type="text" placeholder="Trype your e-mail here" />
               <input type="text"  placeholder="Trype your subject here"/>
               <textarea placeholder="Trype your massege here"></textarea>
               <button className="bg-[#ea4343] mt-4 w-[30%] h-12 text-white  rounded-xl">SEND MAIL</button>
          </from>
     </div>
    </div>
    </div>
    </Element>
  )
}

export default Footer