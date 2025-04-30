import React from "react";

export default function Tile({ className, value, onClick, playerTurn }) {
  const hoverClass = value === null && playerTurn ? `${playerTurn}-hover` : "";
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
      {value}
    </div>
  );
}
