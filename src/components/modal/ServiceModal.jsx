import Modal from "react-modal";
import { useEffect } from "react";

Modal.setAppElement("#root"); // Important for accessibility

const ServiceModal = ({ service, onClose }) => {
  // Exit early if no service is selected
  if (!service) return null;

  return (
    <Modal
      isOpen={!!service}
      onRequestClose={onClose}
      contentLabel="Service Modal"
      className="bg-white w-full max-w-4xl md:max-w-3xl rounded-lg overflow-hidden shadow-lg relative mx-auto mt-20 max-h-[90vh] overflow-y-auto outline-none"
      overlayClassName="fixed inset-0 bg-black/40 z-50 flex items-start justify-center px-4 py-8"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold z-10"
      >
        &times;
      </button>

      {/* Modal Content */}
      <div className="p-5">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-[300px] md:h-[400px] object-cover mb-4 rounded"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-[#040F28] mb-2 uppercase">
          {service.title}
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {service.details || service.exp}
        </p>
      </div>
    </Modal>
  );
};

export default ServiceModal;
