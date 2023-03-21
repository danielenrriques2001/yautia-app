import React, { useState } from 'react'
import { Grid, Card } from '@mui/material'
import styled from 'styled-components';
import {  StyledButton } from '@/public/styles'
import { useRouter } from 'next/router';
import ModalComponent from './Modal';

const AppointmentItem = ({title, description, date, id}) => {

    const router = useRouter();

    const [edit, setEdit] = useState(false)

    const deleteTermin = async (id) =>{
        
        const resp = await fetch(`/api/appointment/${id}`, {
          method: 'DELETE'
        })
        .then(res => console.log("SUCCESS:: "+ res.json()))
        .catch(e => console.log("ERROR:" + e))


        setTimeout(() => {
            router.reload('/services/appointment')
        }, 500);


        
    }
    
    async function updateTermin(id, data) {
      const response = await fetch(`/api/appointment/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => console.log("SUCCESS:: "+ res.json()))
        .catch(e => console.log("ERROR:" + e))


        setTimeout(() => {
          router.reload('/services/appointment')
      }, 500);
      
    }




  return (
    <div>
         <Card>
                <Grid
                  container 
                  flexDirection={'column'}
                  alignItems= {'center'}
                  paddingTop = {'25px'}
                >
                    <AppointmentHeading>{title}</AppointmentHeading>

                    <div>
                      <p>{description}</p>
                      <p>{date}</p>
                    </div>
                
                </Grid>
                  

                   <Grid
                    container 
                    justifyContent={'center'}
                    paddingBottom = {'10px'}
                    gap = {1}

                   >
                    <AppointmentButton delete onClick={() => {deleteTermin(id)}} >Delete</AppointmentButton>
                    <AppointmentButton  onClick={() => {setEdit(!edit)}}>Edit</AppointmentButton>
                   </Grid>
                </Card>

                {
                  edit && <ModalComponent 
                            setter = {setEdit} 
                            condition = {edit}
                            title = {title}
                            description = {description}
                            date = {date}
                            updateTermin = {updateTermin}
                            edit = {edit}
                            id =  {id}
                            
                            
                            />
                }



    </div>
  )
}

export default AppointmentItem

const AppointmentHeading = styled.h2`
margin: 0;
padding: 0;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-transform: uppercase;

`;

const AppointmentButton = styled(StyledButton)`

background: ${props => props.delete ? '#e7197e': '#efe1ce'};
`;