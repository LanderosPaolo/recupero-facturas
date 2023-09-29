import '../stylesheets/queHacemos.css';

const QueHacemos = () => {

    return (
        <>
            <div className="h2-container" id='hacer'>
                <h2>¿Qué hacemos?</h2>
            </div>
            <div className='wrap my-5'>
                <div className='do-container'>
                    <div className="tarjeta">
                        <div className="delantera">
                            <h3 className='mb-4'>Cobranza <b>Administrativa:</b></h3>
                            <ul>
                                <li><b>Contacto con cliente</b> para revisión de documentos y situación para su devengo.</li>
                                <li><b>Envío de correos</b> con información requerida para el devengo del documento.</li>
                                <li><b>Solicitud comprobantes</b> de pagos de los documentos.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tarjeta">
                        <div className="delantera">
                            <h3>Cobranza <b>Personalizada en Terreno:</b></h3>
                            <ul>
                                <li><b>Visitas al área</b> correspondiente y detectar la problemática para la regularización de documentos.</li>
                                <li><b>Reuniones con las autoridades</b> de la institución a fin de abordar la problemática para buscar soluciones efectivas y colaborativas que permitan la regularización del pago.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tarjeta">
                        <div className="delantera">
                            <h3 className='mb-4'>
                                <span style={{ display: 'block' }}>Cobranza</span>
                                <span><b>Prejudicial:</b></span>
                            </h3>
                            <ul>
                                <li><b>Ingreso de reclamos</b> en Mercado Público.</li>
                                <li><b>Denuncias</b> en Contraloría General de la República.</li>
                                <li><b>Suspensión</b> de pedidos en CENABAST.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tarjeta">
                        <div className="delantera">
                            <h3 className='mb-4'>
                                <span style={{ display: 'block' }}>Cobranza</span>
                                <span><b>Judicial:</b></span>
                            </h3>
                            <ul>
                                <li><b>Ejecución efectiva</b> de procesos en cobranza judicial.</li>
                                <li>Llevamos a cabo de manera correcta y eficiente la <b>demanda en tribunales.</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QueHacemos;