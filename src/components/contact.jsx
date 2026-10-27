
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../stylesheets/contact.css";
import RutInput from "./rutInput";

// const FORM_ENDPOINT =
//   "https://formsubmit.co/ajax/aeef2c76abe4669f65adf6455932f2f1";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/bos.polo.9@gmail.com";

const isValidRUT = (value) => {
  const cleanRut = value.replace(/[.\-\s]/g, "").toUpperCase();

  if (!/^[0-9]{7,8}[0-9K]$/.test(cleanRut)) {
    return false;
  }

  const digits = cleanRut.slice(0, -1).split("").reverse();
  const actualDV = cleanRut.slice(-1);

  let sum = 0;
  let multiplier = 2;

  for (const digit of digits) {
    sum += Number(digit) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const remainder = 11 - (sum % 11);
  const expectedDV =
    remainder === 11 ? "0" : remainder === 10 ? "K" : String(remainder);

  return actualDV === expectedDV;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rut, setRut] = useState("");
  const submittingRef = useRef(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Impide envíos duplicados, incluso antes de que React renderice.
    if (submittingRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const companyRut = String(formData.get("rut") ?? "").trim();

    if (!name || !company || !email || !companyRut) {
      toast.error("¡Por favor, completa todos los campos obligatorios!");
      return;
    }

    if (!isValidRUT(companyRut)) {
      toast.error("¡El RUT ingresado no es válido!");
      return;
    }

    if (!form.elements.namedItem("email").checkValidity()) {
      toast.error("¡Ingresa un correo electrónico válido!");
      return;
    }

    // Evita enviar espacios al inicio o al final.
    formData.set("name", name);
    formData.set("company", company);
    formData.set("email", email);
    formData.set("rut", companyRut);

    submittingRef.current = true;
    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();

      // FormSubmit también puede comunicar un error en el JSON.
      if (
        result.success !== true &&
        result.success !== "true"
      ) {
        throw new Error(result.message || "El servicio rechazó el envío.");
      }

      toast.success("¡Mensaje recibido! Nos pondremos en contacto pronto.");

      form.reset();
      setRut("");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      toast.error(
        "No pudimos enviar tu mensaje. Inténtalo nuevamente más tarde."
      );
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container forms my-5" id="contact">
        <h2>Contáctanos</h2>

        <form onSubmit={handleFormSubmit} noValidate>
          <input type="hidden" name="_template" value="table" />

          {/* Campo antispam de FormSubmit */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nombre y Apellido"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Empresa
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              placeholder="Nombre de la empresa"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rut" className="form-label">
              RUT
            </label>
            <RutInput value={rut} onChange={setRut} />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tel" className="form-label">
              Número de contacto (Opcional)
            </label>
            <input
              type="tel"
              className="form-control"
              id="tel"
              name="tel"
              placeholder="(Código de área) Número"
              autoComplete="tel"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Mensaje (Opcional)
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Mensaje"
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="custom-button btn-primary my-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
};

export default ContactForm;
