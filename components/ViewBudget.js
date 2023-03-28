import { EditButton, HeadingPomodoroTitle, PauseButton, SettingButton } from '@/public/styles';
import { Container, Grid, Card, Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {AiFillEdit} from 'react-icons/ai'
const ViewBudget = ({budget, handleEditClick, totalExpenses}) => {


	const ViewBudgetItem = styled.p`
		padding: 0;
		margin: 0;
		
		display: flex;
		justify-content: center;
		font-weight: 900;
		font-size: ${props => props.small ? "2rem" : "7rem"};
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	`;

	const ViewBudgetContent = styled(Box)`

			box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
			padding: 15px;
			border-radius: 45px;
	`;



	return (
		<Grid
			container
			display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}
		>


		<ViewBudgetContent
			item 
			gridColumn="span 8"
		>

		
		<Grid
			container 
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}

		>



				<HeadingPomodoroTitle
					Size = {3}
				>Budget:</HeadingPomodoroTitle>
				<HeadingPomodoroTitle
					Size = {10}
					Weight = {800}

				>
						${budget}
					</HeadingPomodoroTitle>
				<PauseButton 
					onClick={handleEditClick}
					BGColor = {'#EB455F'}
					FontSize = {3}
					FontWeight = {300}
					Width = {35}
					Padding = {2}

				>
					<AiFillEdit/>
				</PauseButton>

		</Grid>

		</ViewBudgetContent>

		<ViewBudgetContent
			item 
			gridRow={'span 1'}
			gridColumn = {'9/11'}
			flexDirection = {'column'}
			alignItems = {'center'}
			justifyContent = {'center'}
		>
			<HeadingPomodoroTitle
				Size = {2}
			>
				Disponible:
				<HeadingPomodoroTitle
					Size = {3}
					Weight =  {800}
				>
					 ${budget - totalExpenses}
				</HeadingPomodoroTitle>	
			</HeadingPomodoroTitle>
				
				
			</ViewBudgetContent>

		<ViewBudgetContent
						item 
						gridRow={'span 1'}
						gridColumn = {'11/13'}
		>
			<HeadingPomodoroTitle
				Size = {2}

			>Spent so far: 
				<HeadingPomodoroTitle
				Weight =  {800}
				Size = {3}
				>${totalExpenses} </HeadingPomodoroTitle>
			</HeadingPomodoroTitle>
		</ViewBudgetContent>
		</Grid>
	)
		};

export default ViewBudget;