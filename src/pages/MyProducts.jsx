import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const MyProducts = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
    titulo: "",
    precio: "",
    categoria: "",
    estado: "",
    descripcion: "",
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProducto({
      ...producto,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto publicado:", producto);
  };

  const handleCancelar = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center">Mis productos</h1>
        <hr />
        <p className="lead text-center"></p>
        {!mostrarFormulario ? (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
      <img
        src="assets/icon/icon_nohayproductos.png"
        alt="Sin productos"
        className="img-fluid mb-4"
        style={{
          maxWidth: "280px",
          opacity: 0.85,
          filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.15))"
        }}
      />
      <button
        className="btn btn-dark px-5 py-2"
        style={{
          fontSize: "1.1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
        onClick={() => setMostrarFormulario(true)}
      >
        Vender
      </button>
    </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                name="titulo"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                type="number"
                name="precio"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Categoría</label>
              <select
                name="categoria"
                className="form-select"
                required
                onChange={handleChange}
              >
                <option value="">Selecciona una categoría</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Tecnología">Tecnología</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select
                name="estado"
                className="form-select"
                required
                onChange={handleChange}
              >
                <option value="">Selecciona un estado</option>
                <option value="Nuevo">Nuevo</option>
                <option value="Usado-Como nuevo">Usado - Como nuevo</option>
                <option value="Usado-Buen estado">Usado - Buen estado</option>
                <option value="Usado-Aceptable">Usado - Aceptable</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                name="descripcion"
                className="form-control"
                rows="4"
                required
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label">Agregar imagen</label>
              <input
                type="file"
                name="imagen"
                className="form-control"
                accept="image/*"
                required
                onChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Publicar</button>
              <button type="button" className="btn btn-secondary" onClick={handleCancelar}>Cancelar</button>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyProducts;
