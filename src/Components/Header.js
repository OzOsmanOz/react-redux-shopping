import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border shadow p-3 mb-5 bg-body rounded fixed-top">
      <div className="container ">
        <Link
          to="/"
          className="text-black fw-bold fs-2"
          style={{ textDecoration: "none" }}
        >
          Shopping
        </Link>
      </div>
    </div>
  );
};
export default Header;
