import { Link } from "react-router-dom";
import logoIMG from"../assets/logo.png";

function Navbar() {
  return (
    < >
    <nav id="Navbar ">
        <div className="container">
        <div className="Nav_Menu pt-[43px]  pb-[38px] ">
<Link className="logo w-[127px]">
    <img src={logoIMG} alt="Brand logo"  />
</Link>




        </div>


        </div>
    </nav>
    
  
    </>
  );
}

export default Navbar;