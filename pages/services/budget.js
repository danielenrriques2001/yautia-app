import NewBudget from '@/components/NewBudget'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { FloatingButton, HeadingContainer, HeadingPomodoroTitle, SettingButton, SpinnerContainer } from '../../public/styles'
import { getSession, useSession } from 'next-auth/react';
import BudgetOverView from '@/components/BudgetOverView';
import BudgetForm from '@/components/BudgetForm';
import ExpenseList from '@/components/ExpenseList';
import MoonLoader from "react-spinners/MoonLoader";
import useSWR from 'swr'

const Modal = styled.div`
  position: fixed; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  z-index: auto;
  overflow: hidden;
`;

const Budget = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data: session, status } = useSession()
  const [validBudget, setValidBudget] = useState(false)
  const [budgetNumber, setBudgetNumber] = useState(0)

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingExpense, setisEditingExpense] = useState(false)
  const [EditingItem, setEditingItem] = useState({})

  const handleOpenExpense = () => setisEditingExpense(true);
  const handleCloseExpense = () => setisEditingExpense(false);


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState(null)

  const [isLoading, setLoading] = useState(false)

  const id = session.user.email;

  const {data: expensesList, mutate} = useSWR(`/api/budget/${id}`, fetcher)





useEffect(() => {
  setLoading(true)
  fetch(`/api/user/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setData(data)
      setLoading(false)

      if(data) {
        setValidBudget(true)
        return;
      }
      setValidBudget(false)
      
    })


}, [])

useEffect(() => {
  mutate();
}, [mutate])

mutate();
  

async function updateUser(id, data) {
  const response = await fetch(`/api/user/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => console.log("SUCCESS:: "+ res.json()))
    .catch(e => console.log("ERROR:" + e))

  
}


if (isLoading) return <SpinnerContainer><MoonLoader color='#76EEC6' size={500}/></SpinnerContainer>

  return (
    <>
          <HeadingContainer>
              <HeadingPomodoroTitle
                 Size = {5}
                 Weight = {300}
                 Color = {'#2B3467'}
              
              >Budget Admin</HeadingPomodoroTitle>
          </HeadingContainer>

    {
      validBudget
      ? <BudgetOverView 
            id = {session?.user?.email} 
            value = {data}
            updateUser = {updateUser}
            isEditing = {isEditing}
            setIsEditing = {setIsEditing}
            expenses={expensesList}
            /> 
      : <Modal>
        <NewBudget 
            id = {session?.user?.email} 
            budgetNumber = {budgetNumber} 
            setBudgetNumber={setBudgetNumber} 
            setValidBudget={setValidBudget}
            updateUser = {updateUser}
            />
        </Modal>
      
    
    }


        <FloatingButton onClick={() => {handleOpen()}} >Add!</FloatingButton>

        {
          open && <BudgetForm id = {id} open = {open} handleClose = {handleClose}/> 
        }

        {
          expensesList?.length > 0 && <ExpenseList 
          expenses={expensesList} 
          isEditing = {isEditing} 
          isEditingExpense = {isEditingExpense}
          handleCloseExpense = {handleCloseExpense}
          handleOpenExpense = {handleOpenExpense}
          EditingItem = {EditingItem}
          setEditingItem = {setEditingItem}

          />
        }

       
   
    </>

    
  )
}

export default Budget

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