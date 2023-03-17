// import dbConnect from '@/db/connect'
// import User from '@/db/models/User'

import CreateAppointment from '@/components/CreateAppointment'
import Form from '@/components/Form'

import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components'
import { HeadingContainer, HeadingPomodoroTitle, SettingButton } from '../../public/styles'
import { getSession, useSession } from 'next-auth/react'
import AppointmentList from '@/components/AppointmentList'

const AppointmentCom = () => {
  const { data: session, status } = useSession()

  const id = session.user.email;

  const TinUpIn = keyframes`
  0% { 
    opacity: 0;
    -webkit-transform: scale(1, 1) translateY(-900%);
    transform: scale(1, 1) translateY(-900%);
  }

  50%,
  70%,
  90% {
    opacity: 1;
    -webkit-transform: scale(1.1, 1.1) translateY(0);
    transform: scale(1.1, 1.1) translateY(0);
  }

  60%,
  80%,
  100% {
    opacity: 1;
    -webkit-transform: scale(1, 1) translateY(0);
    transform: scale(1, 1) translateY(0);
  }

    `;
  
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
  `;

  const ModalContent = styled.div`

    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 50%;;
    border-radius: 45px 15px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  `;

  const HeadingAppointment = styled(HeadingPomodoroTitle)`

  animation: ${TinUpIn} 1s;

  `;


const [modal, setModal] = useState(false)
const [data, setData] = useState(null)
const [isLoading, setLoading] = useState(false)


useEffect(() => {
  setLoading(true)
  fetch(`/api/appointment/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setData(data)
      setLoading(false)
    })
}, [])


if (isLoading) return <p>Loading...</p>
if (!data) return <p>No profile data</p>


  return (
    <div>
            <HeadingContainer>
                <HeadingPomodoroTitle variant='h2'>Appointment Admin</HeadingPomodoroTitle>
                <SettingButton onClick={() => {setModal(!modal)}} >Create New Appointment</SettingButton>
              </HeadingContainer>


            
            <div>
              <h1>Appointment List</h1>
                {
                  data && <AppointmentList data = {data} />
                }

            </div>

            {
              modal && 
              <Modal >
                <ModalContent
                >
                  <HeadingAppointment>New Appointment</HeadingAppointment>
                <CreateAppointment/>
                  <SettingButton onClick={() => {setModal(!modal)}} >Close</SettingButton>
                </ModalContent>

              </Modal>
            }

    </div>
  )
}

export default AppointmentCom

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