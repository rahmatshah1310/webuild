import testimonialImage1 from "../assets/images/testimonial-1.jpg";
import testimonialImage2 from "../assets/images/testimonial-2.jpg";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio-6.jpg";
import service1 from "../assets/images/service-1.jpg";
import service2 from "../assets/images/service-2.jpg";
import service3 from "../assets/images/service-3.jpg";
import service4 from "../assets/images/service-4.jpg";
import service5 from "../assets/images/service-5.jpg";
import service6 from "../assets/images/service-6.jpg";
import carousel1 from "../assets/images/carousel-1.jpg";
import carousel2 from "../assets/images/carousel-2.jpg";
import { GiTrenchSpade } from "react-icons/gi";
import { FaHome, FaHouseDamage, FaRoad, FaTools, FaBuilding,FaHardHat ,
    FaDraftingCompass, } from "react-icons/fa";
export const blogPosts = [
    {
        title: "Rebum diam clita lorem erat magna est erat",
        author: "John Doe",
        date: "01 Jan, 2045",
        image: blog1,
    },
    {
        title: "Rebum diam clita lorem erat magna est erat",
        author: "John Doe",
        date: "01 Jan, 2045",
        image: blog2,
    },
    {
        title: "Rebum diam clita lorem erat magna est erat",
        author: "John Doe",
        date: "01 Jan, 2045",
        image: blog3,
    },
];


export const testimonials = [
    {
        name: "Client Name",
        profession: "Profession",
        image: testimonialImage1,
        text: `Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. 
    At lorem lorem magna ut labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.`,
    },
    {
        name: "Client Name",
        profession: "Profession",
        image: testimonialImage2,
        text: `Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. 
    At lorem lorem magna ut labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.`,
    },
];



export const teamMembers = [
    {
        name: "Adam Phillips",
        role: "CEO & Founder",
        image: team1,
    },
    {
        name: "Dylan Adams",
        role: "Civil Engineer",
        image: team2,
    },
    {
        name: "Jhon Doe",
        role: "Interior Designer",
        image: team3,
    },
    {
        name: "Josh Dunn",
        role: "Painter",
        image: team4,
    },
];


export const categories = [
    { name: "All", filter: "*" },
    { name: "Construction", filter: "construction" },
    { name: "Renovation", filter: "renovation" },
];

export const projects = [
    { image: portfolio1, category: "construction" },
    { image: portfolio2, category: "renovation" },
    { image: portfolio3, category: "construction" },
    { image: portfolio4, category: "renovation" },
    { image: portfolio5, category: "construction" },
    { image: portfolio6, category: "renovation" },
];
export const services = [
    {
        title: "Building Construction",
        icon: <FaBuilding className="text-4xl text-primary" />,
        img: service1,
        exp:"Full-scale construction of residential, commercial, and industrial buildings from foundation to completion"
    },
    {
        title: "Road Infrastructure",
        icon: <FaRoad className="text-4xl text-primary" />,  
        img: service2,
        exp:"Construction and development of roads, highways, bridges, and transportation networks"
    },
    {
        title: "Structural Renovation",
        icon: <FaHouseDamage className="text-4xl text-primary" />,  // Note: Requires FaHouseDamage import
        img: service3,
        exp:"Upgrading and modernizing existing structures including load-bearing modifications and extensions"
    },
    {
        title: "Underground Utilities",
        icon: <GiTrenchSpade className="text-4xl text-primary" />,  // Note: Requires FaTrench import
        img: service4,
        exp:"Installation and maintenance of subsurface systems including pipelines, cabling, and drainage systems"
    },
    {
        title: "Civil Engineering",
        icon: <FaDraftingCompass className="text-4xl text-primary" />,
        img: service5,
        exp:" Technical design and planning of infrastructure projects including site analysis and structural calculations"
    },
    {
        title: "Pavement Maintenance",
        icon: <FaHardHat className="text-4xl text-primary" />,
        img: service6,
        exp:"Repair and upkeep of road surfaces, pothole fixing, asphalt restoration, and surface durability enhancement."
    }
];


export const slides = [
    {
        image: carousel1,
        icon: <FaHome className="text-primary text-6xl mb-4 hidden sm:block" />,
        heading: "Build Your Dream House With Us",
        buttonText: "Get A Quote",
        buttonLink: "#",
    },
    {
        image: carousel2,
        icon: <FaTools className="text-primary text-6xl mb-4 hidden sm:block" />,
        heading: "We Are Trusted For Your Project",
        buttonText: "Contact Us",
        buttonLink: "#",
    },
];
