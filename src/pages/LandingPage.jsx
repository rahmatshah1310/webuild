import React, { useState } from 'react'
import TopBar from '../components/layout/TopBar';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import signatureImg from "../assets/images/signature.jpg";
import aboutImg from "../assets/images/about.jpg";
import { FaCheck } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import testimonialImage from "../assets/images/testimonial.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import userImg from "../assets/images/user.jpg";
import { BiCalendarAlt, BiArrowFromRight } from "react-icons/bi";
import { blogPosts, categories, completedProjects, projects, services, slides, teamMembers, testimonials } from '../constants/data.jsx';
import { GoArrowRight } from "react-icons/go";
import ServiceModal from '../components/modal/ServiceModal.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import OrganizationalStructure from '../components/sections/OrganizationStructure.jsx';




const LandingPage = () => {
    const [activeFilter, setActiveFilter] = useState("*");
    const [selectedService, setSelectedService] = useState(null);
    const previewProjects = completedProjects.slice(0, 8);



    return (
        <div>
            {/* <!-- Carousel Start --> */}
            <section className="relative w-full" id='home'>
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    loop
                    className="w-full h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                                <img
                                    src={slide.image}
                                    alt="Slide"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <div className="text-center text-white px-4 max-w-3xl flex flex-col items-center justify-center space-y-6">
                                        <div className="text-5xl text-[#FD5D14]">{slide.icon}</div>
                                        <h1 className="text-2xl sm:text-6xl font-extrabold uppercase">
                                            {slide.heading}
                                        </h1>
                                        <Link
                                            to={slide.buttonLink}
                                            className="inline-block bg-[#FD5D14] text-white px-10 py-3 text-lg font-medium transition"
                                        >
                                            {slide.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            {/* <!-- Carousel End --> */}


            {/* <!-- About Start --> */}
            <section className="w-full py-12 px-5" id='about'>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Content */}
                    <div className="lg:w-7/12 w-full">
                        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase mb-4 text-[#040F28]">
                            We are <span className="text-[#FD5D14]">the Leader</span> in Construction Industry
                        </h1>
                        <h4 className="uppercase text-lg mb-3 text-gray-600">
                            Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum tempor sit diam amet diam et eos labore
                        </h4>
                        <p className="mb-4 text-gray-700">
                            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit
                            consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed
                            stet no labore lorem sit. Sanctus clita duo justo et tempor
                        </p>

                        {/* Features */}
                        <div className="flex py-2 gap-x-10">
                            {/* Column 1 */}
                            <div className="sm:w-1/2 w-full mb-2">
                                <p className="font-semibold mb-2 flex items-center">
                                    <FaCheck className="text-primary mr-3" /> Perfect Planning
                                </p>
                                <p className="font-semibold mb-2 flex items-center">
                                    <FaCheck className="text-primary mr-3" /> Professional Workers
                                </p>
                                <p className="font-semibold mb-2 flex items-center">
                                    <FaCheck className="text-primary mr-3" /> First Working Process
                                </p>
                            </div>

                            {/* Column 2 */}
                            <div className="sm:w-1/2 w-full mb-2">
                                <p className="font-semibold mb-2 flex items-center">
                                    <FaCheck className="text-primary mr-3" /> Perfect Planning
                                </p>
                                <p className="font-semibold mb-2 flex items-center">
                                    <FaCheck className="text-primary mr-3" /> Professional Workers
                                </p>
                                <p className="font-semibold mb-2 flex items-center">
                                    <FaCheck className="text-primary mr-3" /> First Working Process
                                </p>
                            </div>
                        </div>

                        <p className="mb-4 text-gray-700">
                            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit
                            consetetur sit. Aliquyam diam amet diam et eos labore
                        </p>

                        <img src={signatureImg} alt="Signature" className="w-auto h-20 object-contain" />
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-5/12 w-full min-h-[300px] h-[300px] sm:h-[400px] relative">
                        <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                            <img
                                src={aboutImg}
                                alt="About"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About End --> */}


            {/* <!-- Services Start --> */}
            <section className="bg-gray-100 py-16 px-4" id="service">
                {/* Heading */}
                <div className="max-w-xl mx-auto text-center mb-10">
                    <h1 className="text-4xl sm:text-3xl font-extrabold uppercase mb-4 text-[#040F28]">
                        <span className="text-[#FD5D14]">Construction </span>and{" "}
                        <span className="text-[#FD5D14]">renovation</span> of buildings and roads and underground services.
                    </h1>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white text-[#FD5D14] rounded-md flex flex-col items-center text-center shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="px-4 flex flex-col items-center">
                                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-150 rounded-full bg-white p-4">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-semibold uppercase mb-3">{service.title}</h4>
                                <p className="text-gray-600 mb-4">{service.exp}</p>
                                <button
                                    onClick={() => setSelectedService(service)}
                                    className="inline-flex items-center gap-1 text-[#FD5D14] font-bold uppercase pb-5 hover:underline cursor-pointer"
                                >
                                    Read More <GoArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal Component */}
                <ServiceModal
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                />
            </section>
            {/* <!-- Services End --> */}

<OrganizationalStructure/>
            {/* <!-- Appointment Start --> */}
            <ContactSection />
            {/* <!-- Appointment End --> */}


            {/* <!-- Portfolio Start --> */}
            <section className="w-full bg-gray-100 py-16 px-5">
                {/* Heading */}
                <div className="max-w-xl mx-auto text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold uppercase mb-4 text-[#040F28]">
                        Some Of Our <span className="text-[#FD5D14]">Popular</span> Dream Projects
                    </h1>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {previewProjects.map((project, index) => (
                        <div key={index} className="relative group overflow-hidden rounded shadow-md">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[260px] object-cover transition-transform group-hover:scale-105 duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition p-4">
                                <div className="bg-white p-3 shadow rounded mb-2">
                                    <p className="text-lg font-bold uppercase">{project.title}</p>
                                    <span className="text-sm text-gray-600 flex items-center mt-1">
                                        <FaMapMarkerAlt className="text-primary mr-2" />
                                        {project.location}
                                    </span>
                                </div>
                            </div>
                            <Link
                                to={project.image}
                                target="_blank"
                                rel="noreferrer"
                                className="absolute right-3 top-3 bg-primary p-2 rounded-full"
                            >
                                <BiPlus className="text-white text-xl" />
                            </Link>
                        </div>
                    ))}
                </div>
                {completedProjects.length > 8 && (
                    <div className="text-center mt-10">
                        <Link
                            to="/projects"
                            className="inline-block bg-[#FD5D14] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#e14e0e] transition"
                        >
                            View More Projects
                        </Link>
                    </div>
                )}
            </section>
            {/* <!-- Portfolio End --> */}


            {/* <!-- Team Start --> */}
            <section className="w-full bg-white py-16 px-5">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h1 className="text-5xl sm:text-5xl font-bold uppercase mb-4 text-[#040F28]">
                        We Are <span className="text-[#FD5D14]">Professional & Expert</span> Workers
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col bg-gray-100 rounded-md overflow-hidden shadow-md">
                            {/* Image Section */}
                            <div className='h-[390px]'>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Info Section */}
                            <div className="p-4 text-center">
                                <h4 className="text-xl font-semibold uppercase">{member.name}</h4>
                                <span className="text-sm text-gray-500">{member.role}</span>
                            </div>
                        </div>
                    ))}
                </div>


            </section>
            {/* <!-- Team End --> */}


            {/* <!-- Testimonial Start --> */}
            {/* <section className="bg-gray-100 py-16 px-5">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h1 className="text-6xl font-bold uppercase mb-4 text-[#040F28]">
                        What Our <span className="text-[#FD5D14]">Happy Clients</span> Say!!!
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto">
                    <div className="hidden lg:block w-full lg:w-1/3">
                        <img
                            src={testimonialImage}
                            alt="Testimonial"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-2/3 bg-white p-6 rounded shadow">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            loop
                            className="testimonial-swiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/3">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover bg-gray-100 p-3"
                                            />
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <h4 className="text-xl font-bold uppercase mb-0">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-600 mb-4">{testimonial.profession}</p>
                                            <p className="text-lg text-gray-700">
                                                <FaQuoteLeft className="inline-block text-primary text-2xl mr-2" />
                                                {testimonial.text}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section> */}
            {/* <!-- Testimonial End --> */}


            {/* <!-- Blog Start --> */}
            {/* <section className="w-full bg-white py-16 px-6 ">
                <div className="max-w-xl mx-auto text-center mb-10">
                    <h1 className="text-3xl sm:text-5xl font-extrabold uppercase mb-4 text-[#040F28]">
                        Latest <span className="text-[#FD5D14]">Articles</span> From Our Blog Post
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, idx) => (
                        <div key={idx} className="bg-gray-100 shadow-sm">
                            <img src={post.image} alt={post.title} className="w-full h-auto" />

                            <div className="p-4">
                                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <img
                                            src={userImg}
                                            alt={post.author}
                                            className="w-[35px] h-[35px] rounded-full mr-2"
                                        />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-primary">
                                        <BiCalendarAlt />
                                        <span>{post.date}</span>
                                    </div>
                                </div>

                                <h4 className="text-xl uppercase font-semibold mb-3">{post.title}</h4>

                                <Link
                                    to="#"
                                    className="inline-flex items-center gap-1 text-[#FD5D14] font-bold uppercase"
                                >
                                    Read More <GoArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
            {/* <!-- Blog End --> */}
        </div>
    )
}

export default LandingPage;