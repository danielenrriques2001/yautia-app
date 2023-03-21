import { Grid } from '@mui/material'
import React from 'react'
import TaskItem from './TaskItem'
const TaskList = ({tasks, setEditingItem, setIsEditingItem}) => {
  return (

    <Grid
        
    >
        {
            tasks.map((e) => {

                return(
                    <TaskItem 
                    key = {e._id}
                    name = {e.name}
                    description = {e.description}
                    category = {e.category}
                    completed = {e.completed}
                    date = {e.date}
                    id = {e._id}
                    setEditingItem = {setEditingItem}
                    setIsEditingItem = {setIsEditingItem}
                   />
                )
               
            })
        }
    
    </Grid>
    

  )
}

export default TaskList