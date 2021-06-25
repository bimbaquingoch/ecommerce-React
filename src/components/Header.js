import React, { useState } from "react";

export const Header = ({ setTexto }) => {
  const [inputValue, setInputValue] = useState([""]);

  const handleInputChange = (evento) => {
    setInputValue(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setTexto([inputValue]);
    // console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onClick={handleInputChange} type="submit" value="ru" />
      <input onClick={handleInputChange} type="submit" value="zh-CN" />
      <input onClick={handleInputChange} type="submit" value="pt" />
      <input onClick={handleInputChange} type="submit" value="quech" />
    </form>
  );
};
