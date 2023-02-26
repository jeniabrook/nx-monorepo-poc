import React from "react";
import { log } from "logger";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

// Update UI lib

export const Button = ({ children, onClick }: ButtonProps) => {
  log("Hi");
  return (
    <button style={{ backgroundColor: "crimson" }} onClick={onClick}>
      {children}
    </button>
  );
};
