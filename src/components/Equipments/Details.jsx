import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const equipment = useLoaderData();

    const { photo, item, category, description, price, rating, customization, processing, stockStatus} = equipment;

    return (
        <div>
            <h2 className="text-center text-3xl font-bold p-2 mb-5">Equipment Details</h2>
            <div className="hero bg-base-200 border-2 border-cyan-500 p-5 sm:p-10">
                <div className="hero-content flex flex-col md:flex-row items-center md:items-start gap-5">
                    <img src={photo} className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl" />
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl font-semibold">{item}</h1>
                        <p className="text-xl sm:text-2xl mt-2">Category: {category}</p>
                        <p className="text-xl sm:text-2xl mt-2">Customization: {customization}</p>
                        <p className="text-xl sm:text-2xl mt-2">Processing: {processing}</p>
                        <p className="text-xl sm:text-2xl mt-2">Available: {stockStatus}</p>
                        <p className="mt-2 text-sm sm:text-base">{description}</p>
                        <p className="mt-2 text-sm sm:text-base">Price: {price}</p>
                        <div className="flex mt-2 items-center justify-center md:justify-start">
                            <p className="mr-2">{rating}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;