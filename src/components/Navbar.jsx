import { Link } from "react-router-dom";
import logoIMG from"../assets/logo.png";

function Navbar() {
return (
<>
    <nav id="Navbar ">
        <div className="container">
            <div className="Nav_Menu pt-[43px]  pb-[38px] flex justify-between items-center "> 

                <Link to='/' className="logo w-[127px]">
                <img src={logoIMG} alt="Brand logo" />
                </Link>

                <div className="nav_Items flex gap-[70px] ">

                    <Link to="/" className="relative inline-block text-[14px] font-semibold font-main text-[#333333]
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:w-full after:h-[2px] after:bg-[#333333]
             after:origin-left after:scale-x-0
             after:transition-transform after:duration-300
             hover:after:scale-x-100">
                    Home
                    </Link>

                    <Link to="/About" className="relative inline-block text-[14px] font-semibold font-main text-[#333333]
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:w-full after:h-[2px] after:bg-[#333333]
             after:origin-left after:scale-x-0
             after:transition-transform after:duration-300
             hover:after:scale-x-100">
                    Services
                    </Link>

                    <Link to="#" className="relative inline-block text-[14px] font-semibold font-main text-[#333333]
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:w-full after:h-[2px] after:bg-[#333333]
             after:origin-left after:scale-x-0
             after:transition-transform after:duration-300
             hover:after:scale-x-100">
                    Doctors
                    </Link>


                    <Link to="#" className="relative inline-block text-[14px] font-semibold font-main text-[#333333]
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:w-full after:h-[2px] after:bg-[#333333]
             after:origin-left after:scale-x-0
             after:transition-transform after:duration-300
             hover:after:scale-x-100">
                    Products
                    </Link>


                    <Link to="#" className="relative inline-block text-[14px] font-semibold font-main text-[#333333]
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:w-full after:h-[2px] after:bg-[#333333]
             after:origin-left after:scale-x-0
             after:transition-transform after:duration-300
             hover:after:scale-x-100">
                    Gallery
                    </Link>
                



                </div>




            </div>


        </div>
    </nav>


</>
);
}

export default Navbar;