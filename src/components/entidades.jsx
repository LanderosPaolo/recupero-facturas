import '../stylesheets/entidades.css'
import mercadoPublico from '../imgs/mercadoPublico.png';
import sii from '../imgs/servicio.png';
import dipres from '../imgs/dipres300x200.png';
import tgr from '../imgs/TGR.png';

const Entidades = () => {
    return (
        <div className='imgs-container'>
            <div className="title">
                <h2>Entidades Relacionadas</h2>
            </div>
            <div className="d-flex justify-content-evenly align-items-center entidades-img">
                <img
                    src={mercadoPublico}
                    alt="Mercado Público"
                    className="entidad-img"
                />
                <img
                    src={sii}
                    alt="SII"
                    className="entidad-img"
                />
                <img
                    src={dipres}
                    alt="DIPRES"
                    className="entidad-img"
                />
                <img
                    src={tgr}
                    alt="TGR"
                    className="entidad-img"
                />
            </div>
        </div>
    );
};

export default Entidades;