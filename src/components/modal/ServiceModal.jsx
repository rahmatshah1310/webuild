const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/45  flex justify-center items-center px-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white w-full max-w-4xl md:max-w-3xl rounded-lg overflow-hidden shadow-lg relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
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
      </div>
    </div>
  );
};


export default ServiceModal;
