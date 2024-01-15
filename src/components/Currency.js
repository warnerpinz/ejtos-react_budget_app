import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: val.split(" ")[0],
        });
        document.getElementById("currency").innerHTML = `Currency (${val})`;
    };
    
    return (
        <div className='btn-group'>
            <DropdownButton id="currency" title="Currency" variant="success" size="lg"
            onSelect={(evt) => {changeCurrency(evt)}}>
                <Dropdown.Item eventKey="$ Dollar">$ Dollar</Dropdown.Item>
                <Dropdown.Item eventKey="£ Pound">£ Pound</Dropdown.Item>
                <Dropdown.Item eventKey="€ Euro">€ Euro</Dropdown.Item>
                <Dropdown.Item eventKey="₹ Ruppee">₹ Ruppee</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};
export default Currency;