import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AppointmentContext } from '../../providers/AppointmentProvider';

const Details = () => {
    const { serviceId } = useParams();
    const id = parseInt(serviceId);

    const data = useLoaderData();
    console.log(data);


    if (!data || !Array.isArray(data)) {
        return <h2>Data is not available or invalid</h2>;
    }


    const service = data.find(service => service.id === id);

    const { addAppointment } = useContext(AppointmentContext);

    const { service_name, image, brief_description, pricing, counselor, rating } = service;


    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        document.title = "Details | Career Pathway";
    }, []);

    const handleAddComment = () => {
        if (input.trim() !== "") {
            setComments([...comments, input]);
            setInput("");
        }
    };

    return (
        <div>
    <h2 className="text-center text-3xl font-bold p-2 mb-5">Service Details</h2>
    <div className="hero bg-base-200 border-2 border-cyan-500 p-5 sm:p-10">
        <div className="hero-content flex flex-col md:flex-row items-center md:items-start gap-5">
            <img src={image} className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl" />
            <div className="text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl font-semibold">{service_name}</h1>
                <p className="text-xl sm:text-2xl mt-2">Counselor: {counselor}</p>
                <p className="mt-2 text-sm sm:text-base">{brief_description}</p>
                <p className="mt-2 text-sm sm:text-base">Price: {pricing}</p>
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
                <button
                    onClick={() => addAppointment(service)}
                    className="btn mt-4 border-cyan-500 hover:bg-cyan-500 text-cyan-800">
                    Take Appointment
                </button>
            </div>
        </div>
    </div>

    <div className="mt-16 w-full max-w-3xl mx-auto bg-cyan-100 rounded-xl p-5 sm:p-10">
        <h2 className="text-xl font-bold mb-2">Comments / Feedback</h2>
        <input
            type="text"
            placeholder="Add your comment..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded w-full mb-2"
        />
        <button
            onClick={handleAddComment}
            className="bg-cyan-500 hover:bg-cyan-700 text-white px-20 w-full py-2 rounded">
            Submit
        </button>
    </div>
    <ul className="mt-4 mb-5 w-full max-w-3xl mx-auto">
        {comments.map((comment, index) => (
            <li key={index} className="border-2 p-2 m-2 rounded-lg bg-base-200">
                <div>{comment}</div>
            </li>
        ))}
    </ul>
</div>


    );
};

export default Details;
