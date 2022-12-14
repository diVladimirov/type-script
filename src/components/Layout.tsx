import React, { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/users">users</NavLink>
          </li>
          <li>
            <NavLink to="/todos">todos</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
