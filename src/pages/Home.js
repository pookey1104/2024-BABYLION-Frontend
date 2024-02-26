import { Link } from "react-router-dom";
import Header_Home from "../components/Header_Home";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Point from "../img/home_point.png";
import InstaImg from "../img/instagram.png";

function Home() {
    return (
        <div className="page">
            <div className="page-bg">
                <div className="page-space">
                    <Header_Home />
                    <div className="center">
                        <div className="content">
                            <div className="home-com1">
                                <Link to="/about" className="homeToAbout">
                                    <div>LIKELION</div>
                                    <div>UNIV</div>
                                    <div>12TH</div>
                                </Link>
                                <div className="grayBox"></div>
                            </div>
                            <div className="home-com2">
                                <Link to="/input" className="homeToInput">
                                    <div>합격자</div>
                                    <div>조회</div>
                                </Link>
                            </div>
                            <div className="home-com3">
                                <div className="pointBox">
                                    <img src={Point} className="PointImg"></img>
                                </div>
                                <Link to="" className="homeToInsta">
                                    <img
                                        src={InstaImg}
                                        className="InstaImg"
                                    ></img>
                                </Link>
                                <div className="blackBox">
                                    <div>GROWL</div>
                                    <div>TO</div>
                                    <div>WORLD !</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
