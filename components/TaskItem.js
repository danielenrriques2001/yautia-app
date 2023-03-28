import { DeleteButton, EditButton, HeadingPomodoroTitle, PauseButton, SettingButton } from '@/public/styles'
import { Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

const TaskCard = styled(Card)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 25px;
  width: 80%;
  margin-bottom: 15px;
  display: flex;
  border-radius: 45px;
  margin: 0 auto;
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

        <HeadingPomodoroTitle
          Size = {3}
          Color = {'#2B3467' }
        >{name}
        </HeadingPomodoroTitle>
        <HeadingPomodoroTitle
          Size = {2}
        >{description}</HeadingPomodoroTitle>
        <HeadingPomodoroTitle slogan
          Size = {1.5}
          Weight = {500}
        >{category}</HeadingPomodoroTitle>

        <HeadingPomodoroTitle slogan>{date}</HeadingPomodoroTitle>

        </TaskContent>


        <Grid
          container 
          flexDirection={'column'}
          gap = {'15px'}
          width = {80}
        >
          
       
        <PauseButton delete onClick={() => {deleteTask(id)}}>
          <AiOutlineDelete/>
        </PauseButton>
        <PauseButton 
          onClick={() => {setEditingItem({id, name, description, category, date}); setIsEditingItem(true)}}>
          <AiFillEdit/>
        </PauseButton>
        <PauseButton onClick={() => {MarkAsComplete(id, {name, description, category, completed: !completed})}}>{completed ? '✅' : '☑️'}
        </PauseButton>
        </Grid>

    </TaskCard>
  )
}

export default TaskItem