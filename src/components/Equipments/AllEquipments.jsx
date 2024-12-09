import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaSort } from 'react-icons/fa';

const AllEquipments = () => {
    const equipments = useLoaderData();
    const [sortedEquipments, setSortedEquipments] = useState(equipments);
    const [isAscending, setIsAscending] = useState(true);

    // Sorting Functionality
    const handleSortByPrice = () => {
        const sorted = [...sortedEquipments].sort((a, b) => {
            return isAscending ? a.price - b.price : b.price - a.price;
        });
        setSortedEquipments(sorted);
        setIsAscending(!isAscending); // Toggle sorting order
    };

    return (
        <div className="container mx-auto my-10 px-4">
            <h1 className="text-2xl font-bold mb-5 text-center">All Sports Equipment</h1>
            
            {/* Sort Button */}
            <div className="text-right mb-4">
                <button
                    onClick={handleSortByPrice}
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    <FaSort className="mr-2" />
                    {isAscending ? "Sort by Price: Ascending" : "Sort by Price: Descending"}
                </button>
            </div>

            <div className="overflow-hidden">
                <table className="table-fixed w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 w-1/4 text-center">Name</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/4 text-center">Category</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/4 text-center">Price</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedEquipments.map((equipment) => (
                            <tr key={equipment._id} className="hover:bg-gray-100">
                                <td className="text-center border border-gray-300 px-4 py-2 whitespace-normal break-words">
                                    {equipment.item}
                                </td>
                                <td className="text-center border border-gray-300 px-4 py-2 whitespace-normal break-words">
                                    {equipment.category}
                                </td>
                                <td className="text-center border border-gray-300 px-4 py-2">
                                    ${equipment.price}
                                </td>
                                <td className="border border-gray-300 md:px-4 sm:px-8 py-2 text-center">
                                    <Link
                                        to={`/details/${equipment._id}`}
                                        className="inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipments;
