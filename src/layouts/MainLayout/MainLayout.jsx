import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../../Pages/Loading';

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div>
            <header className='py-3 mb-5'>
                <Navbar></Navbar>
            </header>

            {
                navigation.state === 'loading' ?
                    <Loading></Loading>
                    :
                    <main className='container mx-auto'>
                        <Outlet></Outlet>
                    </main>
            }


            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;