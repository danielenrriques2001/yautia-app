import { StyledButton } from '@/public/styles';
import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const EditBudget = ({budget, handleSaveClick}) => {


	
	const [value, setValue] = useState(budget);
	return (
		<Grid
			container
			justifyContent={'Center'}

		>
			<TextField
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<StyledButton
				type='button'
				class='btn btn-primary'
				onClick={() => handleSaveClick(value)}
			>
				Save
			</StyledButton>
		</Grid>
	);
};

export default EditBudget;
