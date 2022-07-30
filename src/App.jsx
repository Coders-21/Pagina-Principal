import { NavBar } from "./Navbar";
import {CardsInfo} from "./CardsInfo";
import "bootstrap/dist/css/bootstrap.min.css";
export function App(){
    return <div>
        <header>
            <h1>Coders 21</h1>
        </header>
        <nav>
            <NavBar/>
        </nav>
        <main>
            <CardsInfo/>
        </main>
    </div>;
}