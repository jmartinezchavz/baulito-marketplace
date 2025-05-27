import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container text-center">
        <h4 className="mb-3">BAULITO</h4>
        <p className="mb-4">
          Conectando personas a través de la economía circular. Compra y vende con propósito.
        </p>

        <div className="mb-4">
          <a
            href="https://facebook.com"
            className="text-white mx-3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-white mx-3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-white mx-3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="mailto:contacto@baulito.com"
            className="text-white mx-3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>

        <div className="text-muted small">
          © {new Date().getFullYear()} BAULITO. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
