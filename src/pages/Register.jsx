import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        idNumber: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Limpiar error al escribir
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'El nombre es obligatorio';
        if (!formData.idNumber) newErrors.idNumber = 'El número de identificación es obligatorio';
        if (!formData.email) newErrors.email = 'El correo es obligatorio';
        if (!formData.password) newErrors.password = 'La contraseña es obligatoria';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Aquí podrías manejar el envío del formulario, como enviarlo a una API
            console.log('Formulario válido:', formData);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Crea tu cuenta</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="name">Nombre completo</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    placeholder="Ingrese su nombre completo"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>

                            <div className="form my-3">
                                <label htmlFor="idNumber">Número de identificación</label>
                                <input
                                    type="number"
                                    className={`form-control ${errors.idNumber ? 'is-invalid' : ''}`}
                                    id="idNumber"
                                    name="idNumber"
                                    placeholder="Ingrese su número de identificación"
                                    value={formData.idNumber}
                                    onChange={handleChange}
                                />
                                {errors.idNumber && <div className="invalid-feedback">{errors.idNumber}</div>}
                            </div>

                            <div className="form my-3">
                                <label htmlFor="email">Agrega tu e-mail</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    placeholder="Ejemplo de correo válido: ejemplo123@correo.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="form my-3">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    placeholder="Mínimo 8 caracteres, con mayúscula, minúscula y número."
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>

                            <div className="my-3">
                                <p>¿Ya tiene una cuenta? <Link to="/login" className="text-decoration-underline text-info">Ingreso</Link></p>
                            </div>

                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Registrar
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

export default Register;
