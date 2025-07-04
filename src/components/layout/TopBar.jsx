import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { CiLocationOn } from "react-icons/ci";
import { SlEnvelopeOpen } from "react-icons/sl";


const TopBar = () => {
  return (
    <div className="hidden lg:block px-5 w-full">
      <div className="flex flex-wrap -mx-5">
        {/* Office Info */}
        <div className="lg:w-1/3 px-5 py-3 text-center">
          <div className="inline-flex items-center">
            <CiLocationOn className="text-3xl text-[#FD5D14] me-3" />
            <div className="text-left">
              <h6 className="uppercase font-bold">Our Office</h6>
              <span>RCCD7420 RIYADH, Kingdom of Saudi Arabia</span>
            </div>
          </div>
        </div>

        {/* Email Info */}
        <div className="lg:w-1/3 px-5 py-3 text-center border-x">
          <div className="inline-flex items-center">
            <SlEnvelopeOpen className="text-3xl text-[#FD5D14] me-3" />
            <div className="text-left">
              <h6 className="uppercase font-bold">Email Us</h6>
              <span>hafeez218@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Call Info */}
        <div className="lg:w-1/3 px-5 py-3 text-center">
          <div className="inline-flex items-center">
            <FaPhoneAlt className="text-3xl text-[#FD5D14] me-3" />
            <div className="text-left">
              <h6 className="uppercase font-bold">Call Us</h6>
              <span>+966 534383766</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
