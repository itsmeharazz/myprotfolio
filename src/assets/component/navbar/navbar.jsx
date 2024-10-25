import { Link } from "react-scroll";
import { navlinks } from "../../constants/nav";
export const Navbar = () =>{
  return (
   <ul className="flex items-center gap-8">
    {navlinks.map((link)=>(
      <Link 
      activeClass="text-[#ea4343]"
      className="text-white hover:text-[#ea4343] transition cursor-pointer"
      key={link.href}
      to={link.href}
      smooth
      offset={-80}>
        {link.lable}
      </Link>
    ))}
   </ul>

  );
}


