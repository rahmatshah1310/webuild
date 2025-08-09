import testimonialImage1 from "../assets/images/testimonial-1.jpg";
import testimonialImage2 from "../assets/images/testimonial-2.jpg";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
// import team1 from "../assets/images/team-1.jpg";
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
// import hafizurrahman from "../assets/images/hafizurahman.jpg";
import irfanullah from "../assets/images/irfanullah.jpg";
import khurshid from "../assets/images/khurshid.jpg";
// import rashidahmad from "../assets/images/rashidahmad.jpg";

import { FaHome, FaHouseDamage, FaRoad, FaTools, FaBuilding, FaHardHat, FaDraftingCompass, FaFireExtinguisher } from "react-icons/fa";

export const navLinks = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Service", hash: "#service" },
  { label: "Contact", hash: "#contact" },
];

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
    id: 1,
    name: "Hafiz Ur Rahman",
    role: "CEO & Founder",
    // image: hafizurrahman,
    bio: `As Chief Executive Officer of Safe Leaders Innovation Construction Company, Hafiz Ur Rahman provides visionary leadership and strategic direction, guiding the organization towards sustainable growth and industry excellence. With extensive experience in the construction sector, he is committed to delivering innovative solutions that combine quality, safety, and efficiency.

His leadership philosophy focuses on building long-term client relationships, expanding the company’s capabilities, and positioning it as a market leader. Beyond overseeing operations, he actively shapes the company’s mission, values, and culture. By fostering a high-performance environment and encouraging innovation at all levels, he ensures the company remains at the forefront of industry advancements.

His unwavering dedication to excellence, integrity, and customer satisfaction continues to drive the company’s success and strengthen its reputation as a trusted construction partner.`,
  },
  {
    id: 2,
    name: "Irfan Ullah",
    role: "General Manager",
    image: irfanullah,
    bio: `As General Manager of Safe Leaders Innovation Construction Company, Irfan Ullah provides strategic leadership and oversees the company’s operational and project management functions. With a proven track record in delivering complex construction projects, he ensures that every undertaking reflects the company’s commitment to quality, safety, and innovation.

His strategic vision guides the organization in achieving sustainable growth, strengthening client partnerships, and maintaining a competitive edge in the industry. He fosters a professional work environment built on teamwork, integrity, and continuous improvement. By aligning operational processes with industry best practices, he ensures efficiency and excellence at every stage.`,
  },
  {
    id: 3,
    name: "Khurshed Ahmad",
    role: "Deputy Director",
    image: khurshid,
    bio: `As Deputy Director at Safe Leaders Innovation Construction Company, Khurshed Ahmad plays a pivotal role in overseeing project execution, operational planning, and quality assurance. Working closely with the General Manager and senior leadership, he ensures that projects are delivered on schedule, within budget, and in full compliance with safety and quality standards.

His expertise in operational oversight and process optimization significantly contributes to the company’s ability to consistently exceed client expectations. By fostering a collaborative and efficient work culture, he empowers teams to perform at their highest potential while implementing innovative solutions to address project challenges.`,
  },
  {
    id: 4,
    name: "Rashid Ahmad",
    role: "Director",
    // image: rashidahmad,
    bio: `As Director of Safe Leaders Innovation Construction Company, Rashid Ahmad plays a central role in steering the organization’s strategic initiatives and overseeing key operational functions. With a strong background in management and a deep understanding of the construction industry, he is instrumental in driving the company’s mission to deliver projects that embody quality, safety, and innovation.

He fosters a culture of accountability, collaboration, and continuous improvement across all departments. By promoting efficient workflows and supporting innovation, he enables teams to deliver exceptional results while meeting project timelines and budgets. His commitment to operational excellence and client satisfaction reinforces the company’s position as a trusted and forward-thinking industry leader.`,
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
    title: "General Constructions",
    icon: <FaBuilding className="text-4xl text-primary" />,
    img: service1,
    para: "Comprehensive construction solutions across residential, commercial, and industrial sectors.",
    exp: "Our general construction services cover a wide range of projects, including residential, commercial, industrial, and public infrastructure. We manage every phase — from initial planning and design to construction and final delivery — ensuring projects are completed to the highest standards of quality and safety. By leveraging modern techniques and experienced teams, we are able to deliver functional, durable, and aesthetically appealing results tailored to client needs. At Safe Leaders Innovation Construction Company, we pride ourselves on our ability to handle diverse construction challenges. We coordinate with architects, engineers, and stakeholders to ensure timelines, budgets, and design specifications are met without compromise. This collaborative approach allows us to deliver projects that not only meet expectations but also stand the test of time.",
  },
  {
    title: "Repair and Maintenance",
    icon: <FaTools className="text-4xl text-primary" />,
    img: service2,
    para: "Routine and emergency repairs, preventive maintenance, and asset longevity solutions.",
    exp: "We provide comprehensive repair and maintenance services to keep structures, systems, and facilities in optimal condition. Our work includes addressing structural issues, replacing damaged components, and carrying out preventive maintenance to minimize downtime and extend the lifespan of assets. Our team operates with efficiency and precision, using quality materials and tools to ensure repairs are both durable and cost-effective. Whether it’s routine upkeep or urgent repairs, we deliver solutions that maintain safety, performance, and value over the long term.",
  },
  {
    title: "Drilling Services",
    icon: <GiTrenchSpade className="text-4xl text-primary" />,
    img: service3,
    para: "Precision drilling for construction, utilities, and infrastructure development.",
    exp: "Our drilling services are designed to support a variety of construction, utility, and infrastructure projects. Using advanced drilling equipment and techniques, we ensure precise results for applications such as foundation work, utility installation, and site preparation. Safety and accuracy are at the forefront of our drilling operations. We assess each site carefully, apply the right methodologies, and adhere to industry standards to deliver efficient and reliable results for every project.",
  },
  {
    title: "Public Sports Structures",
    icon: <FaHome className="text-4xl text-primary" />,
    img: service4,
    para: "Design and construction of stadiums, gyms, and recreational sports facilities.",
    exp: "We specialize in designing and constructing public sports facilities that are safe, functional, and built to inspire community engagement. From stadiums and arenas to playgrounds and recreational courts, we ensure every project meets the highest standards of performance and accessibility. By combining durable materials with innovative design, we create sports structures that enhance user experience and encourage active lifestyles. Our projects are tailored to meet the needs of local communities while maintaining compliance with safety and regulatory requirements.",
  },
  {
    title: "Marine Traffic Aids",
    icon: <FaDraftingCompass className="text-4xl text-primary" />,
    img: service5,
    para: "Installation and maintenance of marine traffic lights and navigational aids.",
    exp: "We provide specialized installation and maintenance of marine traffic lights and navigational aids to support safe and efficient maritime operations. Our solutions are designed to meet the unique demands of coastal and port environments, ensuring reliability under challenging weather and water conditions. With expertise in marine safety systems, we deliver projects that help vessels navigate safely, reduce operational risks, and comply with maritime regulations. Our commitment is to provide durable, high-performance systems that enhance maritime infrastructure.",
  },
  {
    title: "Demolition & Wrecking",
    icon: <FaHouseDamage className="text-4xl text-primary" />,
    img: service6,
    para: "Controlled demolition of structures with safety and environmental considerations.",
    exp: "Our demolition services are executed with precision, safety, and environmental responsibility. We handle projects ranging from small structures to large-scale industrial buildings, using controlled methods to minimize disruption and ensure safety. We also prioritize responsible waste management, recycling materials where possible, and complying with all environmental regulations. Our approach combines efficiency with care, making sure sites are prepared for future development.",
  },
  {
    title: "Landfill Services",
    icon: <FaHardHat className="text-4xl text-primary" />,
    img: service1,
    para: "Waste disposal, site preparation, and landfill management services.",
    exp: "We offer professional landfill development and management services, ensuring safe waste disposal in compliance with environmental regulations. Our work includes site preparation, containment system installation, and ongoing operational support. By implementing advanced waste management techniques, we help minimize environmental impact while maximizing landfill efficiency. Our solutions are designed for long-term sustainability and community safety.",
  },
  {
    title: "Electrical Wiring",
    icon: <FaTools className="text-4xl text-primary" />,
    img: service2,
    para: "Electrical installations, upgrades, and maintenance for all property types.",
    exp: "Our electrical wiring services provide safe, reliable, and efficient power distribution for residential, commercial, and industrial projects. We handle new installations, upgrades, and repairs, ensuring compliance with electrical codes and standards. With skilled electricians and quality materials, we deliver wiring solutions that support both current needs and future expansion, ensuring optimal performance and safety.",
  },
  {
    title: "Telecommunications Wiring",
    icon: <FaDraftingCompass className="text-4xl text-primary" />,
    img: service3,
    para: "Structured cabling and wiring for telecom and network systems.",
    exp: "We provide structured telecommunications wiring solutions that ensure clear, reliable, and high-speed communication. Our services support phone lines, fiber optics, and data connections for businesses and residential properties. By using industry-standard practices and quality components, we create networks that deliver consistent performance and are easy to maintain and expand as technology evolves.",
  },
  {
    title: "Network Wiring",
    icon: <FaTools className="text-4xl text-primary" />,
    img: service4,
    para: "Installation and maintenance of data network wiring for commercial infrastructures.",
    exp: "Our network wiring services are tailored for efficient and secure data transmission in offices, institutions, and industrial facilities. We design and install structured cabling systems that support robust and scalable network infrastructures. Whether for internet, security systems, or integrated communication platforms, our wiring solutions are designed for maximum reliability, speed, and ease of maintenance.",
  },
  {
    title: "Installation & Maintenance",
    icon: <FaHardHat className="text-4xl text-primary" />,
    img: service5,
    para: "End-to-end setup and upkeep of construction, electrical, and infrastructure systems.",
    exp: "We provide professional installation and maintenance services across various systems, including mechanical, electrical, and communication infrastructures. Every installation is carried out with precision to ensure optimal performance from day one. Our maintenance services are proactive, addressing potential issues before they become costly problems. By ensuring systems remain in peak condition, we help our clients reduce downtime and extend the lifespan of their investments.",
  },
  {
    title: "Civil Defence Work",
    icon: <FaFireExtinguisher className="text-4xl text-primary" />,
    img: service6,
    para: "Fire alarm and fire fighting system installation and maintenance for safety compliance.",
    exp: "Our civil defence services focus on the installation, testing, and maintenance of fire alarm and fire fighting systems to ensure maximum safety and compliance with local regulations. We design tailored solutions for residential, commercial, and industrial properties, integrating advanced detection technologies and effective suppression systems. Our skilled team ensures that every installation meets strict safety standards and operates reliably during emergencies, helping protect lives, assets, and infrastructure.",
  },
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

