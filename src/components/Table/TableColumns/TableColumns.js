import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

// CSS
import './TableColumns.scss';

export const tableHeaders = [
    "Naam onderneming",
    "Huidige waarde",
    "Aantal aandelen",
];


export const tableHeader = (result) => (
    <tr className="table__header">
        {tableHeaders.map((label, index) => (
            <th key={index}>
                {label}
            </th>
        ))}
    </tr>
)

const TableColumns = ({ result, handleClick }) => {
    return (
        <>
            {tableHeader(result)}
            {result && result?.data.map((item, index) => {
                const { corporation_type, name, share_value, shareholders } = item //destructuring
                return (
                    <>
                        <div key={index} className='table__content'>
                            <div className="table__rectangle"></div>
                            <tr>
                                <td>{corporation_type}</td>
                                <td>{name}</td>
                                <td>{share_value}</td>
                                <td>{shareholders.length}</td>
                            </tr>
                            <button onClick={() => handleClick(index, item)}>
                                <FontAwesomeIcon className="table__icon" icon={faArrowCircleRight} />
                            </button>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default TableColumns;