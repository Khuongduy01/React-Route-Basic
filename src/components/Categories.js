import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Categories() {
  const activeClass = (isActive) => {
    return isActive ? "group-item selected" : "group-item";
  };

  const activeStyle = (isActive) => {
    return {
      backgroundColor: isActive ? "yellow" : "blue",
      color: isActive ? "blue" : "red",
    };
  };
  return (
    <div>
      <h2>Categories - Danh Mục</h2>

      <ul>
        <li>
          <NavLink
            to={"program"}
            activeClass={activeClass}
            activeStyle={activeStyle}
          >
            program
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"kid"}
            activeClass={activeClass}
            activeStyle={activeStyle}
          >
            kid
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"network"}
            activeClass={activeClass}
            activeStyle={activeStyle}
          >
            network
          </NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default Categories;
