import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyCard from './MyCard';

const MyEquipments = () => {

    const [equipments, setEquipments] = useState([]);

    const { user } = useContext(AuthContext);
    console.log(user?.email);

    useEffect(() => {
        fetch(`http://localhost:5000/myEquipments/${user?.email}`)
            .then(res => res.json())
            .then(data => setEquipments(data))
            .catch(error => console.log(error))
    }, [user?.email])




    return (
        <div>
            <h1 className="text-4xl font-bold mb-5 text-center">My Equipments</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>
                {
                    equipments.map(loadedEquipment =>

                        <MyCard
                            key={loadedEquipment._id} 
                            equipments = {equipments}
                            setEquipments = {setEquipments}
                            loadedEquipment={loadedEquipment}>

                        </MyCard>
                    )
                }
            </div>
        </div>
    );
};

export default MyEquipments;