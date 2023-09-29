import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheets/contact.css';
import RutInput from './rutInput'

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [rut, setRut] = useState('');

    const isValidRUT = (rut) => {
        // Eliminar puntos y guiones del RUT
        rut = rut.replace(/\./g, '').replace(/-/g, '').toUpperCase();

        // Verificar si el RUT tiene el formato adecuado
        const rutRegex = /^[0-9]{7,8}[Kk0-9]$/;
        if (!rutRegex.test(rut)) {
            return false;
        }

        // Obtener el dígito verificador del RUT
        const rutNumber = parseInt(rut.slice(0, -1), 10);
        const rutDV = rut.slice(-1);

        // Calcular el dígito verificador esperado
        const rutDigits = rutNumber.toString().split('').reverse();
        let sum = 0;
        let multiplier = 2;

        for (let i = 0; i < rutDigits.length; i++) {
            sum += parseInt(rutDigits[i], 10) * multiplier;
            multiplier = multiplier < 7 ? multiplier + 1 : 2;
        }

        const expectedDV = (11 - (sum % 11)).toString();

        // Comparar el dígito verificador calculado con el dígito verificador del RUT
        if (expectedDV === '10' && rutDV === 'K') {
            return true;
        } else if (expectedDV === '11' && rutDV === '0') {
            return true;
        } else if (expectedDV === rutDV) {
            return true;
        }

        return false;
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        const name = event.target.name.value;
        const email = event.target.email.value;
        const company = event.target.company.value;
        const rut = event.target.rut.value;
        const message = event.target.message.value;

        if (!name || !email || !company || !rut) {
            toast.error('¡Por favor, completa todos los campos!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsSubmitting(false);
            return;
        }

        if (!isValidRUT(rut)) {
            toast.error('¡El RUT ingresado no es válido!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsSubmitting(false);
            return;
        }

        event.target.submit();

        setTimeout(() => {
            toast.success('¡Mensaje enviado exitosamente!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            event.target.reset();
            setIsSubmitting(false);
        }, 3000);
    };

    return (
        <>
            <div className="container forms my-5" id='contact'>
                <h2>Contáctanos</h2>
                <form onSubmit={handleFormSubmit} action="https://formsubmit.co/af822a3c559564ee8fcc23aec60fc116" method="POST">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Nombre y Apellido" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company" className="form-label">Empresa</label>
                        <input type="text" className="form-control" id="company" name="company" placeholder="Nombre de la empresa" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rut" className="form-label">Rut</label>
                        <RutInput
                            value={rut}
                            onChange={setRut}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel" className="form-label">Número de contacto (Opcional)</label>
                        <input type="tel" className="form-control" id="tel" name="tel" placeholder="(Código de área) Número" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Mensaje (Opcional)</label>
                        <textarea className="form-control" id="message" name="message" rows="4" placeholder="Mensaje"></textarea>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="custom-button btn-primary my-3" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : "Enviar"}
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default ContactForm;