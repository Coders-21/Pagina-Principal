import ModalidadImg from "../img/modalidad.png"
import DiscordImg from "../img/Discord.png"
import YoutubeImg from "../img/Youtube.png"
import PlanImg from "../img/Plan.png"
import CondicionImg from "../img/condicion.png"
export function NavBar(){
    return(
        
        <ul className="NavList">
            <li> <img src={ModalidadImg} alt="modalidad" /> Modalidad</li>
            <li><img src={DiscordImg} alt="discord" />Discord</li>
            <li><img src={YoutubeImg} alt="modalidad" />Youtube</li>
            <li><img src={PlanImg} alt="modalidad" />Plan de Estudio</li>
            <li><img src={CondicionImg} alt="modalidad" />Condición</li>
        </ul>
    );
}