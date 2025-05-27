import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div
          className="card text-white border-0 mx-3"
          style={{ maxHeight: "650px", overflow: "hidden", borderRadius: "10px" }}
        >
          <img
            className="card-img img-fluid"
            src="./assets/img/banner_bogota.jpg"
            alt="Banner de BAULITO"
            style={{ objectFit: "cover", height: "100%", filter: "brightness(60%)" }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container bg-dark bg-opacity-50 p-4 rounded" style={{ maxWidth: "1300px" }}>
              <h1
                className="display-3 fw-bold text-uppercase"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}
              >
                BAULITO
              </h1>
              <p
                className="fs-5 mt-3"
                style={{
                  lineHeight: "1.6",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                  fontWeight: "400"
                }}
              >
                ¡Un parche bacano para vender y comprar ropa de segunda en Bogotá! Aquí encuentras cosas <strong>
                chimbas</strong>, con estilo y a precios que no dañan el bolsillo.
              </p>
              <p
                className="fs-6 fst-italic text-light"
                style={{
                  textShadow: "1px 1px 2px rgba(0,0,0,0.6)"
                }}
              >
                Revive prendas con historia. Apoya lo local. Crea tu propio estilo desde el corazón de la ciudad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
