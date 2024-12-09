import React, { useEffect } from 'react';
import { FaBasketballBall, FaRunning, FaMedal } from 'react-icons/fa';

const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us | EquiSports";
    }, []);

    return (
        <div className="bg-white py-12 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    About Us
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                    Welcome to EquiSports, your ultimate destination for premium sports equipment and accessories.
                    Our mission is to empower athletes and sports enthusiasts with the finest gear to elevate their performance.
                </p>

                {/* Mission, Vision, Values */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Mission */}
                    <div className="bg-cyan-100 shadow-lg p-6 rounded-lg">
                        <FaBasketballBall className="text-orange-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                        <p className="text-gray-600">
                            To provide top-notch sports equipment that inspires confidence and enhances your athletic journey.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-cyan-100 shadow-lg p-6 rounded-lg">
                        <FaRunning className="text-green-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
                        <p className="text-gray-600">
                            To be the leading sports equipment store, delivering excellence and innovation for all athletes.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="bg-cyan-100 shadow-lg p-6 rounded-lg">
                        <FaMedal className="text-yellow-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Values</h3>
                        <p className="text-gray-600">
                            Quality, passion, and dedication drive us to serve our customers with the best products and services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
