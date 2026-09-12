import React from 'react'
import Banner_IMG from '../assets/banner.jpg'
import { Link } from 'react-router'

const Banner = () => {
return (
<>

    <div id="Banner">
        <div className='banner_image relative'>
            <img src={Banner_IMG} alt="Banner_IMG" className='w-full h-screen' />
        </div>
        <div className="container">
            <div className=" absolute  mt-[-750px]  ml-[900px] banner_All_Text pt-[40px] pb-[38px] pl-[27px]  pr-[70px] bg-[#DFE9F4]">
                <p className='text-[16px] font-semibold font-main text-[#333333]  tracking-[3px]'>New Arrival</p>

                <div className='w-[421px] '>
                    <h1 className='mt-5  leading-[65px] font-main text-[52px] font-bold text-[#054C73]'>Discover Our New
                        Collection</h1>
                </div>

                <div className='w-[546px] '>
                    <h1 className='mt-5  leading-[39px] font-main text-[18px] font-medium text-[#333333]'>Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h1>
                </div>
                <div className='mt-[55px] '>
                <Link className=' font-main text-[16px] font-bold text-white py-[25px] px-[72px] bg-[#054C73] rounded-[50px] hover:bg-red-400 hover:duration-400 hover:text-black ' >BUY Now</Link>

                </div>
            </div>
        </div>
    </div>












</>
)
}

export default Banner