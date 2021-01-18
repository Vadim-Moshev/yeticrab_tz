import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Menu = () => {
  return (
    <nav className="menu">
      <Link className="menu-item" to="/">
        Главная (список заявок)
      </Link>
      <Link className="menu-item" to="/addrequest">
        Добавить заявку
      </Link>
      <Link className="menu-item" to="/search">
        Поиск
      </Link>
    </nav>
  );
};

export default Menu;
