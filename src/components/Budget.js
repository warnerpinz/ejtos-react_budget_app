
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const UPPER_LIMIT = 20000;

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        } else if (event.target.value > UPPER_LIMIT) {
            alert(`You value cannot exceed upper limit of ${UPPER_LIMIT}`);
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;