import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';

import './TableHeader.scss';

/**
* @param {boolean} toggleButton
* @param {Function} handleButton change view between row/columns
*/
const TableHeader = ({ toggleButton, handleButton }) => {
    console.log(toggleButton)
    return (
        <div className="header">
            <div className="header__title">Mijn ondernemingen</div>

            <div className="header__buttons">
                <button className={toggleButton ? 'active' : ''} onClick={handleButton()}><FontAwesomeIcon icon={faList} /></button>
                <button className={!toggleButton ? 'active' : ''} onClick={handleButton()}><FontAwesomeIcon icon={faTh} /></button>
            </div>
        </div>
    )
}

export default TableHeader;