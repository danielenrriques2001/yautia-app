import React, { useState } from 'react'
import { Grid, Card } from '@mui/material'
import styled from 'styled-components';
import {  HeadingPomodoroTitle, NavigationItemLink, EditButton, DeleteButton, HeadingNavButton, PauseButton} from '@/public/styles'
import { useRouter } from 'next/router';
import AppointmentForm from './AppointmentForm';
import {AiOutlineDelete, AiFillEdit} from 'react-icons/ai'

const ItemAppointment = styled(NavigationItemLink)`

  width: 100%;^
  height: 450px;

  @media (max-width: 768px) {
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 0;
   padding: 0;
   margin: 0;
   align-items: center;
   justify-content: center;
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


        router.push('/services/appointment')

        
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

      return response;
      
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
                    <HeadingPomodoroTitle
                      Size = {2}
                      Weight = {100}
                    >{title}</HeadingPomodoroTitle>

                    <div>
                      <HeadingPomodoroTitle
                        Size = {1.5}
                        Weight = {800}
                      >{description}</HeadingPomodoroTitle>
                      <HeadingPomodoroTitle 
                        slogan
                        Size = {2}
                        Weight = {300}

                      >{date}</HeadingPomodoroTitle>
                    </div>
                
                </Grid>
                  

                   <Grid
                    container 
                    justifyContent={'center'}
                    paddingBottom = {'10px'}
                    gap = {1}

                   >
                    <PauseButton 
                      onClick={() => {deleteTermin(id)}} 
                      BGColor = {'#F5A2AF'}
                      TextColor = {'black'}
                      FontSize = {2}
                      FontWeight = {300}
                      Padding = {1}
                      >
                         <AiOutlineDelete/>
                      </PauseButton>
                    <PauseButton  
                      onClick={() => {setEdit(!edit)}}
                      BGColor = {'#F7CBB4'}
                      TextColor = {'black'}
                      FontSize = {2}
                      FontWeight = {300}
                      Padding = {1}
                      >
                      <AiFillEdit/>
                      </PauseButton>
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

