import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Nosotrxs</h1>
        <hr />
        <p className="lead text-center">
        <span style={{ color: 'black', fontWeight: 'bold' }}>BAULITO</span> es un sistema de tipo marketplace digital diseñado para facilitar la compra y venta de productos de segunda mano, como ropa, accesorios y artículos usados, de forma segura, organizada y eficiente. Inspirado en el concepto de una venta de garaje en línea, <span style={{ color: 'black', fontWeight: 'bold' }}>BAULITO</span> proporciona una plataforma intuitiva donde vendedores independientes pueden publicar sus productos y compradores pueden adquirirlos mediante una interfaz interactiva desarrollada como una Single Page Application (SPA).
        <br /><br />
        Este sistema nace como respuesta a la necesidad de promover la economía circular y el comercio sostenible, permitiendo que objetos en desuso encuentren nuevos dueños, a través de un entorno tecnológico moderno y confiable.
        </p>
        <h2 className="text-center py-4">Servicios que ofrece BAULITO</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Comprar productos</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/6214452/pexels-photo-6214452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Vender productos</h5> 
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/4481260/pexels-photo-4481260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Gestionar pedidos y entregas</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/5237657/pexels-photo-5237657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Recibir notificaciones</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage