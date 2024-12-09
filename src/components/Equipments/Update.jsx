import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Update = () => {

    const { user } = useContext(AuthContext);

    const equipment = useLoaderData();

    const { _id, photo, item, category, description, price, rating, customization, processing, stockStatus } = equipment;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const item = form.item.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const stockStatus = form.stockStatus.value;

        const update = { photo, item, category, description, price, rating, customization, processing, stockStatus };

        console.log(update);

        //send data to the server
        fetch(`http://localhost:5000/equipments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className="flex justify-center items-center min-h-screen  p-6">
            <form onSubmit={handleUpdate} className="w-full max-w-lg  p-8 rounded-lg shadow-lg space-y-6 bg-orange-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Equipments</h2>

                {/* User Name (Read-only) */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                        User Name
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="userName"
                        value={user?.displayName || ""}
                        readOnly
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 bg-white cursor-not-allowed"
                    />
                </div>

                {/* User Email (Read-only) */}
                <div className="mb-4">
                    <label htmlFor="userEmail" className="block text-lg font-medium text-gray-700">
                        User Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="userEmail"
                        value={user?.email || ""}
                        readOnly
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 bg-white cursor-not-allowed"
                    />
                </div>

                {/* Photo URL */}
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-lg font-medium text-gray-700">
                        Product's Photo URL
                    </label>
                    <input
                        type="text"
                        name="photo"
                        defaultValue={photo}
                        id="photo"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                {/* Item Name */}
                <div className="mb-4">
                    <label htmlFor="item" className="block text-lg font-medium text-gray-700">
                        Item Name
                    </label>
                    <input
                        type="text"
                        name="item"
                        defaultValue={item}
                        id="item"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                {/* Category Name */}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-lg font-medium text-gray-700">
                        Category Name
                    </label>
                    <input
                        type="text"
                        name="category"
                        defaultValue={category}
                        id="category"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        id="description"
                        rows="4"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        defaultValue={price}
                        id="price"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                {/* Rating */}
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-lg font-medium text-gray-700">
                        Rating (1-5)
                    </label>
                    <input
                        type="text"
                        name="rating"
                        defaultValue={rating}
                        id="rating"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                {/* Customization */}
                <div className="mb-4">
                    <label htmlFor="customization" className="block text-lg font-medium text-gray-700">
                        Customization
                    </label>
                    <input
                        type="text"
                        name="customization"
                        defaultValue={customization}
                        id="customization"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                    />
                </div>

                {/* Processing Time */}
                <div className="mb-4">
                    <label htmlFor="processingTime" className="block text-lg font-medium text-gray-700">
                        Processing Time (days)
                    </label>
                    <input
                        type="text"
                        name="processing"
                        defaultValue={processing}
                        id="processingTime"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                    <label htmlFor="stockStatus" className="block text-lg font-medium text-gray-700">
                        Stock Status (Quantity Available)
                    </label>
                    <input
                        type="number"
                        name="stockStatus"
                        defaultValue={stockStatus}
                        id="stockStatus"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full font-medium py-3 rounded-lg  bg-orange-500 text-black hover:text-orange-400 border-none"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;