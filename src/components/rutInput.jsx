import React from 'react';

const RutInput = ({ value, onChange }) => {
    const formatRut = (rut) => {
        rut = rut.replace(/[^\dkK]/g, '');

        const rutDigits = rut.slice(0, -1);
        const rutDV = rut.slice(-1);

        const formattedRut = rutDigits.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + rutDV;

        return formattedRut;
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        let formattedRut = formatRut(inputValue);
        if (inputValue === '' || inputValue === '-') {
            formattedRut = '';
        }
        onChange(formattedRut);
    };

    return (
        <input
            type="text"
            className="form-control"
            id="rut"
            value={value}
            onChange={handleChange}
            placeholder="Ingresa el RUT de la empresa"
        />
    );
};

export default RutInput;
