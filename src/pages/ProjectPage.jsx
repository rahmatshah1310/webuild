import { completedProjects } from "../constants/data";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProjectPage = () => {
    return (
        <div>
<h1 className="text-center p-6 text-black uppercase text-3xl font-bold">
  Our Completed <span className="text-[#FD5D14]">Projects</span>
</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 my-4">
            {completedProjects
            .map((project, index) => (
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
            </div>
        ))}
        </div>
        </div>
    )
}
export default ProjectPage;