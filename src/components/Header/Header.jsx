import React from "react";
import styles from "./Header.module.css";
import logoImg from "./HeaderImg/logo.svg";
import iconImg from "./HeaderImg/icons.png";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className={styles}>
      <nav className={header__nav}>
        <ul>
          <div className="logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <li>
      <NavLink
              to="/"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              Main Page
            </NavLink>
            {/* <a href="#!">Main Page</a> */}
    </li>
          <li>
          <NavLink
              to="/Categories"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              Categories
            </NavLink>
            {/* <a href="#!">Categories</a> */}
          </li>
          <li>
          <NavLink
              to="/All products"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              All products
            </NavLink>
            {/* <a href="#!">All products</a> */}
          </li>
          <li>
          <NavLink
              to="/All sales"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              All sales
            </NavLink>
            {/* <a href="#!"></a>All sales */}
          </li>
          <div className={header__icon}>
            <img src={iconImg} alt="Icon" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header

