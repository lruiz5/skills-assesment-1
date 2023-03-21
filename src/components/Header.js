import React from "react";

export const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <h1 data-testid="title">{title}</h1>
      <p data-testid="subtitle">{subtitle}</p>
    </header>
  );
};
