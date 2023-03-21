import { HeadingPomodoroTitle, SettingButton } from '@/public/styles'
import { Card } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const TaskItem = ({name, description, date, completed, category, id, setEditingItem, setIsEditingItem}) => {

  const router = useRouter();
  const deleteTask = async (id) =>{
        
    const resp = await fetch(`/api/task/${id}`, {
      method: 'DELETE'
    })
    .then(res => console.log("SUCCESS:: "+ res.json()))
    .catch(e => console.log("ERROR:" + e))

    setTimeout(() => {
        router.reload('/services/task')
    }, 500);
    
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


  //   setTimeout(() => {
  //     router.reload('/services/tasks')
  // }, 1000);
  
}



  return (
    <Card>
        <HeadingPomodoroTitle>{name}</HeadingPomodoroTitle>
        <p>{description}</p>
        <p>{completed}</p>
        <p>{category}</p>

        <p>{date}</p>

        <SettingButton onClick={() => {deleteTask(id)}}>x</SettingButton>
        <SettingButton onClick={() => {setEditingItem({id, name, description, category}); setIsEditingItem(true)}}>Edit</SettingButton>
        <SettingButton onClick={() => {MarkAsComplete(id, {name, description, category, completed: !completed})}}>{completed ? 'Uncompleted' : 'Mark as Completed'}</SettingButton>
    </Card>
  )
}

export default TaskItem