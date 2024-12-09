import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LimitEquipments = () => {

    const [limits, setLimits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/equipments-limited?limit=6')
            .then(res => res.json())
            .then(data => setLimits(data))
            .catch(error => console.log(error))
    }, [])
    // photo, item, category, description, price, rating, customization, processing, stockStatus

    return (
        <div>
            <h2 className="text-center text-4xl font-bold p-2 mb-5">Some Products Demo</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>
                {
                    limits.map(limit =>
                        <div key={limit._id} className="card border-2 border-orange-500  bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={limit.photo}
                                    alt={limit.item}
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body flex flex-grow justify-end ml-4">
                                <h2 className="card-title">{limit.item}</h2>
                                <p>Category: {limit.category}</p>
                                <p>Price: {limit.price}</p>
                                <p>Available: {limit.stockStatus}</p>
                                <div className="card-actions justify-start">
                                    <Link to={`/details/${limit._id}`}>
                                        <button className="btn border-cyan-700 bg-cyan-300 hover:text-cyan-400 border-none">View Details</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LimitEquipments;