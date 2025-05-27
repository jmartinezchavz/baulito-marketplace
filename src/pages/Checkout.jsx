import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Tu carrito está vacío</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => (subtotal += item.price * item.qty));
    state.map((item) => (totalItems += item.qty));

    return (
      <div className="container py-5">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0">Resumen del pedido</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Productos ({totalItems})<span>${Math.round(subtotal)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Envío <span>${shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div><strong>Total</strong></div>
                    <span><strong>${Math.round(subtotal + shipping)}</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h4 className="mb-0">Datos de facturación</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <label htmlFor="firstName" className="form-label">Nombres</label>
                      <input type="text" className="form-control" id="firstName" required />
                    </div>
                    <div className="col-sm-6 my-1">
                      <label htmlFor="lastName" className="form-label">Apellidos</label>
                      <input type="text" className="form-control" id="lastName" required />
                    </div>
                    <div className="col-12 my-1">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="col-md-6 my-1">
                      <label htmlFor="identificacion" className="form-label">Número de identificación</label>
                      <input type="number" className="form-control" id="identificacion" required />
                    </div>
                    <div className="col-md-6 my-1">
                      <label htmlFor="celular" className="form-label">Celular</label>
                      <input type="number" className="form-control" id="celular" required />
                    </div>
                    <div className="col-md-6 my-1">
                      <label htmlFor="celular2" className="form-label">Celular 2 <span className="text-muted">(Opcional)</span></label>
                      <input type="number" className="form-control" id="celular2" />
                    </div>
                    <div className="col-md-6 my-1">
                      <label htmlFor="ciudad" className="form-label">Ciudad</label>
                      <input type="text" className="form-control" id="ciudad" value="Bogotá D.C" disabled />
                    </div>
                    <div className="col-md-6 my-1">
                      <label htmlFor="localidad" className="form-label">Localidad</label>
                      <select className="form-select" id="localidad" required>
                        <option value="">Selecciona...</option>
                        {[
                          "Antonio Nariño", "Barrios Unidos", "Bosa", "Chapinero", "Ciudad Bolívar",
                          "Engativá", "Fontibón", "Kennedy", "La Candelaria", "Los Mártires",
                          "Rafael Uribe Uribe", "Puente Aranda", "San Cristóbal", "Santa Fe", "Suba",
                          "Sumapaz", "Teusaquillo", "Tunjuelito", "Usaquén", "Usme"
                        ].map(loc => <option key={loc}>{loc}</option>)}
                      </select>
                    </div>
                    <div className="col-md-6 my-1">
                      <label htmlFor="direccion" className="form-label">Dirección</label>
                      <input type="text" className="form-control" id="direccion" required />
                    </div>
                    <div className="col-md-6 my-1">
                      <label htmlFor="barrio" className="form-label">Barrio</label>
                      <input type="text" className="form-control" id="barrio" required />
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h4 className="mb-3">Pago</h4>

                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label htmlFor="cc-name" className="form-label">Nombre en la tarjeta</label>
                      <input type="text" className="form-control" id="cc-name" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cc-number" className="form-label">Número de tarjeta</label>
                      <input type="text" className="form-control" id="cc-number" required />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="cc-expiration" className="form-label">Vencimiento</label>
                      <input type="text" className="form-control" id="cc-expiration" required />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="cc-cvv" className="form-label">CVV</label>
                      <input type="text" className="form-control" id="cc-cvv" required />
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button className="w-100 btn btn-primary" type="submit" disabled>
                    Proceder al pago
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Pago</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
