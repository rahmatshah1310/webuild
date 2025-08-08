import Modal from "react-modal";
import Button from "../ui/Button";

Modal.setAppElement("#root");

const TeamModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <Modal
      isOpen={!!member}
      onRequestClose={onClose}
      contentLabel="Team Member Modal"
      className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative mx-auto mt-20 max-h-[90vh] overflow-y-auto outline-none"
      overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-start justify-center px-4 py-8"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-gray-400 hover:text-gray-700 transition-colors duration-200 text-3xl font-bold focus:outline-none"
        aria-label="Close modal"
      >
        &times;
      </button>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Image */}
        <div className="md:w-1/2">
          <img src={member.image} alt={member.name} className="w-full h-[300px] md:h-full object-cover rounded-xl border border-gray-200 shadow-sm" />
        </div>

        {/* Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-extrabold text-[#040F28] uppercase">{member.name}</h2>
          <p className="text-lg font-semibold text-gray-500">{member.role}</p>
          <div className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
            {member.bio || "No biography provided for this team member."}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TeamModal;
