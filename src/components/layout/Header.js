import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div className="header__left">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reference">Reference</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
      <div className="header__logo">
        <Link to="/">API Site</Link>
      </div>
      <div className="header__right">
        <ul>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/unsplash">Unsplash</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
