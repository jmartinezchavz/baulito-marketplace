import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setTouched({ email: true, password: true });
      return;
    }
    // Lógica de autenticación aquí
    console.log("Formulario enviado:", { email, password });
  };

  const inputClass = (field) =>
    `form-control ${touched[field] && !eval(field) ? "is-invalid" : ""}`;

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Iniciar Sesión</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit} noValidate>
              <div className="my-3">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  className={inputClass("email")}
                  id="email"
                  placeholder="nombre@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                />
                {!email && touched.email && (
                  <div className="invalid-feedback">Este campo es obligatorio.</div>
                )}
              </div>

              <div className="my-3">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className={inputClass("password")}
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, password: true }))
                  }
                />
                {!password && touched.password && (
                  <div className="invalid-feedback">Este campo es obligatorio.</div>
                )}
              </div>

              <div className="mb-2">
                <Link to="/forgot-password" className="text-decoration-underline text-info">
                  ¿Olvidaste tu contraseña? Puedes restablecerla aquí.
                </Link>
              </div>

              <div className="my-3">
                <p>
                  ¿No tienes una cuenta?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Regístrate
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <button className="btn btn-dark w-100" type="submit">
                  Iniciar Sesión
                </button>
              </div>

              <hr className="my-4" />
              <div className="text-center">
                <button className="btn btn-outline-danger w-100 mb-2" type="button">
                  Ingresar con Google
                </button>
                <button className="btn btn-outline-primary w-100" type="button">
                  Ingresar con Microsoft
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
