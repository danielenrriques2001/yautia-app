import { HeadingPomodoroTitle, SettingButton, StyledButton } from '@/public/styles';
import { Card, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import styled from 'styled-components';

const StyledCard = styled(Card)`


		border-radius: 30px;
		background: #e0e0e0;
		box-shadow: 15px 15px 30px #bebebe,
					-15px -15px 30px #ffffff;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center	;


`;


const ExpenseItem = (props) => {


	return (
		<StyledCard

		>
			<HeadingPomodoroTitle>{props.name}
			
			</HeadingPomodoroTitle>
			<Grid
				container
				flexDirection={'column'}
			>
				<p>{props.category}</p>
				<p >${props.cost}</p>
				{/* <TiDelete size='1.5em' onClick={handleDeleteExpense} /> */}
			</Grid>
		</StyledCard>
	);
};

export default ExpenseItem;
