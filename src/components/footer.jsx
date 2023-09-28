import '../stylesheets/footer.css'
import logoImg from '../imgs/logo.png'

const Footer = () => {
    return (
        <footer className="footer mt-4">
            <div className="logo-container">
                <img
                    src={logoImg}
                    alt="Recupero-Facturas"
                    className='logo'
                />
            </div>
            <div className="contact-information">
                <div className="contact">
                    <i className="fa-solid fa-user"></i>
                    <p>Marcial Riquelme F.</p>
                </div>
                <div className="contact">
                    <i className="fa-brands fa-whatsapp"></i>
                    <p>+56 9 5770 2173</p>
                </div>
                <div className="contact">
                    <i className="fa-solid fa-envelope"></i>
                    <p>contacto@recuperofacturas.cl</p>
                </div>
                <div className="contact">
                    <i className="fa-solid fa-globe"></i>
                    <p>www.recuperofacturas.cl</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;