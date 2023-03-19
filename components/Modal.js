import { SettingButton, HeadingPomodoroTitle } from '@/public/styles';
import React from 'react'
import CreateAppointment from './CreateAppointment';
import styled, {keyframes} from 'styled-components'

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
  overflow: hidden;
`;

const ModalContent = styled.div`

  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 45px 15px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -15%;
  left: 25%;
  


`;

const HeadingAppointment = styled(HeadingPomodoroTitle)`

animation: ${TinUpIn} 1s;

`;

const ModalComponent = (
  {condition, 
    setter, 
    title, 
    description,
    date,
  updateTermin,
  edit,
  id}) => {
  return (
    
    <Modal >
    <ModalContent
    >
    <HeadingAppointment>New Appointment</HeadingAppointment>
    <CreateAppointment
      title = {title}
      description = {description}
      date = {date}
      updateTermin = {updateTermin}
      edit = {edit}
      id = {id}

    
    />
      <SettingButton onClick={() => {setter(!condition)}} >Close</SettingButton>
    </ModalContent>

  </Modal>

  )
}

export default ModalComponent;
