import React, { useState } from 'react'
import { Grid, Card } from '@mui/material'
import styled from 'styled-components';
import {  HeadingPomodoroTitle, NavigationItemLink, EditButton, DeleteButton, HeadingNavButton} from '@/public/styles'
import { useRouter } from 'next/router';
import AppointmentForm from './AppointmentForm';


const ItemAppointment = styled(NavigationItemLink)`

  width: 100%;

  @media (max-width: 768px) {
   width: 80%;
}
`;
const AppointmentItem = ({title, description, date, id}) => {

    const router = useRouter();

    const [edit, setEdit] = useState(false)
    const handleEdit = () => setEdit(!edit);

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
         <ItemAppointment>
                <Grid
                  container 
                  flexDirection={'column'}
                  alignItems= {'center'}
                  paddingTop = {'25px'}
                >
                    <HeadingPomodoroTitle slogan>{title}</HeadingPomodoroTitle>

                    <div>
                      <p>{description}</p>
                      <HeadingPomodoroTitle slogan>{date}</HeadingPomodoroTitle>
                    </div>
                
                </Grid>
                  

                   <Grid
                    container 
                    justifyContent={'center'}
                    paddingBottom = {'10px'}
                    gap = {1}

                   >
                    <DeleteButton delete onClick={() => {deleteTermin(id)}} >Delete</DeleteButton>
                    <EditButton  onClick={() => {setEdit(!edit)}}>Edit</EditButton>
                   </Grid>
                </ItemAppointment>

                {
                  edit && <AppointmentForm 
                            open = {edit} 
                            handleClose = {handleEdit}
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

