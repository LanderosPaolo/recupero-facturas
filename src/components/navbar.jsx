import '../stylesheets/nav.css';
import logoPequeno from '../imgs/logoPequeño.png';

const BarraNavegacion = () => {
    const scrollToSection = (sectionId) => {
        if (sectionId === '') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
                block: 'start',
                inline: 'start',
            });
        } else {
            const section = document.getElementById(sectionId);
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            if (section) {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start',
                });
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="logo-text-container d-flex align-items-center">
                    <img src={logoPequeno} alt="Recuper-Facturas" className='logo-pequeno' onClick={() => scrollToSection('')} />
                    <p className='logo-text fw-bold'>RECUPERO FACTURAS</p>
                </div>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 mt-1 text-center">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" onClick={() => scrollToSection('')}>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('nosotros')}>¿Quiénes somos?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('hacer')}>¿Qué hacemos?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => scrollToSection('contact')} >Contáctanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default BarraNavegacion