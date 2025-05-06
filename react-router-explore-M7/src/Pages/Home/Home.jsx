import { React } from 'react';
import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import Header from '../Headar/Headar';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Header />
            {
                navigation.state === 'loading' && (
                    <div className="flex justify-center items-center my-10">
                        <div className="w-50 h-50 border-4 border-blue-500 border-dashed rounded-full animate-spin "></div>
                    </div>
                )
            }
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
