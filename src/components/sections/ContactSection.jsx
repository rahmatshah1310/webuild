import { useRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const ContactSection = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_q81ln5n',     // Replace with your EmailJS service ID
            'template_qn9v4bq',    // Replace with your template ID
            formRef.current,
            'VusCIgKIYp1VGvQKP'      // Replace with your public key
        )
            .then((result) => {
                console.log("Email sent:", result.text);
                alert("Message sent successfully!");
                e.target.reset(); // Optional: reset form after submission
            })
            .catch((error) => {
                console.error("Error:", error.text);
                alert("Something went wrong. Try again.");
            });
    };
    return (
        <section className="w-full py-16 px-5" id='contact'>
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Column */}
                <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
                    <div className="mb-6">
                        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase mb-4 text-[#040F28]">
                            Request A <span className="text-[#FD5D14]">Call Back</span>
                        </h1>
                    </div>
                    <p className="text-gray-700 mb-6">
                        Nonumy ipsum amet tempor takimata vero ea elitr. Diam diam ut et eos duo duo sed. Lorem elitr sadipscing eos et ut et stet
                        justo, sit dolore et voluptua labore. Ipsum erat et ea ipsum magna sadipscing lorem. Sit lorem sea sanctus eos. Sanctus sit
                        tempor dolores ipsum stet justo sit erat ea, sed diam sanctus takimata sit. Et at voluptua amet erat justo amet ea ipsum eos,
                        eirmod accusam sea sed ipsum kasd ut.
                    </p>
                    <Link
                        to="#"
                        className="inline-block bg-[#FD5D14] text-white font-medium py-3 px-6 transition"
                    >
                        Get A Quote
                    </Link>
                </div>

                {/* Right Column - Form */}
                <div className="lg:w-2/3 w-full">
                    <div className="bg-gray-100 p-6 sm:p-10 rounded-md shadow-md">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text" name="name" placeholder="Your Name" required
                                    className="w-full h-[55px] border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <input
                                    type="email" name="email" placeholder="Your Email" required
                                    className="w-full h-[55px] border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <input
                                    type="text" name="date" placeholder="Call Back Date" required
                                    className="w-full h-[55px] border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <input
                                    type="text" name="time" placeholder="Call Back Time" required
                                    className="w-full h-[55px] border border-gray-300 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <textarea
                                    name="message" placeholder="Message" rows="5"
                                    className="w-full col-span-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="col-span-full bg-[#FD5D14] cursor-pointer  text-white py-3 w-full rounded-md font-semibold  transition"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

