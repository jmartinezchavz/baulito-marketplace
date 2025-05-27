import { Link } from "react-router-dom";
import { Navbar } from "../components";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
        <div className="text-center">
          <i className="fa fa-exclamation-triangle fa-5x text-warning mb-4"></i>
          <h1 className="display-4 fw-bold">¡Ups! Página no disponible</h1>
          <p className="lead mt-3 mb-4">
            En este momento <strong>BAULITO</strong> aún no tiene esta opción habilitada. 
            Estamos trabajando para traerte esta funcionalidad muy pronto.
          </p>
          <Link to="/" className="btn btn-primary btn-lg px-4">
            <i className="fa fa-arrow-left me-2"></i>Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
