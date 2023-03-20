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
import ModalComponent from '@/components/Modal'
const AppointmentCom = () => {
  const { data: session, status } = useSession()

  const id = session.user.email;




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
              modal && <ModalComponent condition = {modal} setter = {setModal}/>

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