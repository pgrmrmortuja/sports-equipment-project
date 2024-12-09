import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Categories = () => {

    const categories = useLoaderData();
    const catgName = categories[0].category;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5 text-center">Category: {catgName}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>
                {
                    categories.map(category =>

                        <div key={category._id} className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={category.photo}
                                    alt={category.item}
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body flex flex-grow justify-end ml-4">
                                <h2 className="card-title">{category.item}</h2>
                                <p>Category: {category.category}</p>
                                <p>Price: {category.price}</p>
                                <p>Available: {category.stockStatus}</p>
                                <div className="card-actions justify-start">
                                    <Link to={'/'}>
                                        <button className="btn border-cyan-700 bg-cyan-300 hover:text-cyan-400 border-none">Back Home</button>
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

export default Categories;