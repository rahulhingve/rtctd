"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick: () => void;
  span?:any
}

export const Button = ({ onClick, children ,span }: ButtonProps) => {
  return (
    <button onClick={onClick}  className="text-white w-28 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
      <span>{span}</span>
      {children}
      
    </button>

  );
};