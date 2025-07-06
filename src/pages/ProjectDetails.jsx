import { useParams, useNavigate } from "react-router-dom";
import { completedProjects } from "../constants/data";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = completedProjects.find(p => p.id === parseInt(id));

  if (!project) return <div className="text-center py-10">Project not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-6 rounded-md" />
      
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.location}</p>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-[#FD5D14] text-white px-6 py-2 rounded shadow hover:bg-[#e14e0e] transition duration-200"
      >
        ← Go Back
      </button>
    </div>
  );
};

export default ProjectDetailPage;
