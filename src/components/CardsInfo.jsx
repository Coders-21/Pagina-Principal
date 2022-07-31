import "../css/Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";
export function CardsInfo(){
    return(
        <div>
            <div>
                <div class="card mb-3">                   
                    <div className="card-body">
                        <h5 className="card-title">Estas buscando contenido sobre las materias?</h5>
                        <p className="card-text">Conoce nuestro Drive donde tenemos los
                            modulos y materiales extras de las materias!</p>
                        <p className="card-text"><small class="text-muted">Ultima actualización 1/8/22</small></p>
                        <a className="btn btn-primary" href="#">Drive</a>
                    </div>
                </div>
                <div class="card mb-3">
                    <img className="card-img-top" src="https://culturacientifica.com/app/uploads/2016/07/universdad.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">¿Querés saber cómo vas con el plan de estudio?</h5>
                        <p className="card-text">Tenemos una página en donde podes ver las
correlatividades y el plan de estudio!</p>
                        <p className="card-text"><small class="text-muted">Ultima actualización 1/8/22</small></p>
                        <a className="btn btn-primary" href="#">Plan de Estudio</a>
                    </div>
                </div>
            </div>
            <div>
                <div class="card mb-3">
                    <img className="card-img-top" src="https://culturacientifica.com/app/uploads/2016/07/universdad.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Tenemos grupos de WhatsApp y Telegram.</h5>
                        <p className="card-text">Puedes buscar tus grupos e información 
extra a traves de estos medios.</p>
                        <p className="card-text"><small class="text-muted">Ultima actualización 1/8/22</small></p>
                        <a className="btn btn-primary" href="#">Grupos</a>
                    </div>
                </div>
            </div>
        </div>
    );
}