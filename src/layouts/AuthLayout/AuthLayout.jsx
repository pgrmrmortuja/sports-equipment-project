import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loading from "../../Pages/Loading";


const AuthLayout = () => {
    const navigation = useNavigation();

    return (
        <div >
            <header className="py-3 mb-10">
                <Navbar></Navbar>
            </header>

            {
                navigation.state === 'loading' ?
                    <Loading></Loading>
                    :
                    <Outlet></Outlet>
            }

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;