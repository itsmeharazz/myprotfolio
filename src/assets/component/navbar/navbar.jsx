import { useState, setstate } from "react";
function Navbar() {
  const {navbar, setStikyNavbar} = useState(false);
  const changBg =()=>{
    console.log(window.scroll)
    if(window.screenY >= 150) {
      setStikyNavbar(true)
    }else{
      setStikyNavbar(false)
    }
  }
  window.addEventListener('scroll', changBg)
  return (
    <nav className=" fixed top-0 w-full z-50"{...navbar? 'bg-black text-white' : "bg-transparent"}>
      <div className="container mx-auto flex justify-between align-center bg-transparent min-h-16 py-7 text-[#fff]">
        <h2>Meharaz</h2>
        <ul className="flex justify-between align-center gap-4">
          <li >
            <a href="#" className="hover:text-[#EA4343] text-xl"> Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA4343] text-xl"> About</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA4343] text-xl"> Projeect</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA4343] text-xl"> Service</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA4343] text-xl"> Process </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#EA4343] text-xl"> Contact </a>
          </li>
        </ul>
        <button type="button" className="bg-[#EA4343] text-[#fff] p-3 rounded-[2em] hover:bg-transparent hover:border hover:border-[#ea4343]">Download Resume </button>
      </div>
    </nav>
  );
}

export default Navbar;
