import React from "react";
import { withRouter } from "react-router";

// Components
import { useFetchApi } from "../../hooks/useFetchApi";
import TableRows from "./TableColumns/TableColumns";
import TableColumns from "./TableRows/TableRows";
import Spinner from '../UI/Spinner/Spinner';

// CSS
import "./Table.scss";

/**
* @param {strimg} query in case of a search query included in the url
* @param {boolean} toggleButton
* @param {Function} history coming from react-router
*/
const Table = ({ toggleButton, history }) => {
    const result = useFetchApi(`https://run.mocky.io/v3/d0f9e797-2014-4525-9a15-080cff5cc837/`);

    const handleButtonClick = (id, item) => {
        history.push({
            pathname: `/organization/${id}`,
            state: item,
        });
    };

    const renderTableData = toggleButton
        ? <TableRows result={result} handleClick={handleButtonClick} />
        : <TableColumns result={result} handleClick={handleButtonClick} />

    return (
        result && result?.data ? (
            <table className="table">
                <tbody
                    className={`table__body ${toggleButton ? "table__body--column" : "table__body--row"
                        }`}
                >
                    {renderTableData}
                </tbody>
            </table>
        ) : <Spinner />
    )
};

export default withRouter(Table);
