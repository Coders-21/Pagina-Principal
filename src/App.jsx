import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./css/Navbar.css"
import "./css/index.css"
import { NavBar } from "./components/Navbar.jsx";
import { CardsInfo } from "./components/CardsInfo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarsvg from "./img/NavBar.svg";
import { ReactComponent as LogoCoders21 } from "./img/logo.svg";

export function App() {
    return <>
        <div style={{ position: "fixed", display: "flex", height: "100%", alignItems: "center" }}>
            <NavBar />
            <img className="NavSvg" src={NavBarsvg} alt="pepe" />
        </div>
        <div>
            <header>
                <h1 className='Title'>Coders 21</h1>
            </header>

            <main className='coders21-container'>
                <CardsInfo />
            </main>
        </div>
        <div style={{ position: "fixed", bottom: "0", right: "0", marginRight: 20, marginBottom: 10}}>
            {/* <img src={LogoCoders21}  alt="logo" /> */}
            <LogoCoders21 fontSize={"8rem"} />
        </div>
    </>;
}