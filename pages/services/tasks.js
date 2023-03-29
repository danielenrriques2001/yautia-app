import TaskForm from '@/components/TaskForm'
import TaskItem from '@/components/TaskItem'
import TaskList from '@/components/TaskList'
import { FloatingButton, HeadingContainer, HeadingPomodoroTitle, ModalContent, NavigationItemLink, SpinnerContainer } from '@/public/styles'
import { Grid, Modal } from '@mui/material'
import { useSession, getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import {MoonLoader, ClockLoader} from "react-spinners";
import SetPomodoro from '@/components/Pomodoro/SetPomodoro'


const TasksComponent = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data: session, status } = useSession()
  const id = session.user.email;
  const { data: tasks, error, isLoading, mutate } = useSWR(`/api/task/${id}`, fetcher)


  useEffect(() => {
    mutate();
  }, [])
  
  mutate();

  const [EditingItem, setEditingItem] = useState({})
  const [isEditingItem, setIsEditingItem] = useState(false)

  
  const [randomTask, setRandomTask] = useState()
  const [openGenerator, setOpenGenerator] = useState(false);
  const handleOpenGenerator = () => setOpenGenerator(true);
  const handleCloseGenerator = () => {setOpenGenerator(false); setRandomTask()};

  
  function generateRandomTask() {

   const randomNumber = Math.floor((Math.random() * tasks.length));

   const randomItem = tasks[randomNumber]

   
   setTimeout(() => {
    setRandomTask(randomItem)
   }, 1500);


  };


  if (error) return <div>failed to load</div>
  if (isLoading) return <SpinnerContainer><MoonLoader color='#76EEC6' size={500}/></SpinnerContainer>


  return (
    <>
        <HeadingContainer>
            <HeadingPomodoroTitle
            Size = {5}
            Weight = {300}
            Color = {'#2B3467'}
            >To-do List</HeadingPomodoroTitle>
        </HeadingContainer>

        <Grid
          container
    
        >
        <TaskForm EditingItem = {EditingItem} id = {id} isEditingItem = {isEditingItem} setIsEditingItem = {setIsEditingItem}/>

        {
          tasks && <TaskList tasks = {tasks} setEditingItem = {setEditingItem} setIsEditingItem = {setIsEditingItem}/>
        }
        </Grid>

        {
          tasks.length > 0 && <FloatingButton onClick={() => {handleOpenGenerator(); generateRandomTask();}}>Random!</FloatingButton>
        }

        
       {
        openGenerator && 
        <Modal
          open = {openGenerator} onClose = {handleCloseGenerator}

        >

          <ModalContent task >
                 {randomTask 
                 ? <> <TaskItem name = {randomTask.name} category = {randomTask.category} description = {randomTask.description} date = {randomTask.date}/>  
                      <NavigationItemLink Width={120} Height = {50} TextColor = {'black'} href={'/services/pomodoro'}>Start Now!</NavigationItemLink>
                 </>
                 
                 : <SpinnerContainer><ClockLoader color='#BC3F67' size={450}/></SpinnerContainer>
                 }
                
          </ModalContent>
           
        </Modal>
        
        

       }

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