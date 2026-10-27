# RecuperoFacturas

**Sitio web corporativo desarrollado para un cliente real, con React, Vite y Bootstrap.**

[![React](https://img.shields.io/badge/React-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)

## 🌐 Sitio web

**[Visitar RecuperoFacturas](https://recuperofacturas.cl/)**

## 📖 Sobre el proyecto

RecuperoFacturas es un sitio informativo para una empresa dedicada a servicios de gestión y recuperación de facturas. Su objetivo es presentar los servicios de la empresa, explicar su propuesta de valor y ofrecer un canal de contacto para potenciales clientes.

El proyecto se desarrolló a partir de materiales, contenidos y referencias visuales proporcionados por el cliente. La implementación del frontend fue realizada de manera independiente.

## ✨ Funcionalidades y características

- Página de inicio con navegación por secciones.
- Presentación de la empresa y sus servicios.
- Tarjetas interactivas para describir las modalidades de cobranza.
- Sección de entidades relacionadas.
- Formulario de contacto con campos para datos personales y de empresa.
- Formato y validación del RUT chileno en el frontend.
- Mensajes de notificación mediante React Toastify.
- Diseño adaptable a diferentes tamaños de pantalla con Bootstrap y CSS.
- Integración del formulario con un servicio externo de envío a correo electrónico (FormSubmit).

> **Alcance:** este repositorio contiene el frontend del sitio. No incluye un backend propio para el formulario de contacto.

## 🧑‍💻 Mi participación

Desarrollé de manera independiente la interfaz web, tomando como referencia la estructura, los colores y el contenido entregados por el cliente. Implementé los componentes en React, los estilos, las secciones informativas, las interacciones del sitio y el formulario de contacto, además de participar en su publicación.

## 🛠️ Tecnologías

| Tecnología | Uso |
| --- | --- |
| React | Componentes y estructura de la interfaz |
| JavaScript | Lógica de interacción y validaciones |
| Vite | Entorno de desarrollo y compilación |
| Bootstrap | Diseño responsivo y componentes visuales |
| CSS | Estilos personalizados |
| React Toastify | Notificaciones del formulario |
| FormSubmit | Servicio externo para recepción de mensajes |

## 📂 Estructura principal

```text
src/
├── components/
│   ├── aboutUs.jsx
│   ├── banner.jsx
│   ├── contact.jsx
│   ├── do.jsx
│   ├── entidades.jsx
│   ├── footer.jsx
│   ├── navbar.jsx
│   └── rutInput.jsx
├── imgs/
├── stylesheets/
├── App.jsx
├── global.css
└── main.jsx
```

## 💻 Ejecución local

**Requisitos:** Node.js y npm instalados.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/LanderosPaolo/recupero-facturas.git
   ```

2. Ingresar a la carpeta e instalar las dependencias:

   ```bash
   cd recupero-facturas
   npm install
   ```

3. Iniciar el entorno de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir en el navegador la dirección local indicada por Vite.

Para generar la versión de producción:

```bash
npm run build
```

## 👤 Autor

**Paolo Landeros** — Desarrollo frontend.

[GitHub](https://github.com/LanderosPaolo)

---

*Proyecto comercial realizado en 2023. Este repositorio documenta la implementación frontend desarrollada para el cliente.*
