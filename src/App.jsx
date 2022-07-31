import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./css/Navbar.css"
import { NavBar } from "./components/Navbar.jsx";
import {CardsInfo} from "./components/CardsInfo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarsvg from "./img/NavBar.svg";

export function App(){
    return <div>
        <header>
            <h1>Coders 21</h1>
        </header>
        <div>
            <NavBar/>
            <img className="NavSvg" src={NavBarsvg} alt="pepe"/>
        </div>
        <main>
            <CardsInfo/>
        </main>
    </div>;
}