import { Grid, TextField } from '@mui/material';
import React, { useContext, useState, useEffect, useMemo } from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseList = ({expenses}) => {

    const [filteredExpenses, setfilteredExpenses] = useState(expenses)
	const [selectedCategory, setSelectedCategory] = useState('');

	


	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			// filteredExpense.name.toLowerCase().includes(event.target.value)
			// filteredExpense.cost.includes(event.target.value)
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	const handleCategoryChange = e =>  setSelectedCategory(event.target.value);

	const  getFilteredList = () => {
		if (!selectedCategory) {
		  return filteredExpenses;
		}
		return filteredExpenses.filter((item) => item.category === selectedCategory);
	  }
	 
	let filteredList = useMemo(getFilteredList, [selectedCategory, filteredExpenses]);

	console.log('Filtered---------------------', filteredList)
	  
	return (
		<Grid
            container
            marginY={5}
        >
			<TextField
				type='text'
				placeholder='Type to search...'
				onChange={handleChange}
			/>



			<select
				name="category-list"
				id="category-list"
				onChange={handleCategoryChange}
			>				
						<option value = "">All</option>
				        <option value="saving">Savings</option>
						<option value="food">Food</option>
						<option value="home">Home</option>
						<option value="expenses">Expenses</option>
						<option value="hobby">Hobbies</option>
						<option value="health">Health</option>
						<option value="abo">Abos</option>
			</select>


			<Grid
                container 
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
				{filteredList.map((expense) => (
					<ExpenseItem 
						item xs={2} sm={4} md={4} 
						key={ expense.id}
						name={expense.name}
						cost={expense.cost}
                        category = {expense.category}
						// id={expense.id}
					/>
				))}
			</Grid>
		</Grid>
	);
};

export default ExpenseList;