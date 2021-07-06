import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/login.css";

export const LoginPage = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  useEffect(() => {}, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form className="formulario" method="POST" onSubmit={handleSubmit}>
      <div className="form-content">
        <h1 className="animate__fadeInUp">Login</h1>
        <img
          className="animate__fadeInUp"
          src="https://img.icons8.com/metro/76/000000/change-user-male.png"
          alt="user Icon"
        />
        <input
          type="email"
          name="email"
          className="form-control animate__fadeInUp"
          id="email"
          placeholder="CORREO"
          autoComplete="on"
          value={email}
          onChange={handleInputChange}
          required
        />

        <input
          type="password"
          className="form-control animate__fadeInUp"
          id="password"
          placeholder="PASSWORD"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <div className="content-buttons">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
