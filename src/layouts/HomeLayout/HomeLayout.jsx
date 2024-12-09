import React, { useEffect } from 'react';
import Slider from '../../components/Slider';
import Choose from '../../components/Choose';
import AboutUs from '../../components/AboutUs';
import LimitEquipments from '../../components/Equipments/LimitEquipments';
import CatgSection from '../../components/Equipments/CatgSection';



const HomeLayout = () => {

    useEffect(() => {
        document.title = "Career Pathway | Home";
    }, []);

    return (
        <div>
            <Slider></Slider>
            <AboutUs></AboutUs>
            <Choose></Choose>
            <CatgSection></CatgSection>
            <LimitEquipments></LimitEquipments>

        </div>
    );
};

export default HomeLayout;