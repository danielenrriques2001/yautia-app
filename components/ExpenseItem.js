import { EditButton, HeadingPomodoroTitle, SettingButton, StyledButton } from '@/public/styles';
import { Card, Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {FaRegEdit} from 'react-icons/fa';
import BudgetForm from './BudgetForm';


const StyledCard = styled(Card)`
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
		border-radius: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center	;
		padding: 1rem;
		width: 20rem;
		border: 3px blue solid;
		border-color: ${props => 
		props.border === 'expenses' ? 'red' 
		: props.border === 'saving' ? 'blue'
		: props.border === 'food' ? 'green'
		: props.border === 'home' ? 'yellow'
		: props.border === 'hobby' ? 'gray'
		: props.border === 'health' ? 'green'
		: props.border === 'abo' ? 'orange'
		: 'black'
		};

		transition: all 1s ease-out;

		&:hover {
			cursor: pointer;
			box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
			transform: translateY(-15px);
		}

`;

const CostHeading = styled(HeadingPomodoroTitle)`

	font-size: 45px;
	width: 45%;
	height: 100px;
	font-stretch: expanded;
	font-weight: 1200;

	box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
	
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: 1rem;
	margin-bottom: 1rem;
	transition: ease-in-out .1s all ;
	&:hover {
		cursor: pointer;
		box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
		font-weight: 800;
	}

`;

const NameHeading = styled(HeadingPomodoroTitle)`

	font-size: 2rem;
	text-transform: uppercase;
	font-weight: 300;
	text-align: center;

`;

const ExpenseItem = ({id, cost, name, category, isEditingExpense, handleCloseExpense, handleOpenExpense}) => {

	const router = useRouter();

	const deleteExpense = async (id) =>{
        
        const resp = await fetch(`/api/budget/${id}`, {
          method: 'DELETE'
        })
        .then(res => console.log("SUCCESS:: "+ res.json()))
        .catch(e => console.log("ERROR:" + e))


        setTimeout(() => {
            router.reload('/services/budget')
        }, 500);


        
    }
    
	return (

		<>
				<StyledCard
				 border = {category}	

>
				<NameHeading slogan>{name}</NameHeading>
				<Grid
					container
					flexDirection={'column'}
				>
					<EditButton slogan color = {category}>{category}</EditButton>
					<CostHeading slogan>${cost}</CostHeading>
					<StyledButton onClick={() => {deleteExpense(id)}}>
						<TiDelete/>
					</StyledButton>
					<StyledButton onClick={() => {handleOpenExpense()}}>
						<FaRegEdit/>
					</StyledButton>
				</Grid>
				</StyledCard>
				
				
				
		
		
		

		{
          isEditingExpense && <BudgetForm  
			open = {isEditingExpense} 
			handleClose = {handleCloseExpense}
			category = {category}
			cost = {cost}
			name = {name}
			isEditingExpense = {isEditingExpense}
			id = {id}
		  
		  /> 
        }
		</>

	);
};

export default ExpenseItem;
