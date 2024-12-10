import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaSort } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Loading from '../../Pages/Loading';

const AllEquipments = () => {
    const equipments = useLoaderData();
    const [sortedEquipments, setSortedEquipments] = useState(equipments);
    const [isAscending, setIsAscending] = useState(true);
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>;
    }

    useEffect(() => {
        document.title = "All Equipments | EquiSports";
    }, []);

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
            <h1 className="text-4xl font-bold mb-5 text-center">All Sports Equipment</h1>

            {/* Sort Button */}
            <div className="text-right mb-4">
                <button
                    onClick={handleSortByPrice}
                    className="flex items-center btn  bg-orange-300 text-black hover:text-orange-400 border-none "
                >
                    <FaSort className="mr-2" />
                    {isAscending ? "Sort by Price: Ascending" : "Sort by Price: Descending"}
                </button>
            </div>

            <div className="overflow-hidden">
                <table className="table-fixed w-full border border-gray-300">
                    <thead>
                        <tr className="bg-orange-200 text-black">
                            <th className="border border-gray-300 px-4 py-2 w-1/4 text-center whitespace-normal break-words">Name</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/4 text-center whitespace-normal break-words">Category</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/4 text-center whitespace-normal break-words">Price</th>
                            <th className="border border-gray-300 px-4 py-2 w-1/4 text-center whitespace-normal break-words">Action</th>
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
                                        className="btn  bg-orange-300 text-black hover:text-orange-400 border-none"
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
