import React from "react";

// CSS
import "./TableRows.scss";

import { tableHeaders } from "../TableColumns/TableColumns";


/**
* @param {Object} result
* @param {Function} handleClick
*/
const TableRows = ({ result, handleClick }) => {
  return (
    result &&
    result?.data.map((item, index) => {
      const { name, share_value, shareholders } = item;
      return (
        <div key={index} className="table__content">
          <div className="table__rectangle"></div>
          <div className="table__logo">
            <span>{name.split(" ")[0]}</span>
          </div>
          <div className="table__info-name">{name ?? "No name"}</div>
          <div className="table__info">
            <div className="table__info-column">
              <p>{tableHeaders[1]} </p>
              <p>{tableHeaders[2]} </p>
            </div>
            <div className="table__info-column">
              <p>{share_value} </p>
              <p>{shareholders.length} </p>
            </div>
          </div>
          <div className="table__button">
            <button onClick={() => handleClick(index, item)}>
              Manage deze onderneming
            </button>
          </div>
        </div>
      );
    })
  );
};

export default TableRows;
