import './Core.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
