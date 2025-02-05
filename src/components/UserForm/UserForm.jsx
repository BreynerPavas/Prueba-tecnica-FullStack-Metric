import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.scss';

const UserForm = () => {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState({}); // Estado para los errores
    const [submittedData, setSubmittedData] = useState(null); // Estado para los datos enviados

    const { name, email, phone, message } = formData;

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setFormErrors({
            ...formErrors,
            [e.target.name]: ""
        });
    };

    const onBlurHandler = (e) => {
        const { name, value } = e.target;
        let error = "";
        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = "Enter a valid email address";
            }
        }

        if (name === "phone") {
            if (!/^\d{9}$/.test(value)) {
                error = "Phone number must have 9 digits";
            }
        }
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const errors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                errors[key] = "This field is required";
            }
        });
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Guardamos los datos enviados
        setSubmittedData(formData);

        // Resetear el formulario
        setFormData(initialState);

        // Simulación de API
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", formData);
        } catch (error) {
            // Manejar errores si fuera necesario
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Ejemplo Formulario</h1>

                <div className={`inputContainer ${formErrors.name ? "inputError" : ""}`} id="name">
                    <label htmlFor="name">Full name</label>
                    <input type="text" name="name" className="textInputs" value={name} onChange={onChangeHandler} />
                    {formErrors.name && <span className="errorMessage">{formErrors.name}</span>}
                </div>

                <div className={`inputContainer ${formErrors.email ? "inputError" : ""}`} id="email">
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" className="textInputs" value={email} onChange={onChangeHandler} onBlur={onBlurHandler} />
                    {formErrors.email && <span className="errorMessage">{formErrors.email}</span>}
                </div>

                <div className={`inputContainer ${formErrors.phone ? "inputError" : ""}`} id="phone">
                    <label htmlFor="phone">Phone number</label>
                    <input type="number" name="phone" className="textInputs" value={phone} onChange={onChangeHandler} onBlur={onBlurHandler} />
                    {formErrors.phone && <span className="errorMessage">{formErrors.phone}</span>}
                </div>

                <div className={`inputContainer ${formErrors.message ? "inputError" : ""}`} id="message">
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" className="textInputs" value={message} onChange={onChangeHandler} />
                    {formErrors.message && <span className="errorMessage">{formErrors.message}</span>}
                </div>

                <input type="submit" value="Send" className="submitB" />
            </form>

            {/* Card para mostrar los datos enviados */}
            {submittedData && (
                <div className="cardUser" id="card">
                    <h2>Datos Enviados</h2>
                    <div className="cardContent">
                        <p><strong>Full Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Phone Number:</strong> {submittedData.phone}</p>
                        <p><strong>Message:</strong> {submittedData.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserForm;
