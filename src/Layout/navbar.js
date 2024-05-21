import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <ul className="menu cf">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/atividade1">Semana 1</Link>
      </li>
      <li>
        <Link to="/atividade2">Semana 2</Link>
      </li>
      <li>
        <Link to="/atividade3">Semana 3</Link>
      </li>
      <li>
        <Link to="/atividade4">Semana 4</Link>
      </li>
    </ul>
  );
};

export default Navbar;
