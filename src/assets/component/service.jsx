import { Element } from "react-scroll"

function Service() {
     const services =[
          {
               titel:'Front-End Development',
               des:'Offering custom front-end development services, I bring your design vision to life with clean, optimized code using HTML, CSS, JavaScript, and React.',
          },
          {
               titel:'Responsive Web Design',
               des:'I specialize in creating responsive websites that adapt seamlessly to any device, ensuring a smooth user experience across desktops, tablets, and smartphones',
          },
          {
               titel:'Custom visually designed layout',
               des:'Elevate your online presence with captivating, SEO-optimized layouts that attract visitors and boost search rankings.',
          },
          {
               titel:'E-Commerce web development',
               des:'Powerful eCommerce websites that drive sales and boost customer engagement through expert web development.',
          },
          {
               titel:'SEO friendly web development',
               des:'Drive online growth with our SEO focused web development solutions for enhanced visibility and increased organic traffic.',
          },
          {
               titel:'Full-Stack Development',
               des:'As a Full-stack developer, I build full-stack applications using Laravel,  React, and Node.js, ensuring both front-end and back-end work together efficiently.',
          },
     ];
     return (
          <Element name="Service-section">
               <div className="w-full  bg-[#d9d9d9] py-5 ">
                    <div className="container mx-auto">
                         <div className="serviceContent w-[40%]">
                              <p className="py-4">Service </p>
                              <p className="leading-6 text-[#3c3c3c]">I provide web design & development. Let’s collaborate to bring your digital vision to life. I will build your designs into high-performing, pixel-perfect landing pages to save you time and cost. I understand what it takes to reach your business goal—from designs to the technical bits.</p>

                         </div>
                         <div className="grid grid-cols-3 gap-6 mt-5">
                         {services.map((service, ser)=>(
                           <div className="bg-[#3c3c3c] p-4 text-white" key={ser}>
                              <h2 className="text-2xl pb-4 font-medium">{service.titel}</h2>
                              <p>{service.des}</p>
                           </div>   
                         ))}       
                         </div>
                    </div>

               </div>
          </Element>
     )
}

export default Service