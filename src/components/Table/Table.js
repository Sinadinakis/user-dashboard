import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// Components
import { useFetchApi } from "../../hooks/useFetchApi";
import TableRows from "./TableColumns/TableColumns";
import TableColumns from "./TableRows/TableRows";

// CSS
import "./Table.scss";

/**
* @param {strimg} query in case of a search query included in the url
* @param {boolean} toggleButton
* @param {Function} history coming from react-router
*/
const Table = ({ query, toggleButton, history }) => {
  const result = useFetchApi(
    `https://run.mocky.io/v3/d0f9e797-2014-4525-9a15-080cff5cc837/?${query}`
  );

  const handleButtonClick = (id, item) => {
    history.push({
      pathname: `/organization/${id}`,
      state: item,
    });
  };

  const renderTableData = toggleButton ? (
    <TableRows result={result} handleClick={handleButtonClick} />
  ) : (
    <TableColumns result={result} handleClick={handleButtonClick} />
  );

  return result && result?.data ? (
    <table className="table">
      <tbody
        className={`table__body ${
          toggleButton ? "table__body--column" : "table__body--row"
        }`}
      >
        {renderTableData}
      </tbody>
    </table>
  ) : (
    <p>No data on this list yet - We can add a loader</p>
  );
};

Table.propTypes = {
  query: PropTypes.string,
};

export default withRouter(Table);
