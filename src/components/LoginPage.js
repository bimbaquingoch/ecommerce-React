import React from "react";
import "../styles/login.css";

export const LoginPage = () => {
  return (
    <form className="formulario" action="/login" method="POST">
      <div className="form-content">
        <h1 className="animate__fadeInUp">Login</h1>
        <img
          className="animate__fadeInUp"
          src="https://img.icons8.com/metro/76/000000/change-user-male.png"
          alt="user Icon"
        />
        <input
          type="email"
          className="form-control animate__fadeInUp"
          id="email"
          placeholder="CORREO"
          name="email"
          autoComplete="on"
          required
        />

        <input
          type="password"
          className="form-control animate__fadeInUp"
          id="password"
          placeholder="PASSWORD"
          name="password"
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
