import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserTie, FaGlobe, FaProjectDiagram, FaFileContract, FaClipboardList, FaShoppingCart, FaBullhorn, FaChartLine, FaLaptopCode, FaCogs, FaTruck } from 'react-icons/fa';

const OrgStructureTimeline = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-12">Organizational Structure</h1>
      <VerticalTimeline lineColor="#d4af37">

        {/* GENERAL DIRECTOR */}
        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #000' }}
          iconStyle={{ background: '#d4af37', color: '#fff' }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title font-bold">General Director</h3>
        </VerticalTimelineElement>

        {/* CEO */}
        <VerticalTimelineElement
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #000' }}
          iconStyle={{ background: '#d4af37', color: '#fff' }}
          icon={<FaUserTie />}
        >
          <h3 className="vertical-timeline-element-title font-bold">CEO</h3>
        </VerticalTimelineElement>

        {/* Top-Level Divisions */}
        <VerticalTimelineElement
          iconStyle={{ background: '#d4af37', color: '#fff' }}
          icon={<FaGlobe />}
        >
          <h3 className="text-lg font-semibold">Foreign Affairs</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: '#d4af37', color: '#fff' }}
          icon={<FaProjectDiagram />}
        >
          <h3 className="text-lg font-semibold">Project Management</h3>
        </VerticalTimelineElement>

        {/* Administrative Affairs */}
        <VerticalTimelineElement
          iconStyle={{ background: '#d4af37', color: '#fff' }}
          icon={<FaClipboardList />}
        >
          <h3 className="text-lg font-semibold">Administrative Affairs</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><FaShoppingCart /> Supplies - Purchases</li>
            <li className="flex items-center gap-2"><FaBullhorn /> Public Relations</li>
            <li className="flex items-center gap-2"><FaChartLine /> Marketing</li>
          </ul>
        </VerticalTimelineElement>

        {/* Contract Management */}
        <VerticalTimelineElement
          iconStyle={{ background: '#d4af37', color: '#fff' }}
          icon={<FaFileContract />}
        >
          <h3 className="text-lg font-semibold">Contract Management</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><FaLaptopCode /> Website Management</li>
            <li className="flex items-center gap-2"><FaCogs /> Engineering and Designs</li>
          </ul>
        </VerticalTimelineElement>

        {/* Quality and Safety */}
        <VerticalTimelineElement
          iconStyle={{ background: '#d4af37', color: '#fff' }}
          icon={<FaClipboardList />}
        >
          <h3 className="text-lg font-semibold">Quality and Safety</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><FaTruck /> Movement Management</li>
          </ul>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default OrgStructureTimeline;
