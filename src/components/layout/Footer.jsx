import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaAngleRight } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <>
      {/* Top Footer */}
      <div className="bg-[#040F28] text-white/80 py-16 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <img src="/Logo.png" alt="Logo" className="w-15 h-15 object-cover scale-100" />
              <h1 className="text-white font-bold uppercase flex items-center gap-2 text-xl md:text-2xl">
                {/* <BsBuildings className="text-[#FD5D14] text-4xl" /> */}
                Safe Leaders Innovation
              </h1>
            </a>
            <p className="mb-4 text-white/70 leading-relaxed">
              Safe Leaders Innovation is a dynamic construction firm delivering quality through innovation, safety, and precision.
            </p>
            <div className="space-y-2 text-white/80">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> RCCD7420 RIYADH, Kingdom of Saudi Arabia
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +966 534383766‬
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> hafeez218@gmail.com
              </p>
            </div>

            <div className="flex mt-4 gap-2">
              {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <a key={index} href="#" className="bg-[#FD5D14] p-3 rounded-full hover:opacity-90 transition">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg uppercase mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-white/70">
                {["Home", "About Us", "Our Services", "Meet The Team", "Contact Us"].map((item, index) => (
                  <a href="#" key={index} className="hover:text-white flex items-center gap-2">
                    <FaAngleRight /> {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-span-2">
              <h4 className="text-white text-lg uppercase mb-4">Newsletter</h4>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input type="email" className="flex-1 p-4 text-[#040F28] bg-white focus:outline-none" placeholder="Your Email Address" />
                <Button className="bg-[#FD5D14] text-white px-6 py-4 sm:ml-2 hover:opacity-90 transition">Sign Up</Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#040F28] text-white/80 border-t border-[#FD5D14]">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start px-5 py-4 gap-3">
          <p className="mb-0">
            &copy;{" "}
            <a className="text-[#FD5D14] font-semibold" href="#">
              Safe Leaders Innovation
            </a>
            . All Rights Reserved.
          </p>
          <div className="text-sm">
            <p>
              Developed by:
              <a className="text-[#FD5D14] font-semibold" target="_blank" rel="noopener noreferrer" href="https://www.octetec.com">
                www.octetec.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
