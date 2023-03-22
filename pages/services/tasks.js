import TaskForm from '@/components/TaskForm'
import TaskItem from '@/components/TaskItem'
import TaskList from '@/components/TaskList'
import { FloatingButton, HeadingContainer, HeadingPomodoroTitle, ModalContent } from '@/public/styles'
import { Grid, Modal } from '@mui/material'
import { useSession, getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';

const TasksComponent = () => {

  const { data: session, status } = useSession()

  const id = session.user.email;


  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const [EditingItem, setEditingItem] = useState({})
  const [isEditingItem, setIsEditingItem] = useState(false)

  const [randomTask, setRandomTask] = useState()
  const [openGenerator, setOpenGenerator] = useState(false);
  const handleOpenGenerator = () => setOpenGenerator(true);
  const handleCloseGenerator = () => {setOpenGenerator(false); setRandomTask()};

  

  function generateRandomTask() {

   const randomNumber = Math.floor((Math.random() * data.length));

   const randomItem = data[randomNumber]

   
   setTimeout(() => {
    setRandomTask(randomItem)
   }, 1500);

  
   
  };



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