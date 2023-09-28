import '../stylesheets/banner.css'
import React, { useState, useEffect } from 'react';

const Banner = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        if (contactSection) {
            const topPosition = contactSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
            });
        }
    };

    const items = [
        { id: 1, desc: 'Confianza', icon: 'fa-handshake' },
        { id: 2, desc: 'Experiencia', icon: 'fa-gear' },
        { id: 3, desc: 'Seguridad', icon: 'fa-shield' },
        { id: 4, desc: 'Compromiso', icon: 'fa-hand-holding-heart' },
    ];

    const [activeIndexes, setActiveIndexes] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndexes((prevIndexes) => prevIndexes.map((index) => (index + 1) % items.length));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner d-flex align-items-center">
            <div className="container text-center">
                <h1 className='mb-5'>Tu flujo de caja, nuestra meta! </h1>
                {/* <h1>
                    Expertos en cobranza y recuperación de pagos en Mercado Público con actividades desde Arica a Punta Arenas.
                </h1> */}
                <button className="btn btn-primary contact-button mt-5" onClick={scrollToContact}>
                    Contáctanos
                </button>
            </div>
            <div className="carousel">
                <div className="carousel-inner">
                    {activeIndexes.map((index) => (
                        <div key={items[index].id} className="carousel-items">
                            <i className={`fa-solid ${items[index].icon}`} />
                            <p>{items[index].desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;