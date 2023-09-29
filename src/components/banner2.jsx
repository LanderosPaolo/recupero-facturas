import React, { useState, useEffect } from 'react';
import '../stylesheets/banner2.css'

const Banner2 = () => {
    const [highlightedItemIndex, setHighlightedItemIndex] = useState(0);

    const items = [
        { id: 1, desc: 'Confianza', icon: 'fa-handshake' },
        { id: 2, desc: 'Experiencia', icon: 'fa-gear' },
        { id: 3, desc: 'Seguridad', icon: 'fa-shield' },
        { id: 4, desc: 'Compromiso', icon: 'fa-hand-holding-heart' },
    ];

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

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedItemIndex(prevIndex => (prevIndex + 1) % items.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [items]);

    return (
        <div className="banner d-flex align-items-center">
            <div className="container text-center">
                <h1 className='mb-5'>Tu flujo de caja, nuestra meta.</h1>
                <button className="btn btn-primary contact-button mt-5" onClick={scrollToContact}>
                    ¡Contáctanos!
                </button>
            </div>
            <div className="items-container">
                <div className="items">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`item ${index === highlightedItemIndex ? 'highlighted' : ''}`}
                        >
                            <i className={`fas ${item.icon} fa-2x`}></i>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner2;