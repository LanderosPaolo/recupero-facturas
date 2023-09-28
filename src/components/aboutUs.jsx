import '../stylesheets/us.css';

const QuienesSomos = () => {
    return (
        <div className="container mt-4 mb-4" id='nosotros'>
            <div className='information'>
                <h2>¿Quiénes somos?</h2>
                {/* <p>
                    Somos expertos en cobranza y recupero de pagos en el Mercado Público,
                    con más de 15 años de experiencia.
                </p> */}
                <p>
                Una empresa con más de 15 años de experiencia que respaldan nuestro conocimiento en el servicio de cobranza.
                </p>
            </div>
            <div className='icon-container'>
                <div className='icons'>
                    <div className='icon-box'>
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    {/* <p>Analistas de cobranzas</p> */}
                    <p>ANALISTAS DE COBRANZA</p>
                </div>
                <div className='icons'>
                    <div className='icon-box'>
                        <i className="fa-regular fa-newspaper"></i>
                    </div>
                    {/* <p>Conocedores de mercado público</p> */}
                    <p>CONOCEDORES DE MERCADO PÚBLICO</p>
                </div>
                <div className='icons'>
                    <div className="icon-box">
                        <i className="fa-solid fa-gavel"></i>
                    </div>
                    {/* <p>Abogados</p> */}
                    <p>ABOGADOS</p>
                </div>
            </div>
        </div>
    )
};

export default QuienesSomos;