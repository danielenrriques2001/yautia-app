import { Grid, TextField } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseList = ({expenses}) => {

    const [filteredExpenses, setfilteredExpenses] = useState(expenses)

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<Grid
            container
            marginY={5}
        >
			<TextField
				type='text'
				placeholder='Type to search...'
				onChange={handleChange}
                fullWidth = {true}
			/>
			<Grid
                container 
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
				{filteredExpenses.map((expense) => (
					<ExpenseItem 
                        item xs={2} sm={4} md={4} key={index}
                        key={expense.id}
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
                        category = {expense.category}
					/>
				))}
			</Grid>
		</Grid>
	);
};

export default ExpenseList;