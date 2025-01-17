import React from 'react';
import { Link } from 'react-router-dom';
import Cricket from '../../../src/assets/cricket.jpg';
import Football from '../../../src/assets/football.jpg';
import Badminton from '../../../src/assets/badminton.jpg';

const CatgSection = () => {
    return (
        <div className='mb-20'>
            <h1 className="text-4xl font-bold mb-10 text-center">Choose Your Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>
                <div className="card border-2 border-orange-500 bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={Cricket}
                            alt="Cricket"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="card-actions">
                            <Link to={"/categories/Cricket"}>
                                <button className="btn bg-orange-300 text-black hover:text-orange-400">See Cricket</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-2 border-orange-500 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={Football}
                            alt="Football"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="card-actions">
                            <Link to={"/categories/Football"}>
                                <button className="btn bg-orange-300 text-black hover:text-orange-400">See Football</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-2 border-orange-500 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={Badminton}
                            alt="Badminton"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="card-actions">
                            <Link to={"/categories/Badminton"}>
                                <button className="btn bg-orange-300 text-black hover:text-orange-400">See Badminton</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CatgSection;