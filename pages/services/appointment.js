import Form from '@/components/Form'
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'
import { HeadingContainer, HeadingPomodoroTitle, SettingButton } from '../Styles'
const Appointment = () => {

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
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
  `;

  const ModalContent = styled.div`

    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 50%;

    border-radius: 45px 15px;

  `;

  const HeadingAppointment = styled(HeadingPomodoroTitle)`

  animation: ${TinUpIn} 1s;


  `;



  const [modal, setModal] = useState(false)

  return (
    <div>
            <HeadingContainer>
                <HeadingPomodoroTitle variant='h2'>Appointment Admin</HeadingPomodoroTitle>
                <SettingButton onClick={() => {setModal(!modal)}} >Create New Appointment</SettingButton>
              </HeadingContainer>


            
            <div>
              <h1>Appointment List</h1>

              <ul>
                <li>kasjdlkasjflksd</li>
                <li>kasjdlkasjflksd</li>
                <li>kasjdlkasjflksd</li>
                <li>kasjdlkasjflksd</li>
                <li>kasjdlkasjflksd</li>
              </ul>

            </div>

            {
              modal && 
              <Modal onClick={() => {setModal(!modal)}}>
                <ModalContent
                >
                  <HeadingAppointment>New Appointment</HeadingAppointment>
                 <Form />
                </ModalContent>

              </Modal>
            }

    </div>
  )
}

export default Appointment