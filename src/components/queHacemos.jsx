import '../stylesheets/queHacemos.css'
import React, { useState, useEffect } from 'react';

const QueHacemos = () => {
    const [currentCard, setCurrentCard] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % 4);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <div className="mt-4 mb-4 mx-2" id='hacer'>
            <div className='information'>
                <h2>¿Qué hacemos?</h2>
            </div>
            <div className='icon-container'>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        className={`icons box ${currentCard === index ? 'active' : ''}`}
                        key={index}
                    >
                        <div className='icons box'>
                            <i className="fa-solid fa-comments" title="Cobranza Administrativa"></i>
                            <p>Cobranza <b>Administrativa</b></p>
                            <div className="icon-tooltip">
                                <ul>
                                    <li><b>Contacto con cliente</b> para revisíon de documentos y situación para su devengo.</li>
                                    <li><b>Envío de correos</b> con información requerida para el devengo del documento.</li>
                                    <li><b>Solicitud comprobantes</b> de pagos de los documentos.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='icons box'>
                            <i className="fa-solid fa-map-location-dot" title='Cobranza Personalizada en Terreno'></i>
                            <p>Cobranza <b>Personalizada en Terreno</b></p>
                            <div className="icon-tooltip">
                                <ul>
                                    <li><b>Visitas al área</b> correspondiente y detectar la problemática para la regularización de documentos.</li>
                                    <li><b>Reuniones con las autoridades</b> de la institución a fin de abordar la problemática para buscar soluciones efectivas y colaborativas que permitan la regularización del pago.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='icons box'>
                            <i className="fa-solid fa-file-invoice" title='Cobranza Prejudicial'></i>
                            <p>Cobranza <b>Prejudicial</b></p>
                            <div className="icon-tooltip">
                                <ul>
                                    <li><b>Ingreso de reclamos</b> en Mercado Público.</li>
                                    <li><b>Denuncias</b> en Contraloría General de la República.</li>
                                    <li><b>Suspensión</b> de pedidos en CENABAST.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='icons box'>
                            <i className="fa-solid fa-scale-balanced" title='Cobranza Judicial'></i>
                            <p>Cobranza <b>Judicial</b></p>
                            <div className="icon-tooltip">
                                <ul>
                                    <li><b>Ejecución efectiva</b> de procesos en cobranza judicial.</li>
                                    <li>Llevamos a cabo de manera correcta y eficiente la <b>demanda en tribunales.</b></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className='icons box'>
                    <i className="fa-solid fa-comments" title="Cobranza Administrativa"></i>
                    <p>Cobranza <b>Administrativa</b></p>
                    <div className="icon-tooltip">
                        <ul>
                            <li><b>Contacto con cliente</b> para revisíon de documentos y situación para su devengo.</li>
                            <li><b>Envío de correos</b> con información requerida para el devengo del documento.</li>
                            <li><b>Solicitud comprobantes</b> de pagos de los documentos.</li>
                        </ul>
                    </div>
                </div>
                <div className='icons box'>
                    <i className="fa-solid fa-map-location-dot" title='Cobranza Personalizada en Terreno'></i>
                    <p>Cobranza <b>Personalizada en Terreno</b></p>
                    <div className="icon-tooltip">
                        <ul>
                            <li><b>Visitas al área</b> correspondiente y detectar la problemática para la regularización de documentos.</li>
                            <li><b>Reuniones con las autoridades</b> de la institución a fin de abordar la problemática para buscar soluciones efectivas y colaborativas que permitan la regularización del pago.</li>
                        </ul>
                    </div>
                </div>
                <div className='icons box'>
                    <i className="fa-solid fa-file-invoice" title='Cobranza Prejudicial'></i>
                    <p>Cobranza <b>Prejudicial</b></p>
                    <div className="icon-tooltip">
                        <ul>
                            <li><b>Ingreso de reclamos</b> en Mercado Público.</li>
                            <li><b>Denuncias</b> en Contraloría General de la República.</li>
                            <li><b>Suspensión</b> de pedidos en CENABAST.</li>
                        </ul>
                    </div>
                </div>
                <div className='icons box'>
                    <i className="fa-solid fa-scale-balanced" title='Cobranza Judicial'></i>
                    <p>Cobranza <b>Judicial</b></p>
                    <div className="icon-tooltip">
                        <ul>
                            <li><b>Ejecución efectiva</b> de procesos en cobranza judicial.</li>
                            <li>Llevamos a cabo de manera correcta y eficiente la <b>demanda en tribunales.</b></li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default QueHacemos;