export const completedProjects = [
  { id: 1, image: service1, title: "Workers' housing project", location: "Dammam", link: "https://example.com" },
  { id: 2, image: service2, title: "Infrastructure services project with the portal", location: "Asir region", link: "https://example.com" },
  { id: 3, image: service3, title: "Establishing a warehouse for needed equipment", location: "Marat Governorate", link: "https://example.com" },
  { id: 4, image: service4, title: "Workshop rehabilitation project (2000 m²)", location: "Riyadh", link: "https://example.com" },
  { id: 5, image: service5, title: "Sales building completion project", location: "Al-Jouf", link: "https://example.com" },
  { id: 6, image: service6, title: "Employee housing restoration (5 buildings)", location: "Riyadh", link: "https://example.com" },
  { id: 7, image: service1, title: "Restoration and expansion of workers' housing", location: "Asir", link: "https://example.com" },
  { id: 8, image: service2, title: "Concrete structure treatment project", location: "Wadi Al-Dawasir", link: "https://example.com" },
  { id: 9, image: service3, title: "Khamis Hills (4 buildings, 7 floors)", location: "Ministry of Housing", link: "https://example.com" },
  { id: 10, image: service4, title: "Metro project", location: "North & South Riyadh", link: "https://example.com" },
  { id: 11, image: service5, title: "Asphalt works", location: "Al-Jouf region", link: "https://example.com" },
  { id: 12, image: service6, title: "33 KV underground Cable", location: "Zahrat Laban", link: "https://example.com" },
  { id: 13, image: service1, title: "132 Kv underground Cable HP5", location: "Riyadh", link: "https://example.com" },
  { id: 14, image: service2, title: "Diversion of 132Kv DC OHTL lines", location: "Riyadh (PP-8)", link: "https://example.com" },
  { id: 15, image: service3, title: "Western road prep for Aramco refinery", location: "Jeddah Islamic Port", link: "https://example.com" },
  { id: 16, image: service4, title: "Workers' kitchen project", location: "Khamis Mushayt", link: "https://example.com" },
  { id: 17, image: service5, title: "Supply/install gas ovens & heaters", location: "Khamis Mushait", link: "https://example.com" },
  { id: 18, image: service6, title: "Oxygen depot works project", location: "Unknown", link: "https://example.com" },
  { id: 19, image: service1, title: "Car maintenance center construction", location: "Al-Rimal, Riyadh", link: "https://example.com" },
  { id: 20, image: service2, title: "Celebration hall establishment project", location: "Hittin, Riyadh", link: "https://example.com" },
  { id: 21, image: service3, title: "TS COMPLEX PROJECT", location: "Arqa", link: "https://example.com" },
  { id: 22, image: service4, title: "Hazardous materials warehouse", location: "Unknown", link: "https://example.com" },
  { id: 23, image: service5, title: "Water tanks implementation", location: "Khurais complex", link: "https://example.com" },
  { id: 24, image: service6, title: "Fencing, sidewalks, security rooms", location: "Unknown", link: "https://example.com" },
  { id: 25, image: service1, title: "Private Lounge Construction", location: "Unknown", link: "https://example.com" },
  { id: 26, image: service2, title: "Aluminum, glass door works", location: "Savola Bldg, Jeddah", link: "https://example.com" },
  { id: 27, image: service3, title: "Residential Villa Restoration", location: "Al Sulimania, Riyadh", link: "https://example.com" },
  { id: 28, image: service4, title: "Al Khair Road Exhibition", location: "Riyadh", link: "https://example.com" },
  { id: 29, image: service5, title: "Stainless Steel Handrail Works", location: "11-story building", link: "https://example.com" },
  { id: 30, image: service6, title: "Cladding & Secret Glass Works", location: "Granada, Riyadh", link: "https://example.com" },
  { id: 31, image: service1, title: "Exhibition Facades Project", location: "Al Nuzha, Riyadh", link: "https://example.com" },
  { id: 32, image: service2, title: "Private Villa Construction", location: "Al Ward, Jeddah", link: "https://example.com" },
  { id: 33, image: service3, title: "3 Palaces - Private Residence", location: "Hatteen, Riyadh", link: "https://example.com" },
  { id: 34, image: service4, title: "Masharef Hills - 8 Villas", location: "Unknown", link: "https://example.com" },
  { id: 35, image: service5, title: "Labor Housing Project - 5 Buildings", location: "Toowaiq, Riyadh", link: "https://example.com" },
  { id: 36, image: service6, title: "Jeddah Villas Project", location: "30 iron/glass door works", link: "https://example.com" },
];
