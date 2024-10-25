import aboutimage from "../image/about.png"
import { Element } from "react-scroll"
function About() {
  return (
    <Element name="abour-section">
    <div className="w-full bg-[#d9d9d9] h-[38em]">
      <div className="container mx-auto flex justify-between items-center pt-[8em]">
        <div className="aboutLeft relative w-[30%] h-[24em] ">
          <img src={aboutimage} alt="about" className="rounded-[3em] w-full aspect-auto" />
          <div className="absolute w-[5em] h-[5em] bg-[#ea4343] left-[-1.5em] -bottom-20"></div>
          <div className="absolute w-[14em] h-[7em] bg-transparent -left-[5em] -top-10 border-[0.2em] border-white rounded-2xl "></div>
        </div>
        <div className="aboutRight w-[60%]">
          <p className="text-[#ea4343]">About</p>
          <h2 className="text-4xl font-bold">I’m <span className="text-[#ea4343] ">Meharazul Islam </span><br />
            web <span className="text-[#ea4343]">Debeloper</span>
          </h2>
          <p className="py-4">Feni, Bangladesh</p>
          <p className="leading-25">Aesthetic website design and web development services with a focus on simplicity and functionality.<br/>
            I’m ready to implement the aesthetic of designs into codes adopting the latest framework and technology.<br/>
            I work as a Web Developer crafting digital user experiences.<br/>
            Resourceful, curious, creative, and critical thinker, who loves to solve problems by developing enjoyable, usable and useful products.<br/>
            I am quite active on Instagram to stay updated about me and follow me there! </p>
        </div>
      </div>
    </div>
    </Element>
  )
}

export default About