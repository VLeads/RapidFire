import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <p>Error:404 PageNotFound</p>

      <Link to="/home">
        <button className="btn btn-info">Home</button>
      </Link>
    </div>
  );
};
