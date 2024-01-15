
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { Icon } from '@iconify/react';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const changeAllocation = (name, type) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type,
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <Icon icon="bi:plus-circle-fill" color="green" width="30"
            onClick={event=> changeAllocation(props.name, 'ADD_EXPENSE')}/>
        </td>
        <td>
            <Icon icon="carbon:subtract-filled" color="red" width="30"
            onClick={event=> changeAllocation(props.name, 'RED_EXPENSE')}/>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;