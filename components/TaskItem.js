import { DeleteButton, EditButton, HeadingPomodoroTitle, SettingButton } from '@/public/styles'
import { Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'


const TaskCard = styled(Card)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 25px;
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  border-radius: 45px;
`;

const TaskContent = styled(Grid)`

  width: 45rem;


`;

const TaskItem = ({name, description, date, completed, category, id, setEditingItem, setIsEditingItem}) => {
  const router = useRouter();
  const deleteTask = async (id) =>{
        
    const resp = await fetch(`/api/task/${id}`, {
      method: 'DELETE'
    })
    .then(res => console.log("SUCCESS:: "+ res.json()))
    .catch(e => console.log("ERROR:" + e))

    router.push('/services/tasks')
    
}
async function MarkAsComplete(id, data) {
  const response = await fetch(`/api/task/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => console.log("SUCCESS:: "+ res.json()))
    .catch(e => console.log("ERROR:" + e))

  
    router.push('/services/tasks')
}
  return (
    <TaskCard>

        <TaskContent
        >

        <Typography variant='h4'>{name}</Typography>
        <Typography variant='h5'>{description}</Typography>
        <Typography>{completed}</Typography>
        <DeleteButton>{category}</DeleteButton>

        <Typography>{date}</Typography>

        </TaskContent>


        <Grid
          container 
          flexDirection={'column'}
          gap = {'15px'}
        >
          
       
        <DeleteButton delete onClick={() => {deleteTask(id)}}>x</DeleteButton>
        <EditButton onClick={() => {setEditingItem({id, name, description, category, date}); setIsEditingItem(true)}}>Edit</EditButton>
        <DeleteButton onClick={() => {MarkAsComplete(id, {name, description, category, completed: !completed})}}>{completed ? '✅' : '☑️'}
        </DeleteButton>
        </Grid>

    </TaskCard>
  )
}

export default TaskItem