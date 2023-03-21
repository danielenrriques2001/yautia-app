import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'
import { HeadingContainer, HeadingPomodoroTitle } from '@/public/styles'
import { Grid } from '@mui/material'
import { useSession, getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const TasksComponent = () => {

  const { data: session, status } = useSession()

  const id = session.user.email;


  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const [EditingItem, setEditingItem] = useState({})
  const [isEditingItem, setIsEditingItem] = useState(false)


useEffect(() => {
  setLoading(true)
  fetch(`/api/task/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setData(data)
      setLoading(false)
    })
}, [])

  return (
    <>
        <HeadingContainer>
            <HeadingPomodoroTitle>To-do List</HeadingPomodoroTitle>
        </HeadingContainer>

        <Grid
          container
    
        >
        <TaskForm EditingItem = {EditingItem} id = {id} isEditingItem = {isEditingItem}/>
        {
          data && <TaskList tasks = {data} setEditingItem = {setEditingItem} setIsEditingItem = {setIsEditingItem}/>
        }
        </Grid>

    </>
  )
}

export default TasksComponent

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });


  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
      props: { session },
  };
}