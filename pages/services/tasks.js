import TaskForm from '@/components/TaskForm'
import TaskItem from '@/components/TaskItem'
import TaskList from '@/components/TaskList'
import { FloatingButton, HeadingContainer, HeadingPomodoroTitle, ModalContent } from '@/public/styles'
import { Grid, Modal } from '@mui/material'
import { useSession, getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import useSWR from 'swr'


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
  if (isLoading) return <div>loading...</div>


  return (
    <>
        <HeadingContainer>
            <HeadingPomodoroTitle>To-do List</HeadingPomodoroTitle>
        </HeadingContainer>

        <Grid
          container
    
        >
        <TaskForm EditingItem = {EditingItem} id = {id} isEditingItem = {isEditingItem} setIsEditingItem = {setIsEditingItem}/>
        {
          tasks && <TaskList tasks = {tasks} setEditingItem = {setEditingItem} setIsEditingItem = {setIsEditingItem}/>
        }
        </Grid>


        <FloatingButton onClick={() => {handleOpenGenerator(); generateRandomTask();}}>Random!</FloatingButton>
       {
        openGenerator && 
        <Modal
          open = {openGenerator} onClose = {handleCloseGenerator}

        >

          <ModalContent>
                 {randomTask 
                 ? <TaskItem name = {randomTask.name} category = {randomTask.category} description = {randomTask.description} date = {randomTask.date}  />
                 : <ReactLoading type={'cylon'} color={'#e33900'} height={400} width={400} />
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