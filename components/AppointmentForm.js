import {HeadingPomodoroTitle, ModalContent } from '@/public/styles';
import CreateAppointment from './CreateAppointment';
import styled, {keyframes} from 'styled-components';
import { Modal } from '@mui/material';

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
const HeadingAppointment = styled(HeadingPomodoroTitle)`
animation: ${TinUpIn} 1s;
`;
const AppointmentForm = (
  {open, 
    handleClose, 
    title, 
    description,
    date,
  updateTermin,
  edit,
  id}) => {
  return (
    
    <Modal 
      open = {open}
      onClose = {handleClose}
    >
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
    </ModalContent>

  </Modal>

  )
}

export default AppointmentForm;
