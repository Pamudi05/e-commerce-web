import '../App.css';
import Category from '../components/category/category';
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import Sidebar from '../components/sidebar/Sidebar';
import Slider from '../components/silder/slider';
import TopHeader from "../components/topHeader/topHead";

function HomePage() {
    return (
        <div >
            <TopHeader/>
            <NavBar />
            <div className="home">
                <div className='home-left element'>
                    <Sidebar/>
                </div>
                <div className='home-right element'>
                    <Slider/>
                </div>
            </div>
            <Category/>
            <Footer/>
        </div>
    );
}

export default HomePage;