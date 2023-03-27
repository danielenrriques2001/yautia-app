
import CreateAppointment from '@/components/CreateAppointment'
import Form from '@/components/Form'
import { Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components'
import { FloatingButton, HeadingContainer, HeadingPomodoroTitle, SettingButton } from '../../public/styles'
import { getSession, useSession } from 'next-auth/react'
import AppointmentList from '@/components/AppointmentList'
import ModalComponent from '@/components/AppointmentForm'

import ClipLoader from "react-spinners/ClipLoader";
import AppointmentForm from '@/components/AppointmentForm'

const AppointmentCom = () => {
  const { data: session, status } = useSession()
  const id = session.user.email;
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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


if (isLoading) return <ClipLoader color='#76EEC6'/>
if (!data) return <p>No profile data</p>


  return (
    <div>
            <HeadingContainer>
                <HeadingPomodoroTitle variant='h2'>Appointment Admin</HeadingPomodoroTitle>
                <FloatingButton onClick={() => {handleOpen()}} >New Appointment</FloatingButton>
              </HeadingContainer>


            
            <div>
              <HeadingPomodoroTitle slogan>{data.length > 0 ? 'Appointment List' : ''}</HeadingPomodoroTitle>
                {
                  data && <AppointmentList data = {data} />
                }

            </div>

            {
              open && <AppointmentForm open = {open} handleClose = {handleClose}></AppointmentForm>

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