import React from 'react';
import { FaBasketballBall, FaCogs, FaUserShield, FaStar } from 'react-icons/fa';

const Choose = () => {
    return (
        <div className='mx-auto w-11/12 mb-16'>

            <div className="mt-10">
                <h3 className="text-4xl font-bold text-center mb-4">Why Choose Us?</h3>
                <p className="text-lg mb-6 text-center">
                    At EquiSports, we bring you the best sports equipment, innovative tools, and unparalleled support to elevate your game.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

                    <div className="bg-orange-100 shadow-lg p-6 rounded-lg flex items-center gap-4">
                        <FaBasketballBall className="text-orange-500 text-5xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Premium Gear</h4>
                            <p className="text-gray-600">
                                Access high-quality sports gear that meets the standards of professionals and enthusiasts alike.
                            </p>
                        </div>
                    </div>


                    <div className="bg-orange-100 shadow-lg p-6 rounded-lg flex items-center gap-4">
                        <FaCogs className="text-blue-500 text-5xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Innovative Tools</h4>
                            <p className="text-gray-600">
                                Utilize cutting-edge tools and accessories designed to boost your sports performance.
                            </p>
                        </div>
                    </div>


                    <div className="bg-orange-100 shadow-lg p-6 rounded-lg flex items-center gap-4">
                        <FaUserShield className="text-green-500 text-5xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Reliable Support</h4>
                            <p className="text-gray-600">
                                Enjoy dedicated customer support to ensure your satisfaction and success in every purchase.
                            </p>
                        </div>
                    </div>


                    <div className="bg-orange-100 shadow-lg p-6 rounded-lg flex items-center gap-4">
                        <FaStar className="text-yellow-500 text-5xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Unmatched Quality</h4>
                            <p className="text-gray-600">
                                Trust in our commitment to excellence with every product we offer, ensuring your peak performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;
