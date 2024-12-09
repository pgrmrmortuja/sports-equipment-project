import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    useEffect(() => {
        document.title = "FAQ | EquiSports";
    }, []);

    const faqData = [
        {
            id: 1,
            question: "What services does EquiSports provide?",
            answer:
                "Our platform offers a wide range of services including expert advice, product recommendations, and career counseling sessions, all designed to help you succeed in your sporting journey.",
        },
        {
            id: 2,
            question: "How can I purchase equipment from EquiSports?",
            answer:
                "You can browse our collection, add products to your cart, and proceed to checkout using secure payment methods like credit/debit cards, PayPal, and more.",
        },
        {
            id: 3,
            question: "What payment methods are accepted?",
            answer:
                "We accept payments through major credit cards, PayPal, and other secure online payment gateways, ensuring a seamless shopping experience.",
        },
        {
            id: 4,
            question: "Is there a return policy for purchased products?",
            answer:
                "Yes, we offer a flexible return policy. If you're not satisfied with your purchase, you can return it within 30 days. Please review our return policy for more details.",
        },
        {
            id: 5,
            question: "Do you offer personalized advice on equipment selection?",
            answer:
                "Absolutely! Our team of experts is here to help you choose the right equipment tailored to your sport and personal preferences. Just reach out to us for advice and guidance.",
        },
    ];

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="bg-white py-10 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqData.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-cyan-100 rounded-lg shadow-md p-4 transition-all duration-300"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <h3 className="text-lg font-medium text-gray-800">
                                    {faq.question}
                                </h3>
                                <span className="text-xl text-gray-600">
                                    {openFAQ === faq.id ? <FiChevronUp /> : <FiChevronDown />}
                                </span>
                            </div>
                            <div
                                className={`mt-2 text-gray-700 ${openFAQ === faq.id ? "block" : "hidden"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
