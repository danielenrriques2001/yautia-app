import React, { useState } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { useRouter } from 'next/router';
const Budget = ({value, updateUser, id}) => {

  const router = useRouter();
	const [isEditing, setIsEditing] = useState(false);

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
				<ViewBudget handleEditClick={handleEditClick} budget={value} />
			)}
		</div>
	);
};

export default Budget;
