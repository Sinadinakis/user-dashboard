import React from "react";

import "./Card.scss";

/**
* @param {node} children
*/
const Card = ({ children }) => {
  return (
    <div className="container">
      <div className="card">{children}</div>
    </div>
  );
};

export default Card;
