import React, { useState, useEffect } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { useRouter } from 'next/router';
const Budget = ({value, updateUser, id, isEditing, setIsEditing, expenses}) => {


	const [totalExpenses, settotalExpenses] = useState(0)

	useEffect(() => {

		if(expenses) {

		let totalExpenses = expenses.reduce( (accumulator, current) => {
		
			return accumulator + Number(current.cost); 
		
		}, 0)

		settotalExpenses(totalExpenses)

		}


	
	}, [expenses])
	

  const router = useRouter();

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		
    const result = updateUser(id, value)

    if(result) {
    
      router.reload('/services/budget')
      
    }
		setIsEditing(false);
	};

	return (
		<div>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={value} />
			) : (
				<ViewBudget isEditing = {isEditing} handleEditClick={handleEditClick} budget={value} totalExpenses = {totalExpenses}/>
			)}
		</div>
	);
};

export default Budget;
