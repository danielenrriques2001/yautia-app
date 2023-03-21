import { HeadingPomodoroTitle, SettingButton } from '@/public/styles';
import { Container, Grid, Card, Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const ViewBudget = ({budget, handleEditClick, totalExpenses}) => {


	const ViewBudgetButton = styled(HeadingPomodoroTitle)`
	
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 45px;
		margin: 0;
		padding: 0;
		text-transform: uppercase;

		letter-spacing: 5px;
		line-height: 1;
	
	
	`;

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



				<ViewBudgetButton>Budget:</ViewBudgetButton>
				<ViewBudgetItem>
						${budget}
					</ViewBudgetItem>
				<SettingButton type='button' class='btn btn-primary' onClick={handleEditClick}>
					Edit
				</SettingButton>

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
			<ViewBudgetButton >
				<ViewBudgetItem small>
					Disponible: ${budget - totalExpenses}
				</ViewBudgetItem>	
					</ViewBudgetButton>
				
				
			</ViewBudgetContent>

		<ViewBudgetContent
						item 
						gridRow={'span 1'}
						gridColumn = {'11/13'}
		>
			<ViewBudgetItem small>Spent so far: ${totalExpenses} </ViewBudgetItem>
		</ViewBudgetContent>
		</Grid>
	)
		};

export default ViewBudget;