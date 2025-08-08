import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaUserTie,
  FaGlobe,
  FaProjectDiagram,
  FaFileContract,
  FaClipboardList,
  FaShoppingCart,
  FaBullhorn,
  FaChartLine,
  FaLaptopCode,
  FaCogs,
  FaTruck,
} from "react-icons/fa";

const OrgStructureTimeline = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-12">Organizational Structure</h1>
      <VerticalTimeline lineColor="#d4af37">
        {/* GENERAL DIRECTOR */}
        {/* CEO – Hafiz Ur Rahman */}
        <VerticalTimelineElement
          contentStyle={{ background: "#f1f1f1", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #f1f1f1" }}
          iconStyle={{ background: "#d4af37", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Hafiz Ur Rahman</h3>
          <h4 className="text-sm text-gray-600">Chief Executive Officer (CEO)</h4>
          <ul className="mt-3 space-y-1 text-sm text-gray-800 list-disc pl-5">
            <li>Strategic Leadership</li>
            <li>Operational Oversight</li>
            <li>Client Relations</li>
          </ul>
        </VerticalTimelineElement>

        {/* General Manager – Irfan Ullah */}
        <VerticalTimelineElement
          contentStyle={{ background: "#f1f1f1", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #f1f1f1" }}
          iconStyle={{ background: "#d4af37", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Irfan Ullah</h3>
          <h4 className="text-sm text-gray-600">General Manager</h4>
          <ul className="mt-3 space-y-1 text-sm text-gray-800 list-disc pl-5">
            <li>Project Supervision</li>
            <li>Department Coordination</li>
            <li>Policy Implementation</li>
          </ul>
        </VerticalTimelineElement>

        {/* Deputy Director – Khurshed Ahmad */}
        <VerticalTimelineElement
          contentStyle={{ background: "#f1f1f1", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #f1f1f1" }}
          iconStyle={{ background: "#d4af37", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Khurshed Ahmad</h3>
          <h4 className="text-sm text-gray-600">Deputy Director</h4>
          <ul className="mt-3 space-y-1 text-sm text-gray-800 list-disc pl-5">
            <li>Project Monitoring</li>
            <li>Operational Support</li>
            <li>Team Collaboration</li>
          </ul>
        </VerticalTimelineElement>

        {/* Director – Rashid Ahmad */}
        <VerticalTimelineElement
          contentStyle={{ background: "#f1f1f1", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #f1f1f1" }}
          iconStyle={{ background: "#d4af37", color: "#fff" }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Rashid Ahmad</h3>
          <h4 className="text-sm text-gray-600">Director</h4>
          <ul className="mt-3 space-y-1 text-sm text-gray-800 list-disc pl-5">
            <li>Strategic Planning</li>
            <li>Operations Management</li>
            <li>Team Guidance</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default OrgStructureTimeline;
