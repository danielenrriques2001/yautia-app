import { HeadingPomodoroTitle, SettingButton, StyledButton } from '@/public/styles';
import { Card, Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {FaRegEdit} from 'react-icons/fa';
import BudgetForm from './BudgetForm';
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

>
				<HeadingPomodoroTitle>{name}</HeadingPomodoroTitle>
				<Grid
					container
					flexDirection={'column'}
				>
					<p>{category}</p>
					<p >${cost}</p>
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
