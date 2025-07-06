import Modal from "react-modal";

Modal.setAppElement("#root");

const TeamModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <Modal
      isOpen={!!member}
      onRequestClose={onClose}
      contentLabel="Team Member Modal"
      className="bg-white w-full max-w-3xl rounded-lg overflow-hidden shadow-xl relative mx-auto mt-20 max-h-[90vh] overflow-y-auto outline-none"
      overlayClassName="fixed inset-0 bg-black/40 z-50 flex items-start justify-center px-4 py-8"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold z-10"
      >
        &times;
      </button>

      <div className="p-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[500px] object-cover rounded mb-4"
        />
        <h2 className="text-3xl font-bold uppercase text-[#040F28] mb-1">{member.name}</h2>
        <p className="text-gray-500 mb-4">{member.role}</p>
        <p className="text-gray-700 text-base leading-relaxed">
          {member.bio || "No biography provided for this team member."}
        </p>
      </div>
    </Modal>
  );
};

export default TeamModal;
