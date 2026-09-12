import React from 'react'
import { GrShieldSecurity } from 'react-icons/gr'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Services_OF_UI = () => {
return (
<>


    <div className='mt-10 mb-200'>
        <div className="container">
            <div className='flex items-center justify-between'>

                <div className='flex items-center leading-6 gap-2'>
                    <TbTruckDelivery className='text-5xl ' />
                    <div>
                        <h3 className='text-[24px] font-semibold text-[#333333] font-main'>Free Delivery</h3>
                        <p className='mt-[6px] font-main text-[16px] font-normal text-[#333333]'>Lorem ipsum dolor sit
                            amet.</p>
                    </div>


                </div>


                <div className='flex items-center leading-6 gap-2'>
                    <MdOutlineSupportAgent className='text-5xl ' />
                    <div>
                        <h3 className='text-[24px] font-semibold text-[#333333] font-main'>Support 24/7</h3>
                        <p className='mt-[6px] font-main text-[16px] font-normal text-[#333333]'>Lorem ipsum dolor sit
                            amet.</p>
                    </div>


                </div>


                <div className='flex items-center leading-6 gap-2'>
                    <GrShieldSecurity className='text-5xl ' />
                    <div>
                        <h3 className='text-[24px] font-semibold text-[#333333] font-main'>100% Authentic</h3>
                        <p className='mt-[6px] font-main text-[16px] font-normal text-[#333333]'>Lorem ipsum dolor sit
                            amet.</p>
                    </div>


                </div>


            </div>
        </div>
    </div>

</>
)
}

export default Services_OF_UI