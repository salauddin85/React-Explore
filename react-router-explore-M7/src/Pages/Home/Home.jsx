import {React} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Headar/Headar';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <h1>Hello world from Home page</h1>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;