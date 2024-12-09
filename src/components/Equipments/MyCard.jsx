import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCard = ({ loadedEquipment, setEquipments, equipments }) => {

    const { _id, photo, item, category, price, stockStatus } = loadedEquipment;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // console.log('delete confirmed');

                fetch(`https://coffee-store-server-me.vercel.app/equipments/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Equipment has been deleted.",
                                icon: "success"
                            });

                            const remaining = equipments.filter(eqp => eqp._id !== _id);
                            setEquipments(remaining);
                        }
                    })
            }
        });
    }





    return (
        <div className="card border-2 border-orange-400 bg-base-100 w-96 shadow-xl mt-5 mb-10">
            <figure className="px-10 pt-10">
                <img
                    src={photo}
                    alt={item}
                    className="rounded-xl" />
            </figure>
            <div className="card-body flex flex-grow justify-end ml-4">
                <h2 className="card-title">{item}</h2>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <p>Available: {stockStatus}</p>
                <div className="card-actions justify-between">
                    <Link to={`/update/${_id}`}>
                        <button className="btn  bg-orange-500 text-black hover:text-orange-400 border-none">Update</button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="btn  bg-orange-500 text-black hover:text-orange-400 border-none">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyCard;