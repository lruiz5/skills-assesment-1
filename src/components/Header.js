import React from "react";

export const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};
