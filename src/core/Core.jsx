import './Core.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function Core() {
    return (
        <div className="Core">
                <Header/>
                <Main/>
                <Footer/>
        </div>
    );
}

export default Core;
