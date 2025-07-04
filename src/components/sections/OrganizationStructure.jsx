import React from "react";

const OrganizationalStructure = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 uppercase">
        Organizational Structure
      </h2>

      {/* Top Section: General Director & CEO */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="bg-black text-yellow-400 px-6 py-2 rounded-full font-bold uppercase">General Director</div>
        <div className="bg-black text-yellow-400 px-6 py-2 rounded-full font-bold uppercase">CEO</div>
      </div>

      {/* Mid Level */}
      <div className="flex justify-center flex-wrap gap-4 text-sm sm:text-base text-center mb-8">
        <span className="text-gray-700 px-3 py-1">Foreign Affairs</span>
        <span className="text-gray-700 px-3 py-1">Project Management</span>
        <span className="text-gray-700 px-3 py-1">Administrative Affairs</span>
        <span className="text-gray-700 px-3 py-1">Contract Management</span>
        <span className="text-gray-700 px-3 py-1">Quality and Safety</span>
      </div>

      {/* Bottom Section (Sub-departments) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          "Supplies - Purchases",
          "Public Relations",
          "Marketing",
          "Website Management",
          "Engineering and Designs",
          "Movement Management",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#FD5D14] text-white px-4 py-3 rounded-full text-center font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizationalStructure;
